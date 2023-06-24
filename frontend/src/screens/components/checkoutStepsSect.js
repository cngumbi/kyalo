//to code the props section
const CheckoutSteps = {
    render: (props) => {
        return `
            <div class="chechout-stpes">
                <div class="${props.stepone ? 'active' : ''}"> Signin</div>
                <div class="${props.steptwo ? 'active' : ''}"> Shipping</div>
                <div class="${props.stepthree ? 'active' : ''}"> Payment</div>
                <div class="${props.stepfour ? 'active' : ''}"> Place Order</div>
            </div>
        `;

    },
};
export default CheckoutSteps;