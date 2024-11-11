interface Prop {
  className?: string;
}

export default function MessageIcon({ className }: Prop) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M3.33332 3.33329H16.6667V13.3333H4.30832L3.33332 14.3083V3.33329ZM3.33332 1.66663C2.41666 1.66663 1.67499 2.41663 1.67499 3.33329L1.66666 18.3333L4.99999 15H16.6667C17.5833 15 18.3333 14.25 18.3333 13.3333V3.33329C18.3333 2.41663 17.5833 1.66663 16.6667 1.66663H3.33332ZM4.99999 9.99996H15V11.6666H4.99999V9.99996ZM4.99999 7.49996H15V9.16663H4.99999V7.49996ZM4.99999 4.99996H15V6.66663H4.99999V4.99996Z"
        fill="currentColor"
      />
    </svg>
  );
}
