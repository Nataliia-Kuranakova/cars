import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import DeleteModalContent from './DeleteModalContent';
import ModalInputs from './ModalInputs';
import CustomeButton from './CustomButton';
import { addCar, editCar, removeCar } from '../store';
import useLocalStorage from '../hooks/useLocalStorage';

const Modal = ({ open, onClose, content, row, disabledInput }) => {
  const [inputValue, setInputValue] = useState({});
  const { addToLocalStorage, editLocalStorage, removeFromLocalStorage } =
    useLocalStorage();

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const dispatch = useDispatch();

  const handleSave = () => {
    const car = { ...inputValue, id: nanoid() };
    dispatch(addCar(car));
    addToLocalStorage(car);
    onClose();
    setInputValue({});
  };

  const handleEdit = () => {
    const car = { ...inputValue, id: row.id };
    dispatch(editCar(car));
    editLocalStorage(car);
    onClose();
    setInputValue({});
  };

  const handleDelete = () => {
    dispatch(removeCar(row.id));
    removeFromLocalStorage(row.id);
    onClose();
  };

  const handleBtnClick = () => {
    switch (content) {
      case 'add':
        handleSave();
        break;
      case 'edit':
        handleEdit();
        break;
      case 'delete':
        handleDelete();
        break;
      default:
        onClose();
    }
  };

  let modalContent;
  if (content === 'delete') {
    modalContent = <DeleteModalContent row={row} />;
  } else if (content === 'edit' || 'add') {
    modalContent = (
      <ModalInputs
        onSubmit={handleSave}
        row={row}
        disabledInput={disabledInput}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
    );
  }

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={onClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent>
          <DialogContentText component="div">{modalContent}</DialogContentText>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'space-between' }}>
          <CustomeButton autoFocus onClick={onClose}>
            Cancel
          </CustomeButton>
          <CustomeButton onClick={handleBtnClick} autoFocus>
            {content === 'delete' ? 'Ok' : 'Save'}
          </CustomeButton>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Modal;
