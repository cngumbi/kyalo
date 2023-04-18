import { getUserInfo } from "../../localStorage";

const Footer = {
    render: () => {
        const { name } = getUserInfo();
        return `
        ${name ? `
            <div>
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
            </div>`
        : ''}
        `;

    },
    after_render: () => {}
};
export default Footer;