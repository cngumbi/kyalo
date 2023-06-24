import { getUserInfo, setPayment } from '../../localStorage';
import CheckoutSteps from '../components/checkoutSteps';

const PaymentSection = {
    after_render: () => {
        document
            .getElementById('payment-form')
            .addEventListener('submit', async(e) => {
                e.preventDefault();
                const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;
                setPayment({ paymentMethod });
                document.location.hash = '/placeorder';
            });
    },
    render: () => {
        const { name } = getUserInfo();
        if (!name) {
            document.location.hash = '/';
        }
        return `
        ${CheckoutSteps.render({stepone: true, steptwo: true, stepthree: true})}
        <div class="form-container">
            <form id="payment-form">
                <ul class="form-items">
                    <li>
                        <h1>Payment</h1>
                    </li>
                    <li>
                        <div>
                            <input type="radio" name="payment-method" id="paypal" value="Paypal" checked />
                            <label for="paypal">Paypal</label>
                        </div>
                    </li>            
                    <li>
                        <button type="submit" class="primary">Continue</button>
                    </li>
                </ul>
            </form>
        </div>
        `;
    },
};
export default PaymentSection;