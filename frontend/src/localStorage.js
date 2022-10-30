export const getCartItems = () => {
    const cartItems = localStorage.getItem('cartItems') ?
        JSON.parse(localStorage.getItem('cartItems')) : [];
    return cartItems;
};
export const setCartItems = (cartItems) => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
};
export const setUserInfo = ({
    _id = '',
    name = '',
    email = '',
    password = '',
    token = '',
    isAdmin = false
}) => {
    localStorage.setItem(
        'userInfo',
        JSON.stringify({
            _id,
            name,
            email,
            password,
            token,
            isAdmin
        })
    );
};
//Sign out
export const clearUser = () => {
    localStorage.removeItem('userInfo');

};
export const getUserInfo = () => {
    return localStorage.getItem('userInfo') ?
        JSON.parse(localStorage.getItem('userInfo')) : { name: '', email: '', password: '' };
};
//get shipping section
export const getShipping = () => {
    const shipping = localStorage.getItem('shipping') ?
        JSON.parse(localStorage.getItem('shipping')) : {
            address: '',
            city: '',
            postalCode: '',
            country: '',
        };
    return shipping;

};
export const setShipping = ({
    address = '',
    city = '',
    postalCode = '',
    country = '',
}) => {
    localStorage.setItem(
        'shipping',
        JSON.stringify({ address, city, postalCode, country })
    );
};
//getpayment section
export const getPayment = () => {
    const shipping = localStorage.getItem('payment') ?
        JSON.parse(localStorage.getItem('payment')) : {
            paymentMethod: 'paypal'
        };
    return shipping;

};
export const setPayment = ({
    paymentMethod = 'paypal'
}) => {
    localStorage.setItem(
        'payment',
        JSON.stringify({ paymentMethod })
    );
};
//clean cart function
export const cleanCart = () => {
    localStorage.removeItem('cartItems');
};
//-------------------------------------------------------------------------------------
//player info
//-------------------------------------------------------------------------------------
export const setPlayerInfo = ({
    _id = '',
    sirName = '',
    firstName = '',
    lastName = '',
    positionPlayed = '',
    age = '',
    DOB = '',
    height = '',
    weight = '',
    gender = ''
}) => {
    localStorage.setItem(
        'playerInfo',
        JSON.stringify({
            _id,
            sirName,
            firstName,
            lastName,
            positionPlayed,
            age,
            DOB,
            height,
            weight,
            gender

        })
    );
};
export const getPlayerInfo = () => {
    return localStorage.getItem('playerInfo') ?
        JSON.parse(localStorage.getItem('playerInfo')) : {
            sirName: '',
            firstName: '',
            lastName: '',
            positionPlayed: '',
            age: '',
            DOB: '',
            height: '',
            weight: '',
            gender: ''
        };
};