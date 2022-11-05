//import { getProducts } from "../../js/kyalo";
//import DashboardMenu from "./components/dashboardMenu";
//import User from "../../../../backend/models/userModel";
//import { getUserInfo } from "../../localStorage";
//import { redirectUser } from "../../util";

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