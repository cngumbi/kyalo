import MainSection from './screens/homePage/mainSection.js';
import { hideLoading, parseRequestUrl, showLoading } from './util.js';
import Error404Section from './screens/errors/error404Section.js';
import SigninSection from './screens/signups/signinSection.js';
import Header from './screens/components/header.js';
import Footer from './screens/components/footer.js';
import RegisterSection from './screens/signups/registerSection.js';
import ProfileSection from './screens/signups/profileSection.js';
import HomeSection from './screens/main/homeSection.js';
//import the style
import "../style/css/kwito.css";
//create the route of the web pages
const routes = {
  '/': MainSection,
  '/signin': SigninSection,
  '/register': RegisterSection,
  '/profile': ProfileSection,
  '/kwitumain': HomeSection,
};
const router = async () => {
  showLoading();
  const request = parseRequestUrl();
  const parseUrl =
    (request.resource ? `/${request.resource}` : `/`) +
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
  if (section.after_render) {
    await section.after_render();
  }
  //this code renders the footer section
  const footer = document.getElementById('footer-container');
  footer.innerHTML = await Footer.render();
  await Footer.after_render();
  hideLoading();
};
window.addEventListener('load', router);
window.addEventListener('hashchange', router);
