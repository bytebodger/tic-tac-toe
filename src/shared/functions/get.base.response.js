import moment from 'moment';

export const getBaseResponse = () => ({
   data: {},
   errors: [],
   utc: moment.utc().format(),
});