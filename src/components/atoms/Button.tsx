import Link from "next/link";

interface ButtonProps {
  children?: React.ReactNode;
  to?: string;
  href?: string;
  onClick?:
    | React.MouseEventHandler<HTMLButtonElement>
    | React.TouchEventHandler<HTMLButtonElement>;

  className?: string;
}

export default function Button({
  children,
  className,

  to,
  href,
  onClick,
}: ButtonProps) {
  let Comp: React.ElementType = "button";
  const props = {
    className,
    to,
    href,
    onClick,
  };

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  return <Comp {...props}>{children}</Comp>;
}
