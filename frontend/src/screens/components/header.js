import { getUserInfo } from "../../localStorage";

//this section handles the header of the pages
const Header = {
        render: () => {
                const { name, isAdmin } = getUserInfo();
                return `
                    <header>
                        <div class="brand">
                            ${ name ? `<a href="/#/dashboard" class="logo">kwi<span>t&#361;</span></a>`: `<a href="#" class="logo">kwi<span>t&#361</span></a>`}
                        </div>
                    </header>
                   
                `;
        },
        after_render: () => {},

};
export default Header;