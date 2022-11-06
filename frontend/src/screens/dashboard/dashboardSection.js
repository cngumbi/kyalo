import DashboardMenu from "./components/dashboardMenu";

const DashboardSection = {
    after_render: () => {

    },
    render: () => {
        return `
            <div class="dashboard">
                ${DashboardMenu.render({selected:'dashboard'})}
                <div class="dashboard-content">
                    <h1>dashboard</h1>
                    <div>
                        all dashboard content will be added here
                    </div>
                </div>
            </div>
        `;
    }
};

export default DashboardSection;