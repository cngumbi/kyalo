//setting the user on the main page
import { signin } from '../../js/kyalo';
import { getUserInfo, setUserInfo } from '../../localStorage';
import { hideLoading, redirectUser, showLoading, showMessage } from '../../util';
//import data from "../data.js";
//import axios from 'axios';
//import { getProducts } from '../../js/kyalo';
//import { hideLoading, showLoading } from '../../util';
//import Rating from '../components/rating'
//import SigninSection from "../signups/signinSection";
const MainSection = {
    after_render: () => {
        document
            .getElementById('signin-form')
            .addEventListener('submit', async(e) => {
                e.preventDefault();
                showLoading();
                const data = await signin({
                    email: document.getElementById('email').value,
                    password: document.getElementById('password').value
                });
                hideLoading();
                if (data.error) {
                    showMessage(data.error);
                } else {
                    setUserInfo(data);
                    redirectUser();
                }
            });
    },
    render: async() => {
        if (getUserInfo().name) {
            redirectUser();
        }
        return `
        <div class="form-container">
            <form id="signin-form">
                <ul class="form-items">
                    <li>
                        <h1>Sign In</h1>
                    </li>
                    <li>
                        <label for="email">Email</label>
                        <input type="email" name="email" id="email"/>
                    </li>
                    <li>
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password"/>
                    </li>
                    <li>
                        <button type="submit" class="primary">Sign In</button>
                    </li>
                    <li>
                        <div>
                            New User?
                            <a href="/#/register">Create an accoount with us</a>
                        </div>
                    </li>
                </ul>
            </form>
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