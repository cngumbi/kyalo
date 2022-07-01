//creating the library
//author: Softcraze Corporation
//this is the main softcraze api

import axios from 'axios';
import { apiURL } from "../config";

//date: June sixteenth Two Thuosand Twenty-Two
export const getProduct = async(id) => {
    try {
        const response = await axios({
            url: `${apiURL}/api/products/${id}`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.statusText !== 'OK') {
            throw new Error(response.data.message);
        }
        return response.data;
    } catch (err) {
        console.log(err);
        return { error: err.response.data.message || err.message };

    }
};
export const signin = async({ email, password }) => {
    try {
        const response = await axios({
            url: `${apiURL}/api/users/signin`,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            data: {
                email,
                password,
            },
        });
        if (response.statusText !== 'OK') {
            throw new error(response.data.message);
        }
        return response.data;

    } catch (err) {
        console.log(err);
        return { error: err.response.data.message || err.massage };

    }
}

//function __(selector) {
//    const self = {
//        element: document.querySelector(selector),
//
//    }
//}
//