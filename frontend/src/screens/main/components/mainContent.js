import { getUserInfo } from "../../../localStorage";
import PostContent from "./postContent";

const MainContent = {
    render: ()=>{
        const { profilePic } = getUserInfo();
        return `
        <div class="main-content">
            ${PostContent.render()}
            <div class="sort-by">
                <hr>
                <p>Sort By: <span>Top <img src="../../../images/soccer.png" alt=""></span></p>
            </div>
            <!--start of post-->
            <div class="post">
                <div class="post-author">
                    <img src="../../../images/yy.jpg" alt="">
                    <div>
                        <h1>Christopher Ngumbi</h1>
                        <small>Founder and CEO at Softcraze corporation</small>
                        <small>2 hours ago</small>
                    </div>
                </div>
                <p>It is true and we as Christians believe that Christ will 
                    coming back  again and we need to be prepared all the 
                    time since no one know the hour or the day but the 
                    sings can tell. We are living end times since many of the
                     things that were prophesied already has come to pass 
                     but before then many things will happen for example.
                </p>
                <img src="../../../images/bg.jpg" width="100%">
                <div class="post-stats">
                    <div>
                        <img src="../../../images/soccer.png" alt="">
                        <img src="../../../images/soccer.png" alt="">
                        <img src="../../../images/soccer.png" alt="">
                        <span class="liked-users">christopher and 100 others</span>
                    </div>
                    <div>
                        <span>25 comments &middot; 50 shares</span>
                    </div>
                </div>
                <div class="post-activity">
                    <div>
                        <img src="../../../images/yy.jpg" alt="" class="post-activity-user-icon">
                        <img src="../../../images/soccer.png" alt="" class="post-activity-arrow-icon">
                    </div>
                    <div class="post-activity-link">
                        <img src="../../../images/soccer.png" alt="">
                        <span>Like</span>
                    </div>
                    <div class="post-activity-link">
                        <img src="../../../images/soccer.png" alt="">
                        <span>Comment</span>
                    </div>
                    <div class="post-activity-link">
                        <img src="../../../images/soccer.png" alt="">
                        <span>Share</span>
                    </div>
                    <div class="post-activity-link">
                        <img src="../../../images/soccer.png" alt="">
                        <span>Send</span>
                    </div>
                </div>               
            </div>
            <!--end of post-->
        </div>
        
        `;
    }
}
export default MainContent;