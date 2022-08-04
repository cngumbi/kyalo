import { register } from '../../js/kyalo';
import { eValid, isRange, isRequired, msgError, msgSuccess } from '../../js/language';
import { getUserInfo, setUserInfo } from '../../localStorage';
import { hideLoading, redirectUser, showLoading, showMessage } from '../../util';

const RegisterSection = {
    after_render: () => {
        const nameVd = document.querySelector('#name');
        const emailVd = document.querySelector('#email');
        const passwordVd = document.querySelector('#password');
        const confirmpwdVd = document.querySelector('#confirmPassword');
        //--------------------------------------------------------------
        document
            .getElementById('register-form')
            .addEventListener('submit', async(e) => {
                e.preventDefault();
                showLoading();
                const data = await register({
                    name: document.getElementById('name').value,
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
        //-----------------------------------------------------------------
        //function to check validity of user name
        const checkName = () => {
            let valid = false;
            const min = 3,
                max = 255;

            const name = nameVd.value.trim();

            if (!isRequired(name)) {
                msgError(nameVd, 'Name cannot be blank', 'small');
            } else if (!isRange(name.length, min, max)) {
                msgError(nameVd, `Name must be between ${min} and ${max} characters`);
            } else {
                msgSuccess(nameVd, 'small');
                valid = true;
            }
            return valid;
        };
        //function to check validity of user email
        const checkEmail = () => {
            let valid = false;
            const email = emailVd.value.trim();

            if (!isRequired(email)) {
                msgError(nameVd, 'Email cannot be blank', 'small');
            } else if (!eValid(valid)) {
                msgError(nameVd, 'Email is invalid', 'small');
            } else {
                msgSuccess(emailVd, 'small');
                valid = true;
            }

        }
    },
    render: () => {
        if (getUserInfo().name) {
            redirectUser();
        }
        return `
        <div class="form-container">
            <form id="register-form">
                <ul class="form-items">
                    <li>
                        <h1>Create Account</h1>
                    </li>
                    <li>
                        <label for="name">Name</label>
                        <input type="name" name="name" id="name"/>
                        <small></small>
                    </li>
                    <li>
                        <label for="email">Email</label>
                        <input type="email" name="email" id="email"/>
                        <small></small>
                    </li>
                    <li>
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password"/>
                        <small></small>
                    </li>
                    <li>
                        <label for="confirmPassword">Confirm Password</label>
                        <input type="password" name="confirmPassword" id="confirmPassword"/>
                        <small></small>
                    </li>
                    <li>
                        <button type="submit" class="primary">Registor</button>
                    </li>
                    <li>
                        <div>
                            Have an Account?
                            <a href="/#/signin">Sign In</a>
                        </div>
                    </li>
                </ul>
            </form>
        </div>
        `;
    },
};
export default RegisterSection;