import { State } from './types';
import { getTomorrowDate, formatDateToYearMonthDay } from '~/helpers';

export const state = (): State => ({
  search: {
    latitude: 0,
    longitude: 0,
    radius: 10,
    adults: 2,
    checkInDate: formatDateToYearMonthDay(new Date()),
    checkOutDate: formatDateToYearMonthDay(getTomorrowDate()),
  },
});
