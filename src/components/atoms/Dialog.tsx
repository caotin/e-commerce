interface DialogProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function Dialog({
  children,
  className,
  isOpen,
  onClose,
}: DialogProps) {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center translate-col z-50  ${
        isOpen ? "visible bg-black/30" : "invisible"
      }`}
      onClick={onClose}
    >
      <div
        className={`size-96 bg-white rounded-md ` + className}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
