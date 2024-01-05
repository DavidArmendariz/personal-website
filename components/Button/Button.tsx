import BaseButton, { ButtonTypeMap } from '@mui/material/Button';

const Button: React.FC<{
  variant?: ButtonTypeMap['props']['variant'];
  href?: string;
}> = ({ children, href, variant = 'text' }) => {
  return (
    <BaseButton href={href} variant={variant}>
      {children}
    </BaseButton>
  );
};

export default Button;
