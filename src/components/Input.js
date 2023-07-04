import TextField from '@mui/material/TextField';

const Input = ({ label, disabled, value, defaultValue, handleInputChange }) => {
  const handleChange = (e) => {
    handleInputChange(e);
  };

  return (
    <TextField
      required
      fullWidth
      disabled={disabled}
      label={label}
      value={value}
      defaultValue={defaultValue}
      onChange={handleChange}
      type="text"
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};

export default Input;
