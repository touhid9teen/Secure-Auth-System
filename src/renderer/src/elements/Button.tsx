import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  icon?: {
    iconFile: ReactNode;
    iconCustomClass?: string;
  };
  customClass?: string;
  buttonType?: 'submit' | 'reset' | 'button';
  buttonVariant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({
  children,
  icon,
  customClass = '',
  buttonVariant = 'primary',
  buttonType = 'button',
  ...attributes
}: ButtonProps) => {
  const buttonColor = `${
    buttonVariant === 'primary' ? 'bg-primary text-white disabled:bg-primary/65' : 'bg-white border border-[#DFDFDF]'
  }`;

  return (
    <button type={buttonType} className={`flex items-center rounded-xl ${buttonColor} ${customClass}`} {...attributes}>
      {icon && <span className={`${icon.iconCustomClass} mx-1`}>{icon.iconFile}</span>}
      {children}
    </button>
  );
};

export default Button;
