import BaseButton, { ButtonTypeMap } from '@mui/material/Button';

const Button: React.FC<{ variant?: ButtonTypeMap['props']['variant'] }> = ({
  children,
  variant = 'text',
}) => {
  return <BaseButton variant={variant}>{children}</BaseButton>;
};

export default Button;
