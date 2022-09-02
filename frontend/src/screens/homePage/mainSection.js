//setting the user on the main page
//import { signin } from '../../js/kyalo';
//import { getUserInfo, setUserInfo } from '../../localStorage';
//import { hideLoading, redirectUser, showLoading, showMessage } from '../../util';
//import data from "../data.js";
//import axios from 'axios';
//import { getProducts } from '../../js/kyalo';
//import { hideLoading, showLoading } from '../../util';
//import Rating from '../components/rating'
//import SigninSection from "../signups/signinSection";
const MainSection = {
    after_render: () => {

    },
    render: async() => {
        return `
        
            <div class="grid-test">
                <div class="row">
                    <div class="col-1-of-2">
                    test col 1
                    </div>
                    <div class="col-1-of-2">
                    test col 1
                    </div>
                </div>
                <div class="row">
                    <div class="col-1-of-3">
                    test col 3
                    </div>
                    <div class="col-1-of-3">
                    test col 3
                    </div>
                    <div class="col-1-of-3">
                    test col 3
                    </div>
                </div>
                <div class="row">
                    <div class="col-1-of-3">
                    test col 3
                    </div>
                    <div class="col-2-of-3">
                    test col 2 of3
                    </div>
                </div>
                <div class="row">
                    <div class="col-1-of-4">
                    test col 4
                    </div>
                    <div class="col-1-of-4">
                    test col 4
                    </div>
                    <div class="col-1-of-4">
                    test col 4
                    </div>
                    <div class="col-1-of-4">
                    test col 4
                    </div>
                </div>
                <div class="row">
                    <div class="col-1-of-4">
                    test col 4
                    </div>
                    <div class="col-1-of-4">
                    test col 4
                    </div>
                    <div class="col-2-of-4">
                    test col 2 of 4
                    </div>
                </div>
                <div class="row">
                    <div class="col-1-of-4">
                    test col 4
                    </div>
                    <div class="col-3-of-4">
                    test col 3 of 4
                    </div>
                    
                </div>
            </div>
        
            
        `;
        //const { products } = data;
        //showLoading();
        //const response = await axios({
        //    url: 'http://localhost:5000/api/products',
        //    headers: {
        //        'Content-Type': 'application/json',
        //    },
        //});
        //hideLoading();
        //if (!response || response.statusText !== 'OK') {
        //    return `<div>Error in getting data</div>`;
        //}
        //const products = response.data;
        //const products = await getProducts();
        //if (products.error) {
        //    return `<div class="denger">${products.error}</div>`;
        //}
        //return `
        //<ul class="card">
        //    ${products.map( product =>`
        //    <li>
        //        <div class="card-item">
        //            <a href="#/product/${product._id}">
        //                <img src="${product.image}" alt="${product.name}">
        //            </a>
        //            <div class="item-name">
        //                <a href="#/product/1">${product.name}</a>
        //            </div>
        //            <!--items rating-->
        //            <div class="item-rating">
        //                ${Rating.render({
        //                    value: product.rating,
        //                    text: `${product.numReviews} reviews`,
        //                })}
        //            </div>
        //            <div class="item-brand">
        //                ${product.brand}
        //            </div>
        //            <div class="item-price">
        //            ${product.price}
        //            </div>
        //        </div>
        //    </li>
        //    `).join('\n')}
        //`;
    },
};
export default MainSection;