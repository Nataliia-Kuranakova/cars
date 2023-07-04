import { Typography } from '@mui/material';

const DeleteModalContent = ({ row }) => {
  return (
    <Typography sx={{ width: '100%' }} variant="h6" align="center" mt={3}>
      Do you want to delete record for {row.car}?
    </Typography>
  );
};

export default DeleteModalContent;
