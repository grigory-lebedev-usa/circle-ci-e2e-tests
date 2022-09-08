export const getOfferId = (offers, orderId) => {
  return offers.find(({ orderId: offersOrderId }) => offersOrderId === orderId)?.id || null;
};

export const calculatePagesCount = (total, rowsPerPage) => {
  if (Number.isNaN(Math.round(total / rowsPerPage))) {
    return 0;
  }
  if (Math.round(total / rowsPerPage) < 1) {
    return 1;
  }
  return Math.ceil(total / rowsPerPage);
};
