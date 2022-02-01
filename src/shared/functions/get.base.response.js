import moment from 'moment';

export const getBaseResponse = () => ({
   errors: [],
   game: {},
   utc: moment.utc().format(),
});
