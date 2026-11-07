// src/app/(auth)/login/page.tsx
import Link from "next/link";
import { ArrowRight, Mail, Lock } from "lucide-react";
export default function LoginPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Iniciar Sesión
        </h2>
        <p className="text-sm text-muted-foreground  mt-1">
          Ingresa tus credenciales para acceder al sistema.
        </p>
      </div>

      {/* Aquí irá tu formulario */}
      <form className="space-y-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-700">
            Correo electrónico
          </label>
          <div className="relative">
            <Mail
              aria-hidden="true"
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="email"
              id="email"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 pl-9 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              placeholder="tu@correo.com"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-700">
            Contraseña
          </label>
          <div className="relative">
            <Lock
              aria-hidden="true"
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="password"
              id="password"
              className="mt-1 w-full rounded-lg border border-slate-300 bg-background px-3 py-2 pl-9 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="••••••••"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="flex items-center gap-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            <input
              type="checkbox"
              id="remember-me"
              className="h-6 w-4 shrink-0 rounded-md border border-input bg-background disabled:cursor-not-allowed disabled:opacity-50"
            />
            Recordarme en este equipo
          </label>
        </div>
        <Link
          href="/dashboard"
          className="w-full flex gap-3 items-center justify-center py-2 px-4 bg-primary hover:bg-blue-700 text-white font-medium rounded-lg transition-colors cursor-pointer"
        >
          Iniciar Sesión
          <ArrowRight className="h-5 w-5" />
        </Link>
      </form>
    </div>
  );
}
