import Alert from '@mui/material/Alert';

type ErrorAlertProps = {
  error: string;
};

const ErrorAlert: React.FC<ErrorAlertProps> = ({ error }) => {
  return (
    <Alert sx={{ whiteSpace: 'pre-wrap' }} severity="error">
      {error}
    </Alert>
  );
};

export default ErrorAlert;
