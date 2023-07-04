import { useState } from 'react';

const useModal = () => {
  const [openModal, setOpenModal] = useState(false);
  const [properModalContetnt, setProperModalContent] = useState('');

  const handleClickOpen = () => {
    setOpenModal(true);
  };

  const handleClickClose = () => {
    setOpenModal(false);
  };

  const handleProperModalContent = (cont) => {
    setProperModalContent(cont);
  };

  return {
    openModal,
    properModalContetnt,
    handleClickOpen,
    handleClickClose,
    handleProperModalContent,
  };
};

export default useModal;
