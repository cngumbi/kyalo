import MainSection from "./screens/homePage/mainSection.js";
import ProductSection from "./screens/productPage/productSection.js";
import { parseRequestUrl } from "./util.js";
import Error404Section from "./screens/productPage/error404Section.js";
//create the route of the web pages
const routes = {
    '/': MainSection,
    '/product/:id': ProductSection,

};
const router = () => {
    const request = parseRequestUrl();
    const parseUrl = (request.resource ? `/${request.resource}` : `/`) +
        (request.id ? '/:id' : '') +
        (request.verb ? `/${request.verb}` : '');
    const section = routes[parseUrl] ? routes[parseUrl] : Error404Section;
    const main = document.getElementById("main-container");
    main.innerHTML = section.render();
};
window.addEventListener('load', router);
window.addEventListener('hashchange', router);