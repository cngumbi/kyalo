import { signin } from "../../js/kyalo";
import { getUserInfo, setUserInfo } from "../../localStorage";
import { hideLoading, redirectUser, showLooding, showMessage } from "../../util";

const MainSection = {
    after_render: () => {
        document
            .getElementById('signin-form')
            .addEventListener('submit', async(e) => {
                e.preventDefault();
                showLooding();
                const data = await signin({
                    email: document.getElementById('email').value,
                    password: document.getElementById('password').value
                });
                hideLoading();
                if (data.error) {
                    showMessage(data.error);
                } else {
                    setUserInfo(data);
                    redirectUser();
                }
            });
    },
    render: async() => {
        if (getUserInfo().name) {
            redirectUser();
        }
        return `
            <div class="main-page">
               <!-- <div class="home-header bottom-margin">
                    <ul>
                        <li class="space-between"><a>tournaments</a></li>
                        <li class="space-between"><a>new games</a></li>
                        <li class="space-between"><a>new teams</a></li>
                        <li class="space-between"><a>match fixture</a></li>
                        <li class="space-between"><a>league</a></li>
                    </ul>
                </div> -->
                <div class="row">
                    <div class="col-1-of-2 top-margin">
                        <div class="motor">
                            <h1>how teams </h1>
                            <h1>play</h1>
                        </div>
                        <div class="motivation bottom-margin">
                            <h2>Forget the old rules. You can Play the Best teams.</h2>
                            <h2>Right here. Right now</h2>
                        </div>
                    </div>
                    <div class="col-1-of-2 top-margin bottom-margin">
                        <div class="form-container">
                            <form id="signin-form">
                                <ul class="form-items">
                                    <li>
                                        <h1>SIGN IN</h1>
                                    </li>
                                    <li>
                                        <label for="email">Email</label>
                                        <input type="email" name="email" id="email"/>
                                    </li>
                                    <li>
                                        <label for="password">Password</label>
                                        <input type="password" name="password" id="password"/>
                                    </li>
                                    <li><button type="submit" class="button-fill">SIGN IN</button></li>
                                    <li><div>NEW USER?<a href="/#/register">Create an account with us</a></div></li>
                                </ul>
                            </form>
                        </div>
                    </div> 
                </div>
            </div>            
        `;
    },
};
export default MainSection;