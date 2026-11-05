import type { ReactNode } from "react";
import { X } from "lucide-react";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        className="relative w-full max-w-lg p-density-lg shadow-2xl "
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Cerrar modal"
          className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-md text-muted-foreground cursor-pointer hover:text-card-foreground transition-colors"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
        </button>
        {children}
      </div>
    </div>
  );
}
