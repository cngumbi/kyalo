import MainSection from "./screens/homePage/mainSection.js";
const router = () => {
    const main = document.getElementById("main-container");
    main.innerHTML = MainSection.render();
};
window.addEventListener('load', router);