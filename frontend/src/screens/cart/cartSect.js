import { getProduct } from "../../js/kyalo";
import { getCartItems, setCartItems } from "../../localStorage";
import { parseRequestUrl, rerender, redirectUser } from "../../util";

const addToCart = (item, forceUpdate = false) => {
    let cartItems = getCartItems();
    const existItem = cartItems.find((x) => x.product === item.product);
    if (existItem) {
        if (forceUpdate) {
            cartItems = cartItems.map((x) =>
                x.product === existItem.product ? item : x
            );
        }
    } else {
        cartItems = [...cartItems, item];
    }
    setCartItems(cartItems);
    if (forceUpdate) {
        rerender(CartSection);
    }
};
const removerFromCart = (id) => {
    setCartItems(getCartItems().filter((x) => x.product !== id));
    if (id === parseRequestUrl().id) {
        document.location.hash = '/cart';
    } else {
        rerender(CartSection);
    }
}

const CartSection = {
        after_render: () => {
            const quantitySelects = document.getElementsByClassName("qty-select");
            Array.from(quantitySelects).forEach(quantySelect => {
                quantySelect.addEventListener('change', (e) => {
                    const item = getCartItems().find((x) => x.product === quantySelect.id);
                    addToCart({...item, qty: Number(e.target.value) }, true)
                });
            });
            const deleteButtons = document.getElementsByClassName('delete-button');
            Array.from(deleteButtons).forEach((deleteButton) => {
                deleteButton.addEventListener('click', () => {
                    removerFromCart(deleteButton.id);
                });
            });
            document.getElementById('checkout-button').addEventListener('click', () => {
                redirectUser();
                //document.location.hash = '/login';
            });
        },
        render: async() => {
                const request = parseRequestUrl();
                if (request.id) {
                    const product = await getProduct(request.id);
                    addToCart({
                        product: product._id,
                        name: product.name,
                        image: product.image,
                        price: product.price,
                        countInStock: product.countInStock,
                        qty: 1,
                    });
                }
                const cartItems = getCartItems();
                return `
        <div class="cart">
            <div class="cart-list">
                <ul class="list-container">
                    <li>
                        <h3> Shopping Cart </h3>
                        <div>Price</div>
                    </li>
                    ${
                        cartItems.length === 0 ?
                        `<div> Cart is Empty. <a href="/#/"> Start Shopping</a></div>`:
                        cartItems.map(item => `
                        <li>
                            <div class="cart-image">
                                <img src="${item.image}" alt="${item.name}">
                            </div>
                            <div class="cart-name">
                                <div>
                                    <a href="/#/product/${item.product}}">${item.name}</a>
                                </div>
                            </div>
                            <div>
                                Quantity: <select class="qty-select" id="${item.product}">
                                ${
                                    [...Array(item.countInStock).keys()].map(x => item.qty == x+1?
                                        `<option selected value="${x+1}">${x+1}</option>`:
                                        `<option value="${x+1}">${x+1}</option>`
                                )}
                                </select>
                                <button type="button" class="delete-button" id="${item.product}">
                                    Delete
                                </button>
                            </div>
                            <div class="cart-price">
                                Ksh ${item.price}
                            </div>
                        </li>
                        `).join('\n')
                    }
                </ul>
            </div> 
            <div class="cart-action">
                <h3>
                    Subtotal of ${cartItems.reduce((a, c) => a + c.qty, 0)} items
                    :
                    Ksh ${cartItems.reduce((a,c) => a + c.price * c.qty, 0)}
                </h3>
                <button id="checkout-button" class="primary fwidth">
                    proceed to checkout
                </button>
            </div>
        </div>
        `;

    }
};
export default CartSection;