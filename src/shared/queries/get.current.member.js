import { allow } from '../classes/allow';
import { database } from '../functions/connect.to.database';
import { is } from '../objects/is';

export const getCurrentMember = (emailAddress = '') => {
   allow.aString(emailAddress, is.not.empty);
   return database.query(`
      SELECT
         consumer_id
      FROM
         consumer
      WHERE
         email_address = $1
      AND
         is_deleted = false
      AND
         is_member = true
   `, [emailAddress]);
};
