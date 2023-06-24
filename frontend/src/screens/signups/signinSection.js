import { signin } from '../../js/kyalo';
import { getUserInfo, setUserInfo } from '../../localStorage';
import { hideLoading, redirectUser, showLoading, showMessage } from '../../util';

const SigninSection = {
    after_render: () => {
        document
            .getElementById('signin-form')
            .addEventListener('submit', async(e) => {
                e.preventDefault();
                showLoading();
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
                    //document.location.hash = '/dashboard';
                }
            });
    },
    
    render: () => {
        if (getUserInfo().name) {
            redirectUser();
            //document.location.hash = '/dashboard';
        }
        return `
            <section>
                <div class="side">
                    <img src="../../images/soccer.svg">
                </div>
                <div class="main">
                    <div class="auth-container">
                        <p class="title">Welcome back</p>
                        <div class="separator"></div>
                        <p class="welcome-message">Please,
                            provide login credential
                        </p>
                        <form action="" class="auth-form" id="signin-form">
                            <div class="form-control">
                                <input type="email" name="email" placeholder="Email" id="email">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div class="form-control">
                                <input type="password" name="password" placeholder="Password" id="password">
                                <i class="fas fa-lock"></i>
                            </div>
                            <button type="submit" class="submit">Login</button>
                            <div class="redirect">NEW USER ? <a href="/#/register">Create an account with us</a></div>
                        </form>
                    </div>
                </div>
            </section>
        `;
    },
};
export default SigninSection;