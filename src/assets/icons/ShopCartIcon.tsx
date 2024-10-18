interface Props {
  className?: string;
}

export default function ShopCartIcon({ className }: Props) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5463 11C15.2963 11 15.9563 10.59 16.2963 9.97L19.8763 3.48C20.2463 2.82 19.7663 2 19.0063 2H4.20634L3.26634 0H-0.00366211V2H1.99634L5.59634 9.59L4.24634 12.03C3.51634 13.37 4.47634 15 5.99634 15H17.9963V13H5.99634L7.09634 11H14.5463ZM5.15634 4H17.3063L14.5463 9H7.52634L5.15634 4ZM5.99634 16C4.89634 16 4.00634 16.9 4.00634 18C4.00634 19.1 4.89634 20 5.99634 20C7.09634 20 7.99634 19.1 7.99634 18C7.99634 16.9 7.09634 16 5.99634 16ZM15.9963 16C14.8963 16 14.0063 16.9 14.0063 18C14.0063 19.1 14.8963 20 15.9963 20C17.0963 20 17.9963 19.1 17.9963 18C17.9963 16.9 17.0963 16 15.9963 16Z"
        fill="#1C1C1C"
      />
    </svg>
  );
}