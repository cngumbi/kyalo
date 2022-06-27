import MainSection from "./screens/homePage/mainSection.js";
import ProductSection from "./screens/productPage/productSection.js";
import { parseRequestUrl } from "./util.js";
import Error404Section from "./screens/productPage/error404Section.js";
import CartSection from "./screens/cart/cartSection.js";
import SigninSection from "./screens/signups/signinSection.js";
//create the route of the web pages
const routes = {
    '/': MainSection,
    '/product/:id': ProductSection,
    '/cart/:id': CartSection,
    '/cart': CartSection,
    '/signin': SigninSection,

};
const router = async() => {
    const request = parseRequestUrl();
    const parseUrl = (request.resource ? `/${request.resource}` : `/`) +
        (request.id ? '/:id' : '') +
        (request.verb ? `/${request.verb}` : '');
    const section = routes[parseUrl] ? routes[parseUrl] : Error404Section;
    const main = document.getElementById("main-container");
    main.innerHTML = await section.render();
    await section.after_render();
};
window.addEventListener('load', router);
window.addEventListener('hashchange', router);