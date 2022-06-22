export const getOfferId = (offers, orderId) => {
  return offers.find(({ orderId: offersOrderId }) => offersOrderId === orderId)?.id || null;
};
