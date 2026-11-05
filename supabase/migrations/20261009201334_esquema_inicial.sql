-- ========================================================
-- 1. EXTENSIONES
-- ========================================================
-- ========================================================
-- 2. TABLAS PRINCIPALES
-- ========================================================

-- TABLA: HOSPITALS (Tenant / Cliente)
CREATE TABLE hospitals (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- TABLA: PROFILES (Usuarios asociados a auth.users y a un hospital)
CREATE TABLE profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    hospital_id UUID REFERENCES hospitals(id) ON DELETE CASCADE NOT NULL,
    full_name TEXT NOT NULL,
    role TEXT NOT NULL CHECK (role IN ('admin', 'biomedical_tech', 'clinical_staff')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- TABLA: PROVIDERS (Empresas proveedoras)
CREATE TABLE providers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    hospital_id UUID REFERENCES hospitals(id) ON DELETE CASCADE NOT NULL,
    name TEXT NOT NULL,
    contact_name TEXT,
    phone TEXT,
    email TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- TABLA: EQUIPMENT_BATCHES (Master - Lote/Modelo de Equipos)
CREATE TABLE equipment_batches (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    hospital_id UUID REFERENCES hospitals(id) ON DELETE CASCADE NOT NULL,
    provider_id UUID REFERENCES providers(id) ON DELETE SET NULL,
    name TEXT NOT NULL,
    brand TEXT,
    model TEXT,
    risk_level TEXT CHECK (risk_level IN ('HIGH', 'MEDIUM', 'LOW')) DEFAULT 'MEDIUM',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- TABLA: EQUIPMENT_UNITS (Detail - Unidades físicas individuales)
CREATE TABLE equipment_units (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    hospital_id UUID REFERENCES hospitals(id) ON DELETE CASCADE NOT NULL,
    batch_id UUID REFERENCES equipment_batches(id) ON DELETE CASCADE NOT NULL,
    serial_number TEXT,
    inventory_code TEXT,
    location_area TEXT NOT NULL DEFAULT 'Por clasificar',
    status TEXT CHECK (status IN ('OPERATIONAL', 'IN_MAINTENANCE', 'OUT_OF_SERVICE')) DEFAULT 'OPERATIONAL',
    last_calibration DATE,
    next_calibration DATE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    CONSTRAINT unique_hospital_inventory UNIQUE (hospital_id, inventory_code)
);

-- TABLA: WORK_ORDERS (Órdenes de Trabajo)
CREATE TABLE work_orders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    hospital_id UUID REFERENCES hospitals(id) ON DELETE CASCADE NOT NULL,
    unit_id UUID REFERENCES equipment_units(id) ON DELETE CASCADE NOT NULL,
    provider_id UUID REFERENCES providers(id) ON DELETE SET NULL,
    type TEXT CHECK (type IN ('PREVENTIVE', 'CORRECTIVE', 'CALIBRATION')) NOT NULL,
    priority TEXT CHECK (priority IN ('LOW', 'MEDIUM', 'HIGH', 'CRITICAL')) DEFAULT 'MEDIUM',
    status TEXT CHECK (status IN ('OPEN', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED')) DEFAULT 'OPEN',
    reported_by UUID REFERENCES profiles(id) ON DELETE SET NULL,
    assigned_to UUID REFERENCES profiles(id) ON DELETE SET NULL,
    maintenance_period TEXT,
    description TEXT NOT NULL,
    resolution_notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    started_at TIMESTAMP WITH TIME ZONE,
    closed_at TIMESTAMP WITH TIME ZONE
);

-- TABLA: EQUIPMENT_DOCUMENTS (Manuales, Certificados y Reportes)
CREATE TABLE equipment_documents (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    hospital_id UUID REFERENCES hospitals(id) ON DELETE CASCADE NOT NULL,
    batch_id UUID REFERENCES equipment_batches(id) ON DELETE CASCADE,
    unit_id UUID REFERENCES equipment_units(id) ON DELETE CASCADE,
    work_order_id UUID REFERENCES work_orders(id) ON DELETE CASCADE,
    doc_type TEXT CHECK (doc_type IN ('MANUAL', 'CALIBRATION_CERT', 'MAINTENANCE_PROOF', 'WARRANTY')) NOT NULL,
    file_name TEXT NOT NULL,
    file_url TEXT NOT NULL,
    uploaded_by UUID REFERENCES profiles(id) ON DELETE SET NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ========================================================
-- 3. ÍNDICES DE RENDIMIENTO (BÚSQUEDAS RÁPIDAS)
-- ========================================================
CREATE INDEX idx_batches_hospital ON equipment_batches(hospital_id);
CREATE INDEX idx_units_hospital ON equipment_units(hospital_id);
CREATE INDEX idx_units_batch ON equipment_units(batch_id);
CREATE INDEX idx_units_status ON equipment_units(status);
CREATE INDEX idx_work_orders_unit ON work_orders(unit_id);
CREATE INDEX idx_work_orders_hospital ON work_orders(hospital_id);

-- ========================================================
-- 4. SEGURIDAD (RLS) Y FUNCIÓN HELPER MULTI-TENANT
-- ========================================================
CREATE OR REPLACE FUNCTION get_user_hospital_id()
RETURNS UUID AS $$
  SELECT hospital_id FROM profiles WHERE id = auth.uid();
$$ LANGUAGE sql SECURITY DEFINER STABLE;

ALTER TABLE hospitals ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE providers ENABLE ROW LEVEL SECURITY;
ALTER TABLE equipment_batches ENABLE ROW LEVEL SECURITY;
ALTER TABLE equipment_units ENABLE ROW LEVEL SECURITY;
ALTER TABLE work_orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE equipment_documents ENABLE ROW LEVEL SECURITY;

CREATE POLICY "RLS_profiles_self" ON profiles FOR ALL USING (id = auth.uid());
CREATE POLICY "RLS_providers" ON providers FOR ALL USING (hospital_id = get_user_hospital_id()) WITH CHECK (hospital_id = get_user_hospital_id());
CREATE POLICY "RLS_equipment_batches" ON equipment_batches FOR ALL USING (hospital_id = get_user_hospital_id()) WITH CHECK (hospital_id = get_user_hospital_id());
CREATE POLICY "RLS_equipment_units" ON equipment_units FOR ALL USING (hospital_id = get_user_hospital_id()) WITH CHECK (hospital_id = get_user_hospital_id());
CREATE POLICY "RLS_work_orders" ON work_orders FOR ALL USING (hospital_id = get_user_hospital_id()) WITH CHECK (hospital_id = get_user_hospital_id());
CREATE POLICY "RLS_equipment_documents" ON equipment_documents FOR ALL USING (hospital_id = get_user_hospital_id()) WITH CHECK (hospital_id = get_user_hospital_id());