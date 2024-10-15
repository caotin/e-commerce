interface Prop {
  className?: string;
}

export default function ClearIcon({ className }: Prop) {
  return (
    <svg
      className={className}
      width="13"
      height="13"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.4166 1.87587L12.1241 0.583374L6.99992 5.70754L1.87575 0.583374L0.583252 1.87587L5.70742 7.00004L0.583252 12.1242L1.87575 13.4167L6.99992 8.29254L12.1241 13.4167L13.4166 12.1242L8.29242 7.00004L13.4166 1.87587Z"
        fill="currentColor"
      />
    </svg>
  );
}
