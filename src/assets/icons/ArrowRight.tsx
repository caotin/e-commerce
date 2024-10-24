interface Prop {
  className?: string;
}

export default function ArrowRight({ className }: Prop) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.0001 3.66669L9.70758 4.95919L14.8226 10.0834H3.66675V11.9167H14.8226L9.70758 17.0409L11.0001 18.3334L18.3334 11L11.0001 3.66669Z"
        fill="currentColor"
      />
    </svg>
  );
}
