import useModal from '../hooks/useModal';
import { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import Modal from './Modal';
import CustomeButton from './CustomButton';

const DropDownMenu = ({ row }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const {
    openModal,
    properModalContetnt,
    handleClickOpen,
    handleClickClose,
    handleProperModalContent,
  } = useModal();

  const handleOpenDropDown = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseDropdown = () => {
    setAnchorEl(null);
  };

  const handleOpenModal = (arg) => {
    handleClickOpen();
    handleProperModalContent(arg);
    handleCloseDropdown();
  };

  return (
    <>
      <CustomeButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleOpenDropDown}
      >
        Options
      </CustomeButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseDropdown}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => handleOpenModal('edit')}>Edit</MenuItem>
        <MenuItem onClick={() => handleOpenModal('delete')}>Delete</MenuItem>
      </Menu>
      <Modal
        onClose={handleClickClose}
        open={openModal}
        content={properModalContetnt}
        row={row}
        disabledInput
      />
    </>
  );
};

export default DropDownMenu;
