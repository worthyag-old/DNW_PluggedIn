// Initially disables the button, so users cannot submit nothing
document.querySelector('.validate-btn').disabled = true;

// Selects all elements with the validate class
const inputs = document.querySelectorAll('.validate');

// Regex to match validate device name, first name etc.
const regEx = {
  device_name: /^[\w\s]{5,140}$/,
  first: /^[A-z\d]{2,40}$/,
  last: /^[A-z\d]{2,40}$/,
  msg: /^[\w\.-\s?]{10,450}$/i,
  email: /^([\w\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
}

// validate function
let validate = (field, regex) => {
    console.log(regex.test(field.value));
  
    // If valid the button works, else the button doesn't work
    if(regex.test(field.value) == true) {
        field.classList.add('valid');
        field.classList.remove('invalid');
        document.querySelector('.validate-btn').disabled = false;

    } else {
        field.classList.add('invalid');
        field.classList.remove('valid');
        document.querySelector('.validate-btn').disabled = true;

    }
  }
  
  // Runs for all inputs
  inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        validate(e.target, regEx[e.target.name]);
    });
})
  