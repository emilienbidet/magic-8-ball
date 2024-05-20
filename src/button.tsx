import { cn } from "./utils/cn";

interface IButtonProps {
  text: string;
  className?: string;
  label?: string;
  onClick?: () => void;
}

export function Button({ text, className, label, onClick }: IButtonProps) {
  return (
    <button
      className={cn(
        className,
        "py-2 px-4 rounded-full outline outline-1 outline-black"
      )}
      aria-label={label}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
