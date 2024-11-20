interface InputProps {
  className?: string;
  autoComplete?: string;
  type?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  StartIcon?: React.ReactNode;
}

export default function Input({
  className,

  autoComplete,
  type = "text",
  placeholder,

  value,
  onChange,

  StartIcon,
}: InputProps) {
  return (
    <div
      className={`flex items-center border focus-within:border-primary rounded-md ${className}`}
    >
      {StartIcon}
      <input
        autoComplete={autoComplete}
        type={type}
        placeholder={placeholder}
        className="w-full ml-[6px] my-2 bg-transparent outline-none"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
