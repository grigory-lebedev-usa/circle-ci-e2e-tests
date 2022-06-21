import { useState } from 'react';

export function useModal() {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const openModal = (e) => {
    e.stopPropagation();
    setIsModalOpened(true);
  };

  const closeModal = () => {
    setIsModalOpened(false);
  };

  const toggleModal = () => {
    setIsModalOpened((prevState) => !prevState);
  };

  return { isModalOpened, openModal, closeModal, toggleModal };
}
