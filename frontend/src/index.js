import MainSection from "./screens/homePage/mainSection.js";
import ProductSection from "./screens/productPage/productSection.js";
import { hideLoading, parseRequestUrl, showLoading } from "./util.js";
import Error404Section from "./screens/productPage/error404Section.js";
import CartSection from "./screens/cart/cartSection.js";
import SigninSection from "./screens/signups/signinSection.js";
import Header from "./screens/components/header.js";
import Footer from "./screens/components/footer.js";
import RegisterSection from "./screens/signups/registerSection.js";
import ProfileSection from "./screens/signups/profileSection.js";
//create the route of the web pages
const routes = {
    '/': MainSection,
    '/product/:id': ProductSection,
    '/cart/:id': CartSection,
    '/cart': CartSection,
    '/signin': SigninSection,
    '/register': RegisterSection,
    '/profile': ProfileSection,

};
const router = async() => {
    showLoading();
    const request = parseRequestUrl();
    const parseUrl = (request.resource ? `/${request.resource}` : `/`) +
        (request.id ? '/:id' : '') +
        (request.verb ? `/${request.verb}` : '');
    const section = routes[parseUrl] ? routes[parseUrl] : Error404Section;
    //this code renders the header section
    const header = document.getElementById('header-container');
    header.innerHTML = await Header.render();
    await Header.after_render();
    //this code renders the main section
    const main = document.getElementById('main-container');
    main.innerHTML = await section.render();
    if (section.after_render) { await section.after_render(); }
    hideLoading();
    //this code renders the footer section
    const footer = document.getElementById('footer-container');
    footer.innerHTML = await Footer.render();
    await Footer.after_render();


};
window.addEventListener('load', router);
window.addEventListener('hashchange', router);