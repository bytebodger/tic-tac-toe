import { allow } from '../../shared/classes/allow';
import { database } from '../../shared/functions/connect.to.database';
import { getBaseResponse } from '../../shared/functions/get.base.response';
import { is } from '../../shared/objects/is';
import { postRegisterRequest } from '../../shared/objects/models/post.register.request';
import { getCurrentMember } from '../../shared/queries/get.current.member';
import { getPendingRegistration } from '../../shared/queries/get.pending.registration';
import sgMail from '@sendgrid/mail';

export const postRegistration = async (request = {}, response = {}) => {
   let json = getBaseResponse();
   if (database === null) {
      json.errors.push('Database is unavailable');
      return response.json(json);
   }
   try {
      allow.anObject(request, is.not.empty).anObject(response, is.not.empty).anInstanceOf(request.body, postRegisterRequest).aString(request.body.emailAddress, is.not.empty);
   } catch (error) {
      json.errors.push(error.toString());
      return response.json(json);
   }
   const {emailAddress} = request.body;
   const pendingRegistrationRows = await getPendingRegistration(emailAddress);
   if (pendingRegistrationRows.length) {
      json.errors.push('There is already a registration pending for this email address.');
      return response.json(json);
   }
   const currentMemberRows = await getCurrentMember(emailAddress) || [];
   if (currentMemberRows.length) {
      json.errors.push('There is already a member with this email address.');
      return response.json(json);
   }
   sgMail.setApiKey('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');
   const email = {
      to: emailAddress,
      from: 'do_not_reply@permissionator.com',
      subject: 'Please confirm your email address to complete your Permissionator registration',
      html: `
         this is an email
      `,
   };
   await sgMail.send(email);
   json.data.register = 'reached';
   response.json(json);
};
