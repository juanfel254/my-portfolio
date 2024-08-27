import { cn } from '@/lib/utils';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  target?: '_self' | '_blank' | '_parent' | '_top';
  className?: string;
}

const Link: React.FC<LinkProps> = ({ href = '/', target = '_self', className, children, ...props }) => {
  return (
    <a href={href} target={target} className={cn('w-full', className)} {...props}>
      {children}
    </a>
  );
};

export default Link;
