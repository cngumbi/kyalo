//import data from "../data.js";
const MainSection = {
        render: async() => {
                //const { products } = data;

                const response = await fetch("http://localhost:5000/api/products", {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (!response || !response.ok) {
                    return `<div>Error in getting data</div>`;
                }
                const products = await response.json();
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
                `;
    },
};
export default MainSection;