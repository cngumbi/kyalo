import { getUserInfo } from "../../../localStorage";

const LeftSideContent = {
    render: () => {
        const { name } = getUserInfo();
        return `
        <div class="left-sidebar">
            <div class="sidebar-profile-box">
                <img src="../../../images/bg.jpg" alt="" class="sidebar-profile-box-img">
                <div class="sidebar-profile-info">
                    <img src="../../../images/yy.jpg" alt="">
                    <h1>${ name }</h1>
                    <h3>Programmer at Softcraze Corporation</h3>
                    <ul>
                        <li>your profile views <span>74</span></li>
                        <li>your post views <span>84</span></li>
                        <li>your connections <span>98</span></li>
                    </ul>
                </div>
                <div class="sidebar-profile-link">
                    <a href="#"><img src="../../../images/soccer.png">my items</a>
                    <a href="#"><img src="../../../images/soccer.png">try premium</a>
                </div>
            </div>
            <div class="sidebar-activity">
                <h3>RECENT</h3>
                <a href="#"><img src="../../../images/soccer.png">programmer</a>
                <a href="#"><img src="../../../images/soccer.png">programmer</a>
                <a href="#"><img src="../../../images/soccer.png">programmer</a>
                <a href="#"><img src="../../../images/soccer.png">programmer</a>
                <h3>GROUP</h3>
                <a href="#"><img src="../../../images/soccer.png">programmer group</a>
                <a href="#"><img src="../../../images/soccer.png">program group</a>
                <a href="#"><img src="../../../images/soccer.png">life group</a>
                <h3>HASHTAGS</h3>
                <a href="#"><img src="../../../images/soccer.png">life</a>
                <a href="#"><img src="../../../images/soccer.png">program</a>
                <div class="discover-more-link">
                    <a href="#">Discover More</a>
                </div>
            </div>
        </div>
        `;
    },
};
export default LeftSideContent;