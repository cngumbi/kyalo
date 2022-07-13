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
        }
    };

    return self;
};