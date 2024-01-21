import "dotenv/config";

const serverPort = process.env.SERVER_PORT;
const mongoDbUri = process.env.MONGODB_ATLAS_URI;
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const clientUrl = "";

export { serverPort, mongoDbUri, stripeSecretKey, clientUrl };
