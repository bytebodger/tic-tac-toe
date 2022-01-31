import pgPromise from 'pg-promise';

export let database = null;

export const connectToDatabase = () => {
   const postgres = pgPromise();
   database = postgres('postgres://bytebodger:4tnJVSUdhsCWaVL@permissionator.cvpprwl1ob8w.us-east-1.rds.amazonaws.com:5432/permissionator');
};
