interface Prop {
  className?: string;
}

export default function TickIcon({ className }: Prop) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M8.795 15.875L4.625 11.705L3.205 13.115L8.795 18.705L20.795 6.70504L19.385 5.29504L8.795 15.875Z"
        fill="currentColor"
      />
    </svg>
  );
}
