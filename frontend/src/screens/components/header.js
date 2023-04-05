import { getUserInfo } from "../../localStorage";

//this section handles the header of the pages
const Header = {
        render: () => {
                const { name, isAdmin } = getUserInfo();
                return `
                    <header>
                        <div class="brand">
                            ${ name ? `<a href="/#/dashboard">kwi<span>t&#361;</span></a>`: `<a href="#">kwi<span>t&#361</span></a>`}
                        </div>
                        <div class="header-list">
                        ${
                            name
                                ? `
                                    <ul>
                                        <li><a href="#/cart">chat</a></li>
                                        <li><a href="#/signin">login</a></li>
                                    </ul>
                                    <div class="user-wrapper">
                                        <img src="../../images/1.png" width="30px" height="30px" alt="">
                                        <div>
                                            <h4> <a href="#/profile">${name}</a></h4>
                                            <small>  ${isAdmin ? `<a href="/#/dashboard">super admin</a>` : `<a href="#">Your Account</a>`}</small>
                                        </div>
                                    </div>
                                    ` 
                                : ``
                        }
                    
                        </div>
                    </header>
                `;
        },
        after_render: () => {},

};
export default Header;