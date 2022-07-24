const DashboardMenu = {
    render: (props) => {
        return `
        <div class="dashboard-menu">
            <ul>
                <li class="${props.selected === 'dashboard' ? 'selected' : ''}">
                    <a href="/#/dashboard"><span class="ky-whiteboard"></span>Dashboard</a>
                </li>
                <li class="${props.selected === 'orders' ? 'selected' : ''}">
                    <a href="/#/orderlist">Orders</a>
                </li>
                <li class="${props.selected === 'products' ? 'selected' : ''}">
                    <a href="/#/productlist">Products</a>
                </li>
                <li class="${props.selected === 'users' ? 'selected' : ''}">
                    <a href="/#/userslist"><span class="ky-team"></span>Users</a>
                </li>
            </ul>
        </div>
        `;
    },
};
export default DashboardMenu;