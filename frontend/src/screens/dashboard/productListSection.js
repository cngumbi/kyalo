import { getProducts } from "../../js/kyalo";
import DashboardMenu from "./components/dashboardMenu";
const ProductListSection = {
        after_render: () => {},
        render: async() => {
                const products = await getProducts();
                return `
        <div class="dashboard">
            ${DashboardMenu.render({selected: 'products'})}
            <div class="dashboard-content">
                <h1>Products</h1>
                <button id="create-product" class="primary"> Create Product</button>
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
            </div>
        </div>`;
    }
};
export default ProductListSection;