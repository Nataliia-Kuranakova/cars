import { Button } from '@mui/material';

const CustomButton = ({
  children,
  btnColor,
  btnVariant,
  btnSize,
  row,
  ...rest
}) => {
  const customStyles = {
    backgroundColor: btnColor || '#ff9a34',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: btnColor || '#ff8101',
    },
  };

  return (
    <Button
      variant={btnVariant || 'contained'}
      size={btnSize || 'small'}
      sx={customStyles}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
