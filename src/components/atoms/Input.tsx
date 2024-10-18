interface InputProps {
  autoComplete?: string;
  type: string;
  placeholder?: string;
  className?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  validate?: string;
}

export default function Input({
  autoComplete,
  type = "text",
  placeholder,
  className = "",
  onChange,
  validate,
}: InputProps) {
  return (
    <div
      className={`${validate} w-full max-w-[314px] flex items-center border focus-within:border-primary rounded-md`}
    >
      <input
        autoComplete={autoComplete}
        type={type}
        placeholder={placeholder}
        className={className + " flex-1 mx-4 my-2 outline-none"}
        onChange={onChange}
      />
    </div>
  );
}
