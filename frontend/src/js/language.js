//this main section will hold the details of the main pages
//Author: Softcraze Corporation
//Date Eighteenth June Two Thousand Twenty-Two
//this is the main softcraze languages api

const headerLinks = {
    login: "#",
    signup: "#",
    chats: "#"

};
//function __(selector) {
//    const self = {
//        element: document.querySelector(selector),
//
//    }
//}
//object literal approach is used for the design of this library
// 
function Q(selector) {
    const self = {
        //create an element to hold the selector passed to the function
        element: doucument.querySelector(selector),
        //this name-value pair return the selector passed
        html: () => self.element,
        //create an event lister
        on: (event, callback) => {
            document.addEventListener(event, callback);
        },
        //this code is used tohide the diplay of an item
        hide: () => {
            self.element.style.display = "none";
        },
        show: () => {
            self.element.style.display = "block";
        },
        //used to reove an element from an HTML document
        remove: (x) => {
            var parameter = document.getElementById(x);
            parameter.remove();
        },
    };
    return self;
};
//----------------------------------
export const isRequired = value => {
    value === '' ? false : true;
};
//sets the length of the inputs
export const isRange = (length, min, max) => {
    length < min || length > max ? false : true;
};
//form validation
//email validation
export const eValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);

};
//password validation
export const pwdValid = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};
//show the error message
export const msgError = (input, message, y) => {
    //get the li element
    const field = input.parentElement;

    //add the error class
    field.classList.remove('success');
    field.classList.add('error');

    //display the  message
    const msg = field.querySelector(y);
    error.textContent = message;
};

//show the success message
export const msgSuccess = (input, y) => {
    //get the li element
    const field = input.parentElement;

    //remove the error class
    field.classList.remove('error');
    field.classList.add('success');

    //hide the error message
    const msg = field.querySelector(y);
    msg.textContent = '';
};