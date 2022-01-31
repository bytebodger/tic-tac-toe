import moment from 'moment';
import { allow } from '../classes/allow';
import { database } from '../functions/connect.to.database';
import { is } from '../objects/is';
import { deleteExpiredRegistrations } from './delete.expired.registrations';

export const getPendingRegistration = async (emailAddress = '') => {
   allow.aString(emailAddress, is.not.empty);
   await deleteExpiredRegistrations();
   return database.query(`
      SELECT
         registration_id
      FROM
         registration
      WHERE
         email_address = $1
      AND
         is_deleted = false
      AND
         expires_on > '${moment.utc().format()}'
   `, [emailAddress]);
};
