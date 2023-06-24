import { getUserInfo } from '../../localStorage';

//this section handles the header of the pages
const Header = {
  after_render: () => {
    window.addEventListener('scroll', function () {
      var header = document.querySelector('header');
      header.classList.toggle('sticky', window.scrollY > 0);
    });
    document.getElementById('dropDown').addEventListener('click', () => {
      const profileMenu = document.querySelector('.profile-menu-wrap');
      profileMenu.classList.toggle('open-menu');
      let btn = document.querySelector('.nav-profile-img');
      window.addEventListener('click', function (q) {
        if (!btn.contains(q.target)) {
          profileMenu.classList.remove('open-menu');
        }
      });
    });
  },
  render: () => {
    const { name, isAdmin } = getUserInfo();
    return `
                    <header>
                        <nav class="navbar">
                            <div class="navbar-left">
                                <div class="brand">
                                    ${
                                      name
                                        ? `
                                        <a href="/#/kwitumain" class="logo">kwit&#361;</a>
                                        
                                        `
                                        : `<a href="#" class="logo">kwit&#361</a>`
                                    }
                                </div>
                                ${
                                  name
                                    ? `
                                    <div class="search-box">
                                        <img src="" alt="">
                                        <input type="text" placeholder="Search" id="search">
                                    </div>
                                `
                                    : ``
                                }
                            </div>
                            ${
                              name
                                ? `
                            <div class="navbar-center">
                                <ul>
                                    <li><span><a href="/#/profile">${name}</a></span></li>
                                </ul>
                            </div>
                            <div class="navbar-right">
                                <div class="online">
                                    <button type="button" id="dropDown"><img src="../../images/yy.jpg" alt="" class="nav-profile-img"></button>
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
                                        <!--<a href="" class="profile-menu-link">
                                            <img src="soccer.png" alt="">
                                            <button type="button" id="signout"><p>logout</p></button>
                                            <span>></span>
                                        </a>-->
                                    </div>
                                </div>
                            </div>
                            `
                                : ''
                            }
                        </nav>                       
                    </header>
                   
                `;
  },
};
export default Header;
