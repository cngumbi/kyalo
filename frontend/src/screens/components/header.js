import { getUserInfo } from "../../localStorage";

//this section handles the header of the pages
const Header = {
        render: () => {
                const { name, isAdmin } = getUserInfo();
                return `
                    <div class="brand">
                        <a href="#">kwi<span>t&#361;</span></a>
                    </div>
                    <div class="list-items">
                    ${
                        name
                            ? `<a href="#/profile">${name}</a>
                                <a href="#/cart">chat</a>` 
                            : `<a href="#/signin">login</a>`
                    }
                    ${isAdmin ? `<a href="/#/dashboard">Dashboard</a>` : ''}
                    </div>`;
        },
        after_render: () => {},

};
export default Header;