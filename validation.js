                        /****Form Validation******/
// SELECTING ALL TEXT ELEMENTS
var username = document.forms['vform']['username'];
var email = document.forms['vform']['email'];
var message = document.forms['vform']['message'];

// SELECTING ALL ERROR DISPLAY ELEMENTS
var name_error = document.getElementById('name_error');
var email_error = document.getElementById('email_error');
var message_error = document.getElementById('message_error');

// SETTING ALL EVENT LISTENERS
username.addEventListener('blur', nameVerify, true);
email.addEventListener('blur', emailVerify, true);
message.addEventListener('blur', messageVerify, true);
// validation function
function Validate() {
  // validate username
  if (username.value == "") {
    username.style.border = "1px solid red";
    document.getElementById('username_div').style.color = "red";
    name_error.textContent = "Username is required";
    username.focus();
    return false;
  }
  // validate username
  if (username.value.length < 3) {
    username.style.border = "1px solid red";
    document.getElementById('username_div').style.color = "red";
    name_error.textContent = "Username must be at least 3 characters";
    username.focus();
    return false;
  }
  // validate email
  if (email.value == "") {
    email.style.border = "1px solid red";
    document.getElementById('email_div').style.color = "red";
    email_error.textContent = "Email is required";
    email.focus();
    return false;
  }
  // validate password
  if (message.value == "") {
    message.style.border = "1px solid red";
    document.getElementById('message_div').style.color = "red";
    message_error.textContent = "The content can not be empty";
    message.focus();
    return false;
  }
}
// event handler functions
function nameVerify() {
  if (username.value != "") {
   username.style.border = "1px solid #5e6e66";
   document.getElementById('username_div').style.color = "#5e6e66";
   name_error.innerHTML = "";
   return true;
  }
}
function emailVerify() {
  if (email.value != "") {
  	email.style.border = "1px solid #5e6e66";
  	document.getElementById('email_div').style.color = "#5e6e66";
  	email_error.innerHTML = "";
  	return true;
  }
}
function messageVerify() {
  if (message.value != "") {
  	message.style.border = "1px solid #5e6e66";
  	document.getElementById('message_div').style.color = "#5e6e66";
  	message_error.innerHTML = "";
  	return true;
  }
}