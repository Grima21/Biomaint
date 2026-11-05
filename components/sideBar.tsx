"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  Clipboard,
  TriangleAlert,
  Truck,
  Settings,
  ChevronLeft,
  ChevronRight,
  Activity,
} from "lucide-react";

const menuItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Inventario de Equipos",
    href: "/dashboard/inventario",
    icon: Package,
  },
  {
    label: "Ordenes de Trabajo",
    href: "/dashboard/ordenesDeTrabajo",
    icon: Clipboard,
  },
  {
    label: "Alertas / Calibraciones",
    href: "/dashboard/alert",
    icon: TriangleAlert,
  },
  {
    label: "Proovedores",
    href: "/dashboard/proveedores",
    icon: Truck,
  },
  {
    label: "Ajustes",
    href: "/dashboard/setting",
    icon: Settings,
  },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();

  return (
    <>
      <aside
        className={`sticky top-0 h-screen hidden sm:flex overflow-hidden flex-col justify-center shrink-0 border-r border-border bg-card transition-[width] duration-300 ease-in-out ${
          isOpen ? "w-64" : "w-17.5 items-center"
        }`}
      >
        <header
          className={`min-h-19.75 max-h-19.75 px-2 py2 w-full border-b border-border flex items-center ${
            isOpen ? "" : "justify-center"
          }`}
        >
          <div className="flex items-center gap-2 min-w-0">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground shadow-sm">
              <Activity className="h-5 w-5 text-white" />
            </div>
            {isOpen ? (
              <div className="flex flex-col min-w-0 gap-2">
                <p className="truncate text-sm font-semibold text-foreground leading-tight">
                  Biomaint
                </p>
                <span className="truncate text-[11px] text-muted-foreground leading-tight">
                  CMMS Biómedico
                </span>
              </div>
            ) : null}
          </div>
        </header>

        <nav
          aria-label="Navegación principal"
          className="flex-1 overflow-hidden py-density-md px-density-sm space-y-1"
        >
          {menuItems.map(({ label, href, icon: Icon }) => {
            const active =
              pathname === href ||
              (href !== "/" &&
                href !== "/dashboard" &&
                pathname.startsWith(`${href}/`));

            return (
              <Link
                key={label}
                href={href}
                aria-current={active ? "page" : undefined}
                className={`flex items-center gap-3 rounded-md px-2 py-2 text-sm transition-colors ${
                  active
                    ? "bg-primary text-primary-foreground"
                    : "bg-background text-muted-foreground"
                }`}
              >
                <Icon className="h-5 w-5 shrink-0" />
                {isOpen ? (
                  <span className="whitespace-nowrap">{label}</span>
                ) : null}
              </Link>
            );
          })}
        </nav>
        <footer className="border-t border-border w-full whitespace-nowrap">
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="w-full flex gap-2 items-center mb-2 px-3 py-2 text-left text-sm font-medium text-muted-foreground whitespace-nowrap cursor-pointer"
            aria-label={isOpen ? "Contraer menú" : "Expandir menú"}
          >
            {isOpen ? (
              <>
                <ChevronLeft className="w-4 h-4" />
                Contraer menu
              </>
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </button>
        </footer>
      </aside>

      <nav
        aria-label="Navegación principal"
        className="fixed inset-x-0 bottom-0 z-40 flex border-t border-border bg-card pb-[env(safe-area-inset-bottom)] shadow-retool-md sm:hidden"
      >
        {menuItems.map(({ label, href, icon: Icon }) => {
          const active =
            pathname === href ||
            (href !== "/" &&
              href !== "/dashboard" &&
              pathname.startsWith(`${href}/`));

          return (
            <Link
              key={label}
              href={href}
              aria-label={label}
              aria-current={active ? "page" : undefined}
              className={`flex min-w-0 flex-1 flex-col items-center justify-center gap-1 px-1 py-3 transition-colors ${
                active
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
              <span className="sr-only">{label}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
