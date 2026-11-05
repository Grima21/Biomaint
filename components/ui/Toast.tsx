"use client";

import { useEffect, useState } from "react";
import { Info, X, CheckCircle2 } from "lucide-react";

interface ToastProps {
  message: string;
  title?: string;
  duration?: number;
  variant?: "simple" | "detailed";
  onClose: () => void;
}

export default function Toast({
  message,
  title,
  duration = 6000,
  variant = "simple",
  onClose,
}: ToastProps) {
  const [isVisible, setIsVisible] = useState(true);

  // Controla el tiempo de visualización
  useEffect(() => {
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    const closeTimer = setTimeout(() => {
      onClose();
    }, duration + 500);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(closeTimer);
    };
  }, [duration, onClose]);

  // Cierre manual
  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 500);
  };

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed bottom-6 right-6 z-50 w-full max-w-sm rounded-xl border border-border bg-card shadow-xl transition-all duration-500 ease-out ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-6 opacity-0"
      } p-4`}
    >
      {variant === "simple" ? (
        /* Toast sencillo */
        <div className="flex items-center gap-2">
          <CheckCircle2
            size={20}
            className="shrink-0 fill-foreground text-background"
          />

          <p className="text-sm font-medium text-foreground">{message}</p>
        </div>
      ) : (
        /* Toast detallado */
        <div className="flex items-start gap-3">
          <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Info size={19} />
          </div>

          <div className="min-w-0 flex-1">
            {title && (
              <h3 className="text-sm font-semibold text-foreground">{title}</h3>
            )}

            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {message}
            </p>
          </div>

          <button
            type="button"
            onClick={handleClose}
            aria-label="Cerrar notificación"
            className="rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X size={16} />
          </button>
        </div>
      )}
    </div>
  );
}
