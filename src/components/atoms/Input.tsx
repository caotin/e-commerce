interface InputProps {
  autoComplete?: string;
  type: string;
  placeholder?: string;
  value?: string | number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  validate?: string;
  StartIcon?: React.ReactNode;
}

export default function Input({
  autoComplete,
  type = "text",
  placeholder,
  value,
  onChange,
  validate,
  StartIcon,
}: InputProps) {
  return (
    <div
      className={`${validate} w-full flex items-center border focus-within:border-primary rounded-md`}
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
