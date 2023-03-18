// create a function parseRequesturl to handle the urls
//Author: Softcraze Corporation
//Date Eighteenth June Two Thousand Twenty-Two
import { getCartItems, getUserInfo } from "./localStorage";

export const parseRequestUrl = () => {
    const url = document.location.hash.toLowerCase();
    const request = url.split("/");
    return {
        resource: request[1],
        id: request[2],
        action: request[3],
    };
};
export const rerender = async(component) => {
    document.getElementById('main-container').innerHTML = await component.render();
    await component.after_render();
};
export const showLoading = () => {
    document.getElementById('loading-overlay').classList.add('active');
};
export const hideLoading = () => {
    document.getElementById('loading-overlay').classList.remove('active');
};
//--------------------------------------------------------------------------
//validation section
//--------------------------------------------------------------------------
export const showMessage = (message, callback) => {
    // Get the message overlay element
    const messageOverlay = document.getElementById('message-overlay');
  
    // Create the message content
    const messageContent = `
      <div>
        <div id="message-content">${message}</div>
        <button id="close-button">OK</button>
        Dashboard
      </div>
    `;
  
    // Set the message overlay content and show it
    messageOverlay.innerHTML = messageContent;
    messageOverlay.classList.add('active');
  
    // Add a click listener to the OK button
    const okButton = document.getElementById('close-button');
    okButton.addEventListener('click', () => {
      // Hide the message overlay
      messageOverlay.classList.remove('active');
      
      // Call the callback function if provided
      if (callback) {
        callback();
      }
    });
};
  
//------------------------------------------------------------------------------
export const redirectUser = () => {
    const redirectTo = getCartItems().length !== 0 ? '/shipping' : getUserInfo().name ? '/dashboard' : '/';
    document.location.hash = redirectTo;
};