import data from "../data.js";
const HomeScreen = {
        render: () => {
                const { products } = data;

                return `
                <ul class="card">
                    ${products.map( product =>`
                    <li>
                        <div class="card-item">
                            <a href="#/product/${product._id}">
                                <img src="${product.image}" alt="${product.name}">
                            </a>
                            <div class="item-name">
                                <a href="#/product/1">${product.name}</a>
                            </div>
                            <div class="item-brand">
                                ${product.brand}
                            </div>
                            <div class="item-price">
                            ${product.price}
                            </div>

                        </div>
                    </li>
                    `).join('\n')}
                </ul>`;
    },
};
export default HomeScreen;