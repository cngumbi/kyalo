import { getProduct } from '../../js/kyalo';
import { parseRequestUrl } from '../../util';
import Rating from '../components/rating';

const ProductSection = {
        after_render: () => {
            const request = parseRequestUrl();
            document.getElementById('add-button').addEventListener('click',
                () => {
                    document.location.hash = `/cart/${request.id}`;
                });

        },
        render: async() => {
                const request = parseRequestUrl();
                const product = await getProduct(request.id);
                if (product.error) {
                    return `<div> ${product.error}</Div>`;
                }
                return `
                    <div class="item-content">
                        <div class="back-to-main">
                            <a href="/#/ ">home page</a>
                        </div>
                        <div class="item-details">
                            <div class="details-img">
                                <img src="${product.image}" alt="${product.name}">
                            </div>
                            <div class="details-info">
                                <ul>
                                    <li>
                                        <h1>${product.name}</h1>
                                    </li>
                                    <li>
                                    ${Rating.render({
                                        value: product.rating,
                                        text: `${product.numReviews} reviews`,
                                    })}
                                    </li>
                                    <li>
                                        Price: <strong>Ksh${product.price}</strong>
                                    </li>
                                    <li>
                                        Description:
                                        <div>
                                            ${product.description}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="details-action">
                                    <ul>
                                        <li>
                                            Price: Ksh${product.price}
                                        </li>
                                        <li>
                                            Status : 
                                                ${product.countInStock > 0 
                                                    ? `<span class="success">In  stock</span>`
                                                    :  `<span class="danger">Unavailable</span>`
                                                }
                                                                        
                                        </li>
                                        <li>
                                                <button id="add-button" class="fwidth primary">Add to Cart </button>
                                        </li>
                                    </ul>
                            </div>
                        </div>
                    </div>`;
    },
};
export default ProductSection;