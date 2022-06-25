//creating the library
//author: Softcraze Corporation

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
            throw new error(response.data.message);
        }
        return response.data;
    } catch (err) {
        console.log(err);
        return { error: err.response.data.message || err.message };

    }
}

//function __(selector) {
//    const self = {
//        element: document.querySelector(selector),
//
//    }
//}