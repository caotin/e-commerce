interface Props {
  className?: string;
}

export default function NavArrowRightIcon({ className }: Props) {
  return (
    <svg
      className={className}
      width="24px"
      height="24px"
      strokeWidth="2"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 6L15 12L9 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}
