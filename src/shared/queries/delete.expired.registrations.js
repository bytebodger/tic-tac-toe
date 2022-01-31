import moment from 'moment';
import { database } from '../functions/connect.to.database';

export const deleteExpiredRegistrations = () => {
   return database.query(`
      UPDATE
         registration
      SET
         is_deleted = true
      WHERE
         expires_on < '${moment.utc().format()}'
   `);
};
