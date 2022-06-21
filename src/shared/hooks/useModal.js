import { useCallback, useState } from 'react';

export function useModal() {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const openModal = useCallback(() => {
    setIsModalOpened(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpened(false);
  }, []);

  const toggleModal = useCallback(() => {
    setIsModalOpened((prevState) => !prevState);
  }, []);

  return { isModalOpened, openModal, closeModal, toggleModal };
}
