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
                            ? `
                                <!--<a href="#/cart">chat</a>
                                <a href="#/signin">login</a>-->
                                <div class="user-wrapper">
                                    <img src="../../images/1.png" width="30px" height="30px" alt="">
                                    <div>
                                        <h4> <a href="#/profile">${name}</a></h4>
                                        <small>  ${isAdmin ? `<a href="#">super admin</a>` : ''}</small>
                                    </div>
                                </div>
                                ` 
                            : ``
                    }
                   
                    </div>`;
        },
        after_render: () => {},

};
export default Header;