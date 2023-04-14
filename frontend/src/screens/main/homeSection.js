import LeftSideContent from "./components/leftSideContent";

const HomeSection = {
    after_render: () => {

    },
    render: () => {
        return `
            <div class="dashboard">
                ${LeftSideContent.render()}
            </div>
        `;
    }
};

export default HomeSection;