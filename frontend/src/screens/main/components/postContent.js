const PostContent = {
    render: ()=>{
        return`
        <div class="create-post">
            <div class="create-post-input">
                <img src="../../../images/yy.jpg" alt="">
                <textarea name="" id="" rows="2" placeholder="write a post"></textarea>
            </div>
            <div class="create-post-links">
                <li><img src="../../../images/soccer.png">Photo</li>
                <li><img src="../../../images/soccer.png">Video</li>
                <li><img src="../../../images/soccer.png">Event</li>
                <li>Post</li>
            </div>
        </div>
        `;
    }
}

export default PostContent;