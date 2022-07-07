import { getMyOrder, update } from '../../js/kyalo';
import { clearUser, getUserInfo, setUserInfo } from '../../localStorage';
import { hideLoading, showLoading, showMessage } from '../../util';

const ProfileSection = {
        after_render: () => {
            document.getElementById('signout').addEventListener('click', () => {
                clearUser();
                document.location.hash = '/';
            })
            document
                .getElementById('profile-form')
                .addEventListener('submit', async(e) => {
                    e.preventDefault();
                    showLoading();
                    const data = await update({
                        name: document.getElementById('name').value,
                        email: document.getElementById('email').value,
                        password: document.getElementById('password').value
                    });
                    hideLoading();
                    if (data.error) {
                        showMessage(data.error);
                    } else {
                        setUserInfo(data);
                        document.location.hash = '/';
                    }
                });
        },
        render: async() => {
                const orders = await getMyOrder();
                const { name, email } = getUserInfo();
                if (!name) {
                    document.location.hash = '/';
                }

                return `
                    <div class="profile">
                        <div class="profile-info">
                            <!--profile update form-->
                            <div class="form-container">
                                <form id="profile-form">
                                    <ul class="form-items">
                                        <li>
                                            <h1>User Profile</h1>
                                        </li>
                                        <li>
                                            <label for="name">Name</label>
                                            <input type="name" name="name" id="name" value="${name}"/>
                                        </li>
                                        <li>
                                            <label for="email">Email</label>
                                            <input type="email" name="email" id="email" value="${email}"/>
                                        </li>
                                        <li>
                                            <label for="password">Password</label>
                                            <input type="password" name="password" id="password"/>
                                        </li>
                                        <li>
                                            <button type="submit" class="primary">Update</button>
                                        </li>
                                        <li>
                                            <button type="button" id="signout" class="primary">Sign out</button>
                                        </li>
                                    </ul>
                                </form>
                            </div>
                        </div>
                        <h2> Order History</h2>
                        <div class="profile-orders">
                            <table>
                                <thead>
                                    <tr>
                                        <th>ORDER ID</th>
                                        <th>DATE</th>
                                        <th>TOTAL</th>
                                        <th>PAID</th>
                                        <th>DELIVERED</th>
                                        <th>ACTIONS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                ${
                                    orders.length === 0
                                    ? `<tr><td colspan="6"> No Order Found</td></tr>`
                                    : orders.map(
                                        (order) => `
                                        <tr>
                                            <td>${order._id}</td>
                                            <td>${order.createdAt}</td>
                                            <td>${order.totalPrice}</td>
                                            <td>${order.paidAt || 'No'}</td>
                                            <td>${order.deliveryAt || 'No'}</td>
                                            <td><a href="/#/order/${order._id}">DETIALS</a></td>
                                        </tr>
                                        `
                                    ).join('\n')
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>`;
    },
};
export default ProfileSection;