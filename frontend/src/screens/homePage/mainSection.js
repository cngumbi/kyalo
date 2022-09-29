//setting the user on the main page
//import { signin } from '../../js/kyalo';
//import { getUserInfo, setUserInfo } from '../../localStorage';
//import { hideLoading, redirectUser, showLoading, showMessage } from '../../util';
//import data from "../data.js";
//import axios from 'axios';
//import { getProducts } from '../../js/kyalo';
//import { hideLoading, showLoading } from '../../util';
//import Rating from '../components/rating'
//import SigninSection from "../signups/signinSection";
const MainSection = {
    after_render: () => {

    },
    render: async() => {
        return `
            <div class="main-page">
                <div class="home-header bottom-margin">
                    <ul>
                        <li class="space-between"><a>tournaments</a></li>
                        <li class="space-between"><a>new games</a></li>
                        <li class="space-between"><a>new teams</a></li>
                        <li class="space-between"><a>match fixture</a></li>
                        <li class="space-between"><a>league</a></li>
                    </ul>
                </div> 
                <div class="row">
                    <div class="col-1-of-2">
                        <div class="motor">
                            <h1>how teams </h1>
                            <h1>should play</h1>
                        </div>
                        <div class="motivation bottom-margin">
                            <h2>Forget the old rules. You can Play the Best teams</h2>
                            <h2>Right here. Right now</h2>
                        </div>
                        <div class="row">
                            <div class="col-1-of-2"><div class="button-fill button-cursor button-text"><a href="/#/register">Join Us</a></div></div>
                            <div class="col-1-of-2"><div class="button-clear button-cursor button-text"><a href="/#/signin">Sign In</a></div></div>
                        </div>
                        <div >
                            <h6>sponsored by</h6>
                            <ul class="composition">
                                <li><img src="" alt="" class="">logo image</li>
                                <li><img src="" alt="" class="">logo image</li>
                                <li><img src="" alt="" class="">logo image</li>
                            </ul>
                        </div>                       
                    </div>
                    <div class="col-1-of-2">
                    </div>
                    
                </div>
            </div>   
        `;
    },
};
export default MainSection;