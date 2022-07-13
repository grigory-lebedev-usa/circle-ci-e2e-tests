import Button from '../../../../../../../../../shared/components/Button/Button';
import {
  BUTTON_COLORS,
  BUTTON_SIZES,
  BUTTON_VARIANTS
} from '../../../../../../../../../shared/components/Button/button.constants';
import { useModal } from '../../../../../../../../../shared/hooks/useModal';

import classes from './block-until.module.css';
import BlockUntilModal from './components/BlockUntilModal/BlockUntilModal';

type BlockUntilProps = {
  title: string;
};

function BlockUntil({ title }: BlockUntilProps) {
  const { isModalOpened, openModal, closeModal } = useModal();

  return (
    <>
      <BlockUntilModal isOpened={isModalOpened} closeModal={closeModal} title={title} />
      <Button
        variant={BUTTON_VARIANTS.CONTAINED}
        size={BUTTON_SIZES.MEDIUM_LONG}
        color={BUTTON_COLORS.ERROR}
        className={classes.button}
        onClick={openModal}
      >
        Block until
      </Button>
    </>
  );
}

export default BlockUntil;
