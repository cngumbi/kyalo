//import { getUsers } from "../../js/kyalo";
import DashboardMenu from "./components/dashboardMenu";
const UsersListSection = {
    after_render: () => {},
    render: async() => {
        //const users = await getUsers();
        return `
                <div class="dashboard">
                    ${DashboardMenu.render({selected: 'users'})}
                    <div class="dashboard-content">
                        <h1>Users</h1>
                        <div class="product-list">
                            <table>
                                <thead>
                                    <tr>
                                        <th>NAME</th>
                                        <th>EMAIL</th>
                                        <th>PASSWORD</th>
                                    </tr>
                                </thead>
                                <tbody>
                                                      
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>`;
    }
};
export default UsersListSection;