import TrendingNews from "./trendingNews";

const RightSideContent = {
    render: ()=>{
        return `
        <div class="right-sidebar">
            ${ TrendingNews.render() }
            <div class="sidebar-ad">
                <small>Ad &middot; &middot; &middot;</small>
                <p>Master the 5 principles</p>
                <div>
                    <img src="../../../images/yy.jpg" alt="">
                    <img src="../../../images/yy.jpg" alt="">
                </div>
                <b>Brand and Demand</b>
                <a href="" class="ad-link">Learn More</a>
            </div>
            <div class="sidebar-useful-link">
                <a href="#">About</a>
                <a href="#">Accessibility</a>
                <a href="#">Help Center</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Advertising</a>
                <a href="#">Get the App</a>
                <a href="#">More</a>
                <div class="copyright-msg">
                    <p>Softcraze Corporation &#169; 2023. all rights reserved</p>
                </div>
            </div>
        </div>

        `;
    }
}
export default RightSideContent;