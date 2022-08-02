import { getProducts } from "../../js/kyalo";
//import { getUserInfo } from "../../localStorage";
import DashboardMenu from "./components/dashboardMenu";
import User from "../../../../backend/models/userModel";
import { getUserInfo } from "../../localStorage";
import { redirectUser } from "../../util";

const DashboardSection = {
        after_render: () => {

        },
        render: async() => {
                const products = await getProducts();
                const users = User;
                const { name } = getUserInfo();
                if (!name) {
                    redirectUser();
                } else {
                    return `
            <div class="dashboard">
            ${DashboardMenu.render({selected: 'dashboard'})}
            <div class="dashboard-content">
                <header>
                    <h2>
                        <label for=""><span class="ky-whiteboard"></span>Dashboard</label>                       
                    </h2>
                    <div class="search-wrapper">
                        <span class="ky-search"></span>
                        <input type="search" placeholder="Search Here"/>                 
                    </div>
                </header>
                <main>
                    <div class="dashboard-cards">
                        <div class="card-single">
                            <div>
                                <h1>${users.length}</h1>
                                <span>Customers</span>
                            </div>
                            <div>
                                <span class="ky-team lg"></span>
                            </div>
                        </div>
                        <div class="card-single">
                            <div>
                                <h1>${products.length}</h1>
                                <span>Products</span>
                            </div>
                            <div>
                                <span class=""></span>
                            </div>
                        </div>
                        <div class="card-single">
                            <div>
                                <h1>54</h1>
                                <span>Orders</span>
                            </div>
                            <div>
                                <span class=""></span>
                            </div>
                        </div>
                        <div class="card-single">
                            <div>
                                <h1>54</h1>
                                <span>Sales</span>
                            </div>
                            <div>
                                <span class=""></span>
                            </div>
                        </div>
                        <div class="card-single">
                            <div>
                                <h1>54Ksh</h1>
                                <span>Income</span>
                            </div>
                            <div>
                                <span class=""></span>
                            </div>
                        </div>
                        <!--add list of new products here-->
                        <div class="recent-grid">
                            <div class="products">
                               <div class="products-card">
                                   <div class="card-header">
                                       <h3> New Products</h3>
                                       <button>See all<span class=""></span></button>
                                   </div>
                                   <!--<div class="card-body">
                                       <table>
                                       </table>
                                   </div>-->

                               </div>
                            </div>
                        </div>
                    </div>
                    <div class="product-list">
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>IMAGE</th>
                                    <th>NAME</th>
                                    <th>PRICE</th>
                                    <th>CATEGORY</th>
                                    <th>BRAND</th>
                                    <th class="tr-action">ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${products.map(
                                    (product) =>`
                                    <tr>
                                        <td>${product._id}</td>
                                        <td class="image"><img src="${product.image}" alt="${product.name}"></td>
                                        <td>${product.name}</td>
                                        <td>${product.price}</td>
                                        <td>${product.category}</td>
                                        <td>${product.brand}</td>
                                        <td>
                                            <button id="${product._id}" class="edit-button">Edit</button>
                                            <button id="${product._id}" class="delete-button">Delete</button>
                                        </td>
                                    </tr>
                                    `
                                ).join('\n')}                        
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
            </div>`;
                

        }

    },
};
export default DashboardSection