// take elements by their class name in order to validate the input from user
const fname = document.getElementsByClassName('fname')
const lname = document.getElementsByClassName('lname')
const phone = document.getElementsByClassName('phone')
const doc = document.getElementsByClassName('doc')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
// to listen users input prevent from submitting if there is any errors
form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    validateInputs();
});
// check user's input 
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.inner
}

const validateInputs = () => {
    const fnameValue = fname.fnameValue.trim();
    const lnameValue = lname.lnameValue.trim();
    const phoneValue = phone.phoneValue.trim();
    const docValue = doc.docValue.trim();
    // catch errors and display them so that user can correct them
    if (fnameValue = "") {
        alert("Please enter your name")
    }
    if (lname = "") {
        alert("Please enter your name")
    }
    if (phoneValue = "") {
        alert("Please enter your name")
    }
    if (docValue = "") {
        alert("Please enter your name")
    }
    
    
    
}