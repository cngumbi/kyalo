//this the configuration file of the whole project
//it includes:
//      1: data base configuration
//      2: payment configuration

import dotenv from 'dotenv'; //also you can use import 'dotenv/config'

dotenv.config();
export default {
    MONGODB_URL: process.env.MONGODB_URL,
    JWT_SECRET: process.env.JWT_SECRET,
    PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID,
};