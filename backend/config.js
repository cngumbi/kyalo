//this configuration file is used to
//configure the data "MONGODB"
import dotenv from 'dotenv';

dotenv.config();

export default {
    MONGODB_URL: process.env.MONGODB_URL,
};