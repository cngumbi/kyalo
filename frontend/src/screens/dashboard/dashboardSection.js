import DashboardMenu from "./components/dashboardMenu";

const DashboardSection = {
    after_render: () => {

    },
    render: () => {
        return `
        <div class="dashboard">
            ${DashboardMenu.render({selected: 'dashboard'})}
            <div class="dashboard-content">
                <h1>Dashboard</h1>
                <div>
                    info and charts added header</div>
            </div>
        </div>`;
    },
};
export default DashboardSection;