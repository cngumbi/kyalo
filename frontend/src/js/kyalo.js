//creating the library
//author: Softcraze Corporation
//this is the main softcraze api

import axios from 'axios';
import { apiURL } from "../config";
import { getUserInfo } from '../localStorage';

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
            throw new Error(response.data.message);
        }
        return response.data;

    } catch (err) {
        console.log(err);
        return { error: err.response.data.message || err.massage };

    }
};
export const register = async({ name, email, password }) => {
    try {
        const response = await axios({
            url: `${apiURL}/api/users/register`,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            data: {
                name,
                email,
                password,
            },
        });
        if (response.statusText !== 'OK') {
            throw new Error(response.data.message);
        }
        return response.data;

    } catch (err) {
        console.log(err);
        return { error: err.response.data.message || err.massage };

    }
};
//update function
export const update = async({ name, email, password }) => {
    try {
        const { _id, token } = getUserInfo();
        const response = await axios({
            url: `${apiURL}/api/users/${_id}`,
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `bearer ${token}`,
            },
            data: {
                name,
                email,
                password,
            },
        });
        if (response.statusText !== 'OK') {
            throw new Error(response.data.message);
        }
        return response.data;

    } catch (err) {
        console.log(err);
        return { error: err.response.data.message || err.massage };

    }
};
//create order function
export const createOrder = async(order) => {
    try {
        const { token } = getUserInfo();
        const response = await axios({
            url: `${apiURL}/api/orders`,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `bearer ${token}`,
            },
            data: order,
        });
        if (response.statusText !== 'Created') {
            throw new Error(response.data.message);
        }
        return response.data;
    } catch (err) {
        return { error: err.response ? err.response.data.message : err.message };

    }
};

//function __(selector) {
//    const self = {
//        element: document.querySelector(selector),
//
//    }
//}
//