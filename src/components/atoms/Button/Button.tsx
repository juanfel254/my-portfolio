import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonStyles> {
  variant?: 'primary' | 'ghost';
  size?: 'small' | 'large';
  className?: string;
}

const buttonStyles = cva('px-4 py-1 rounded-3xl w-fit group', {
  variants: {
    variant: {
      primary:
        'bg-neutral-0 text-neutral-950 transition-all duration-500 hover:bg-primary-500 hover:text-neutral-0',
      ghost:
        'bg-transparent opacity-60 hover:opacity-100 transition-all duration-400'
    },
    size: {
      small: 'text-sm',
      large: 'text-base'
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'large'
  }
});

const Button: React.FC<ButtonProps> = ({ variant = 'primary', size = 'large', className, children, ...props }) => {
  return (
    <button className={cn(buttonStyles({ variant, size }), className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
