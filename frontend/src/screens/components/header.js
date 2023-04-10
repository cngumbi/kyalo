import { getUserInfo } from "../../localStorage";

//this section handles the header of the pages
const Header = {
        render: () => {
                const { name, isAdmin } = getUserInfo();
                return `
                    <header>
                        <div class="brand">
                            ${ name ? `<a href="/#/dashboard" class="logo">kwit&#361;</a>`: `<a href="#" class="logo">kwit&#361</a>`}
                        </div>
                        <ul>
                            <li><a href="#/profile">${name}</a></li>
                        </ul>                        
                    </header>
                   
                `;
        },
        after_render: () => {
            window.addEventListener("scroll", function(){
                var header = document.querySelector("header");
                header.classList.toggle("sticky", window.scrollY > 0);
            });
        },

};
export default Header;