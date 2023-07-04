import useModal from '../hooks/useModal';

import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import Modal from './Modal';

const AddCarMobileBtn = () => {
  const {
    openModal,
    handleClickOpen,
    handleClickClose,
    handleProperModalContent,
    properModalContetnt,
  } = useModal();

  const handleOpenAddModal = (cont) => {
    handleProperModalContent(cont);
    handleClickOpen();
  };
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab
        color="primary"
        aria-label="add"
        sx={{ position: 'absolute', top: 140, right: 30 }}
        onClick={() => handleOpenAddModal('add')}
      >
        <AddIcon />
      </Fab>
      <Modal
        open={openModal}
        onClose={handleClickClose}
        content={properModalContetnt}
      />
    </Box>
  );
};

export default AddCarMobileBtn;
