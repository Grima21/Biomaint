"use client";
import {
  Activity,
  Building2,
  Search,
  ChevronDown,
  User,
  LogOut,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleOutsideClick = (event: PointerEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", handleOutsideClick);
    return () =>
      document.removeEventListener("pointerdown", handleOutsideClick);
  }, [isOpen]);

  return (
    <header className="min-h-[79] max-h-19.75 flex items-center gap-3 border-b border-border px-4 py-3 md:gap-6 md:px-6 lg:gap-24 lg:px-8">
      <div className="relative flex flex-1 items-center gap-3 md:gap-4">
        <div className="hidden shrink-0 items-center gap-2 rounded-md border border-border bg-secondary px-3 py-2 md:flex">
          <Building2 className="h-4 w-4 text-foreground" />
          <span className="truncate text-sm font-medium text-foreground">
            Hospital Santo Tomas
          </span>
        </div>

        <div className="relative flex-1 max-w-xl">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            className="h-10 w-full rounded-md border border-input bg-background pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            placeholder="Buscar equipos, OT, serie..."
            type="search"
          />
        </div>

        <div ref={menuRef} className="relative inline-flex shrink-0">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center gap-3 rounded-md px-2 py-1.5 transition-colors hover:bg-accent cursor-pointer"
            type="button"
          >
            <span className="relative flex h-9 w-9 shrink-0 overflow-hidden rounded-full">
              <span className="flex h-full w-full items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                DT
              </span>
            </span>
            <div className="hidden text-left lg:block">
              <p className="text-sm font-medium leading-tight text-foreground">
                Ing. Daniel Torres
              </p>
              <span className="mt-1 inline-flex items-center rounded-full border border-border bg-secondary px-2 py-0.5 text-[10px] font-semibold text-foreground">
                Ing. Biómedico
              </span>
            </div>{" "}
            <ChevronDown className="ml-1 h-4 w-4 text-muted-foreground" />
          </button>
          {isOpen && (
            <div className="absolute right-0 top-full z-50 mt-2 flex w-56 min-w-32 flex-col gap-4 overflow-hidden rounded-md border border-border bg-card p-density-sm text-[#0d0d0d] shadow-retool-md outline-none pointer-events-auto">
              <div className="p-density-sm py-density-xs text-sm font-semibold border-b border-muted">
                <p>Ing.Daniel Torres</p>
                <p className="font-medium text-xs text-muted-foreground">
                  Ing.Biomédico
                </p>
              </div>
              <div className="flex- flex-col gap-2">
                <div className="relative flex cursor-default select-none items-center gap-density-sm rounded-sm px-density-sm py-density-xs text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disbale]:pointer-events-none hover:bg-accent">
                  <User className="h-5 w-5 " />
                  <span>Mi perfil</span>
                </div>
                <div className="relative flex cursor-default select-none items-center gap-density-sm rounded-sm px-density-sm py-density-xs text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disbale]:pointer-events-none hover:bg-accent ">
                  <LogOut className="h-5 w-5" />
                  <span>Cerrar sesión</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
