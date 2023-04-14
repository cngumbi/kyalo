import LeftSideContent from "./components/leftSideContent";
import MainContent from "./components/mainContent";
import RightSideContent from "./components/rightSideContent";

const HomeSection = {
    after_render: () => {

    },
    render: () => {
        return `
            <div class="container">
                ${LeftSideContent.render()}
                ${MainContent.render()}
                ${RightSideContent.render()}
            </div>
        `;
    }
};

export default HomeSection;