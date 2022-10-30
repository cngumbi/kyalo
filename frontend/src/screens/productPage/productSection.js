import { getProduct } from '../../js/kyalo';
import { hideLoading, parseRequestUrl, showLoading } from '../../util';
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
                showLoading();
                const product = await getProduct(request.id);
                if (product.error) {
                    return `<div> ${product.error}</Div>`;
                }
                hideLoading();
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
                    </div>
                    <!-- <div class="row">
                    <div class="col-1-of-2">
                        <div class="card">
                            <div class="card__side">
                                <div class="card__picture">${tournament.image}</div>
                                <h4 class="card__heading"><span class="card__heading--highlight">${tournament.name}</span></h4>
                                <div class="card__details">
                                    <ul>
                                        <li>${tournament.period}</li>
                                        <li>maximum teams ${tournament.MaximumTeam}</li>
                                        <li>Referies ${tournament.numberOfReferies}</li>
                                        <li>${Rating.render({
                                            value: tournament.rating,
                                            text: `${tournament.numReviews} reviews`,
                                        })}</li>
                                        <li><button class="card__details--btn">join</button></li>
                                    </ul>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>-->`;
    },
};
export default ProductSection;