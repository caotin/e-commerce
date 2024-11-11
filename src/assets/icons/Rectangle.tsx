interface Prop {
  className?: string;
}

export default function Rectangle({ className }: Prop) {
  return (
    <svg
      className={className}
      width="745"
      height="120"
      viewBox="0 0 745 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 6C0 2.68629 2.68629 0 6 0H700.47L745 120H6.00002C2.68631 120 0 117.314 0 114V6Z"
        fill="#237CFF"
      />
    </svg>
  );
}
