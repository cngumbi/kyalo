//this configuration file is used to
//configure the data "MONGODB"
//also you can use import 'dotenv/config'
import dotenv from 'dotenv';

dotenv.config();
//console.log(process.env.MONGODB_URL)
export default {
    MONGODB_URL: process.env.MONGODB_URL,
    JWT_SECRET: process.env.JWT_SECRET,
    PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID,
};