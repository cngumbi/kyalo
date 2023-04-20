import { getUserInfo } from "../../localStorage";

//this section handles the header of the pages
const Header = {
        after_render: () => {
            //document.getElementById("signout").addEventListener("click", () => {
            //    clearUser();
            //    document.location.hash = '/';
            //})
            
            //function toggleMenu(){
            //    const profileMenu = document.querySelector(".profile-menu-wrap");
            //    profileMenu.classList.toggle("open-menu");
            //}
            window.addEventListener("scroll", function(){
                var header = document.querySelector("header");
                header.classList.toggle("sticky", window.scrollY > 0);
            });
            window.addEventListener("click", ()=>{
                let profileMenu = document.getElementById("profileMenu");
                profileMenu.classList.toggle("open-menu");
            });
            //let profileDropdown = document.getElementById("profileMenu");
            //let btn = document.querySelector(".nav-profile-img");
            //const toggleMenu = ()=> profileDropdown.classList.toggle("open-menu");
            //window.addEventListener('click', function(e){
            //    if(!btn.contains(e.target)){
            //        profileDropdown.classList.remove('open-menu');
            //    }
            //})
        },
        render: () => {
                const { name, isAdmin } = getUserInfo();
                return `
                    <header>
                        <nav class="navbar">
                            <div class="navbar-left">
                                <div class="brand">
                                    ${ name ? `
                                        <a href="/#/kwitumain" class="logo">kwit&#361;</a>
                                        
                                        `: `<a href="#" class="logo">kwit&#361</a>`}
                                </div>
                                ${name ? `
                                    <div class="search-box">
                                        <img src="" alt="">
                                        <input type="text" placeholder="Search" id="search">
                                    </div>
                                `:``}
                            </div>
                            ${name ? `
                            <div class="navbar-center">
                                <ul>
                                    <li><span><a href="/#/profile">${name}</a></span></li>
                                </ul>
                            </div>
                            <div class="navbar-right">
                                <div class="online">
                                    <img src="../../images/yy.jpg" alt="" class="nav-profile-img">
                                </div>
                                <!--profile dropdown menu-->
                                <div class="profile-menu-wrap" id="profileMenu">
                                    <div class="profile-menu">
                                        <div class="user-info">
                                            <img src="../../images/yy.jpg" alt="">
                                            <div>
                                                <h3>${name}</h3>
                                                <a href="/#/profile">see your profile</a>
                                            </div>
                                        </div>
                                        <hr>
                                        <a href="#" class="profile-menu-link">
                                            <img src="" alt="">
                                            <p>Give Feedback</p>
                                            <span>></span>
                                        </a>
                                        <a href="#" class="profile-menu-link">
                                            <img src="soccer.png" alt="">
                                            <p>Settings</p>
                                            <span>></span>
                                        </a>
                                        <!--<a href="" class="profile-menu-link" id="signout">
                                            <img src="soccer.png" alt="">
                                            <p>logout</p>
                                            <span>></span>
                                        </a>-->
                                    </div>
                                </div>
                            </div>
                            `:''}
                        </nav>                       
                    </header>
                   
                `;
        }
};
export default Header;