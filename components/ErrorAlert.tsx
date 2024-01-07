import Alert from '@mui/material/Alert';

const ErrorAlert = ({ error }: { error: string }) => {
  return (
    <Alert sx={{ whiteSpace: 'pre-wrap' }} severity="error">
      {error}
    </Alert>
  );
};

export default ErrorAlert;
