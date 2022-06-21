import { useEffect } from 'react';

import { useOffers } from '../../../api/hooks/useOffers/useOffers';
import { useOrders } from '../../../api/hooks/useOrders/useOrders';
import { REQUEST_STATUS } from '../../../constants/app.constants';
import ProgressSpinner from '../../../shared/components/ProgressSpinner/ProgressSpinner';
import Refresh from '../../../shared/components/Refresh/Refresh';
// import { useModal } from '../../../shared/hooks/useModal';

// import CancelOfferConfirmationModal from './components/CancelOfferConfirmationModal/CancelOfferConfirmationModal';
// import CreateOfferModal from './components/CreateOfferModal/CreateOfferModal';

import Order from './components/Order/Order';
import classes from './driver-orders.module.css';

function DriverOrders() {
  // const { isModalOpened, openModal, closeModal } = useModal();
  // const {
  //   isModalOpened: isConfirmationModalOpened,
  //   openModal: openConfirmationModal,
  //   closeModal: closeConfirmationModal
  // } = useModal();
  const { getOffers, offers, status: offerRequestStatus } = useOffers();
  const { getOrders, orders, status: orderRequestStatus } = useOrders();
  useEffect(() => {
    getOffers();
    getOrders();
  }, [getOffers, getOrders]);

  const handleRefresh = () => {
    getOffers();
    getOrders();
  };

  if (
    orderRequestStatus === REQUEST_STATUS.LOADING &&
    offerRequestStatus === REQUEST_STATUS.LOADING
  ) {
    return <ProgressSpinner isShow />;
  }

  return (
    <div className={classes.container}>
      {/* 
        TODO: for next task      
      <CancelOfferConfirmationModal
        isOpened={isConfirmationModalOpened}
        onCancel={closeConfirmationModal}
        order={order}
        offerId={id}
        getOffers={getOffers}
      />
      <CreateOfferModal
        isOpened={isModalOpened}
        closeModal={closeModal}
        order={order}
        getOffers={getOffers}
      /> */}
      <div className={classes.block__title}>
        <h2 className={classes.title}>Orders</h2>
      </div>
      <div className={classes.line} />
      <div className={classes.driver__orders}>
        {orders.map((order) => (
          <Order
            key={order.id}
            order={order}
            getOffers={getOffers}
            offer={offers.find(({ orderId }) => orderId === order.id)}
          />
        ))}
      </div>
      <Refresh className={classes.refresh} onClick={handleRefresh} />
    </div>
  );
}

export default DriverOrders;
