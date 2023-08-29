import * as dotenv from 'dotenv';
dotenv.config();

const mongoURL = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.HOST}:${process.env.PORT}/${process.env.DATABASE}`
export { mongoURL }