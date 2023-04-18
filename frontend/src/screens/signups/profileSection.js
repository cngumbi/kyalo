import { update, uploadProfileImage } from '../../js/kyalo';
import { clearUser, getUserInfo, setUserInfo } from '../../localStorage';
import { hideLoading, showLoading, showMessage } from '../../util';
import EducationSection from '../main/components/educationContent';
import ExperienceContent from '../main/components/experinceContent';
import LanguageContent from '../main/components/languageContent';
import SkillsContent from '../main/components/skillsContent';
import TrendingNews from '../main/components/trendingNews';

const ProfileSection = {
    after_render: () => {
        document.getElementById('signout').addEventListener('click', () => {
            clearUser();
            document.location.hash = '/';
        })
        document
            .getElementById('profile-form')
            .addEventListener('submit', async(e) => {
                e.preventDefault();
                showLoading();
                const data = await update({
                    name: document.getElementById('name').value,
                    email: document.getElementById('email').value,
                    profilePic: document.getElementById('image').value,
                    password: document.getElementById('password').value
                });
                hideLoading();
                if (data.error) {
                    showMessage(data.error);
                } else {
                    setUserInfo(data);
                    document.location.hash = '/';
                }
            });
            document.getElementById('image-file').addEventListener('change', async(e)=>{
                const file = e.target.file[0];
                const formData = new FormData();
                formData.append('image', file);
                showLoading();
                const data = await uploadProfileImage(formData);
                hideLoading();
                if(data.error){
                    showMessage(data.error);
                }else{
                    showMessage('Image uploaded');
                    document.getElementById('image').value = data.image;
                }
            })
    },
    render: async() => {
        //const orders = await getMyOrder();
        const { name, email, profilePic } = getUserInfo();
        if (!name) {
            document.location.hash = '/';
        }

        return `
            <div class="container">
                <div class="profile-main">
                    <div class="profile-container">
                        <img src="../images/p01.PNG" class="profile-sidebar-img">
                        <div class="profile-continer-inner">
                            <img src="../images/yy.jpg" class="profile-pic">
                            <h1>${name}</h1>
                            <b>${email}</b>
                            <br>
                            <b> Programmer at Softcraze Corporation</b>
                            <p> Nairobi, Kenya <a href="#">Contact Info</p></p>
                            <div class="mutual-collaboration">
                                <img src="../images/yy.jpg">
                                <span> 1 Collaboration: KSSA Organisation</span>
                            </div>
                            <div class="profile-btn">
                                <a href="#" class="primary-btn"><img src="../images/soccer.png">Collaborate</a>
                                <a href="#"><img src="../images/soccer.png">Message</a>
                            </div>
                        </div>
                    </div>
                    <div class="profile-description">
                        <h2> About</h2>
                        <p>
                            It is true and we as Christians believe that Christ will 
                            coming back  again and we need to be prepared all the 
                            time since no one know the hour or the day but the 
                            sings can tell. We are living end times since many of the
                            things that were prophesied already has come to pass 
                            but before 
                        </p>
                        <a href="#" class="see-more-link">See More...</a>
                    </div>
                    ${ExperienceContent.render()}
                    ${EducationSection.render()}
                    ${SkillsContent.render()}
                    ${LanguageContent.render()}
                </div>
              
                <!---profile sidebar ------>
                <div class="profile-sidebar">
                    ${ TrendingNews.render() }
                    <div class="profile">
                        <div class="profile-info">
                            <!--profile update form-->
                            <div class="form-container">
                                <form id="profile-form">
                                    <ul class="form-items">
                                        <li>
                                            <h1>User Profile</h1>
                                        </li>
                                        <li>
                                            <label for="name">Name</label>
                                            <input type="name" name="name" id="name" value="${name}"/>
                                        </li>
                                        <li>
                                            <label for="email">Email</label>
                                            <input type="email" name="email" id="email" value="${email}"/>
                                        </li>
                                        <li>
                                            <label for="image">image (680 x 830)</label>
                                            <input type="text" name="image" id="image" value="${profilePic}"/>
                                            <input type="file" name="image-file" id="image-file" />
                                        </li>
                                        <li>
                                            <label for="password">Password</label>
                                            <input type="password" name="password" id="password"/>
                                        </li>
                                        <li>
                                            <button type="submit" class="button-fill">Update</button>
                                        </li>
                                        <li>
                                            <button type="button" id="signout" class="button-fill ">Sign out</button>
                                        </li>
                                    </ul>
                                </form>
                            </div>
                        </div>                        
                    </div>
                    <!--<div class="sidebar-ads">
                        <small>Ad &middot; &middot; &middot;</small>
                        <p>Master the 5 principles</p>
                        <div>
                            <img src="../images/yy.jpg" alt="">
                            <img src="../images/yy.jpg" alt="">
                        </div>
                        <b>Brand and Demand</b>
                        <a href="" class="ad-link">Learn More</a>
                    </div>-->
                </div>
            </div>
            <div class="dashboard">
                <div class="dashboard-content">
                    
                </div>
                </div>`;
    },
};
export default ProfileSection;