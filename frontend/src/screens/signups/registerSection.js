import { register } from '../../js/kyalo';
//import { eValid, isRange, isRequired, msgError, msgSuccess } from '../../js/language';
import { getUserInfo, setUserInfo } from '../../localStorage';
import { hideLoading, redirectUser, showLoading, showMessage } from '../../util';

const RegisterSection = {
    after_render: () => {
        document
            .getElementById('register-form')
         .addEventListener('submit', async(e)=>{
            e.preventDefault();
            showLoading();
            const data = await register({
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                password: document.getElementById('password').value
            });
            hideLoading();
            if(data.error){
                showMessage(data.error);
            }else{
                setUserInfo(data);
                //redirectUser();
                document.location.hash = '/dashboard';
            }
        });
    },
    render: () => {
        if (getUserInfo().name) {
            //redirectUser();
            document.location.hash = '/dashboard';
        }
        return `
            <section>
                <div class="side">
                    <img src="../../images/soccer.svg">
                </div>
                <div class="main">
                    <div class="auth-container">
                        <p class="title">Welcome</p>
                        <div class="separator"></div>
                        <p class="welcome-message">
                            Create An Account with us.
                        </p>
                        <form action="" class="auth-form" id="register-form">
                            <div class="form-control">
                                <input type="text" name="name" placeholder="Full Name" id="name">
                                <i class="fas fa-user"></i>
                            </div>
                            <div class="form-control">
                                <input type="email" name="email" placeholder="Email" id="email">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div class="form-control">
                                <input type="password" name="password' placeholder="Password" id="password">
                                <i class="fas fa-lock"></i>
                            </div>
                            <div class="form-control">
                                <input type="password" name="confirmPassword" placeholder=" Confirm Password" id="confirmPassword">
                                <i class="fas fa-lock"></i>
                            </div>
                            <button type="submit" class="submit">Register</button>
                            <div class="redirect">Have an Account ? <a href="/#/signin">Sign In</a></div>
                        </form>
                    </div>
                </div>
            </section>
        `;
    },
};
export default RegisterSection;

/*
const nameVd = document.querySelector('#name');
        const emailVd = document.querySelector('#email');
        const passwordVd = document.querySelector('#password');
        const confirmpwdVd = document.querySelector('#confirmPassword');
        //function to check validity of user name
        const checkName = () => {
            let valid = false;
            const min = 3,
                max = 255;

            const name = nameVd.value.trim();

            if (!isRequired(name)) {
                msgError(nameVd, 'Name cannot be blank');
            } else if (!isRange(name.length, min, max)) {
                msgError(nameVd, `Name must be between ${min} and ${max} characters`);
            } else {
                msgSuccess(nameVd);
                valid = true;
            }
            return valid;
        };
        //function to check validity of user email
        const checkEmail = () => {
            let valid = false;
            const email = emailVd.value.trim();

            if (!isRequired(email)) {
                msgError(emailVd, 'Email cannot be blank');
            } else if (!eValid(valid)) {
                msgError(emailVd, 'Email is invalid');
            } else {
                msgSuccess(emailVd);
                valid = true;
            }

        };
        //function for password field validation
        const checkPWD = () => {
            let valid = false;

            const password = passwordVd.value.trim();

            if (!isRequired(password)) {
                msgError(passwordVd, 'password cannot be blank');
            } else if (!pwdValid(password)) {
                msgError(passwordVd, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
            } else {
                msgSuccess(passwordVd);
            }
            return valid;
        };
        //confirm password
        const confirmPWD = () => {
            let valid = false;
            //check confirm password
            const confirmPassword = confirmpwdVd.value.trim();
            const password = passwordVd.value.trim();

            if (!isRequired(confirmPassword)) {
                msgError(emailVd, 'please Enterthe password again!');
            } else if (password !== confirmPassword) {
                msgError(confirmpwdVd, 'Confirm password does not match');
            } else {
                msgSuccess(confirmpwdVd);
                valid = true;
            }
            return valid;
        };
        //--------------------------------------------------------------
        //submit the form
        //--------------------------------------------------------------
        document
            .getElementById('register-form')
            .addEventListener('submit', async(e) => {
                e.preventDefault();
                showLoading();
                //------------------------------
                //validate form
                //------------------------------
                let isNameValid = checkName(),
                    isEmailValid = checkEmail(),
                    isPwdValid = checkPWD(),
                    isConfirmPwdValid = confirmPWD();

                let formValid = isNameValid &&
                    isEmailValid &&
                    isPwdValid &&
                    isConfirmPwdValid;
                //-------------------------------

                if (formValid) {
                    const data = await register({
                        name: document.getElementById('name').value,
                        email: document.getElementById('email').value,
                        password: document.getElementById('password').value
                    });
                }

                hideLoading();
                if (data.error) {
                    showMessage(data.error);
                } else {
                    setUserInfo(data);
                    redirectUser();
                }
            });
        //-----------------------------------------------------------------
        //create a bounce function to create a delay during the form validation
        //------------------------------------------------------------------
        const bounce = (fn, delay = 500) => {
            let timeoutId;

            return (...args) => {
                //cancel the previous timer
                if (timeoutId) {
                    clearTimeout(timeoutId);
                }
                //setup a new timer
                timeoutId = setTimeout(() => {
                    fn.apply(null, args)
                }, delay);
            };

        };
        //add an event listener
        document.addEventListener('input', bounce((e) => {
            switch (e.target.id) {
                case 'name':
                    checkName();
                    break;
                case 'email':
                    checkEmail();
                    break;
                case 'password':
                    checkPWD();
                    break;
                case 'confirmPassword':
                    confirmPWD();
                    break;
            }
        }));
*/