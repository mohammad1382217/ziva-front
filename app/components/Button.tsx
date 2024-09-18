import { Button } from "@nextui-org/button";

interface CustomButtonProps {
  className: string;
  buttonText: string;
  type: "button" | "submit" | "reset" | undefined;
  leftIcon?: React.ReactNode; 
  rightIcon?: React.ReactNode;
  textOnly?: boolean;
}

const ButtonZiva: React.FC<CustomButtonProps> = ({ className, buttonText, type, leftIcon, rightIcon,textOnly = false}) => {
  return (
    <Button
      type={type}
      size="lg"
      color="primary"
      aria-label={buttonText}
      className={`flex h-[48px] px-6 justify-center items-center gap-2.5 self-stretch bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl w-full ${
        textOnly ? "py-2" : "py-2 px-4"
      } ${className}`}
    >
      {leftIcon && !textOnly && <span className="mr-2">{leftIcon}</span>}
      {!textOnly && buttonText}
      {rightIcon && !textOnly && <span className="ml-2">{rightIcon}</span>}
    </Button>
  );
};

export default ButtonZiva;