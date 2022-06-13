import { REQUEST_STATUS } from '../../../constants/app.constants';

export const INITIAL_STATE = {
  activeTrip: {
    driver: {
      firstName: '',
      lastName: '',
      car: {
        photo: ''
      }
    }
  },
  inactiveTrips: {},
  status: REQUEST_STATUS.IDLE
};
