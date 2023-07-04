import Switch from '@mui/material/Switch';
import { Stack, Typography } from '@mui/material';

const Toggle = ({ value, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.checked);
  };

  return (
    <Stack direction="row" spacing={1} alignItems="center" mt={2}>
      <Typography>Unavailable </Typography>
      <Switch
        checked={value}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
      />
      <Typography>Available</Typography>
    </Stack>
  );
};

export default Toggle;
