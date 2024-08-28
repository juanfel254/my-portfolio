import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils'

const typographyVariants = cva('', {
  variants: {
    variant: {
      h1: 'text-6xl lg:text-7xl font-bold tracking-tight',
      h2: 'text-3xl lg:text-5xl font-bold',
      h3: 'text-2xl lg:text-4xl font-semibold',
      p: 'text-lg lg:text-xl font-medium text-neutral-500',
    },
    size: {
      small: 'text-sm',
      medium: 'text-base',
      large: 'text-lg',
    },
    gradient: {
      true: 'bg-gradient-to-r from-primary-700 via-orange-500 to-pink-600 text-transparent bg-clip-text ',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'p',
    size: 'medium',
    gradient: false,
  },
});

interface TypographyProps extends VariantProps<typeof typographyVariants> {
  as?: 'h1' | 'h2' | 'h3' | 'p';
  className?: string;
  children: React.ReactNode;
  gradient?: boolean;
}

const Typography: React.FC<TypographyProps> = ({
  as: Component = 'p',
  variant,
  size,
  gradient,
  className,
  children,
}) => {
  return (
    <Component className={cn(typographyVariants({ variant, size, gradient }), className)}>
      {children}
    </Component>
  );
};

export default Typography;
