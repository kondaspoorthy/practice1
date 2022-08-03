const isRequired = value => value==="" ? false : true;
const isBetween = (length, min, max) => {
    if(length < min || length > max){
        console.log("HI Iam False Block");
        return false;
    }
    else{
       console.log("Hi Iam out of but true");
        return true;
    }
    }
const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};
const isPasswordSecure = (password) =>{
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})");
    return re.test(password);
}
const ShowError = (input, value1, message) =>{
    input.classList.remove('success');
    input.classList.add('error')
    value1.innerHTML = message;

}
const ShowSuccess = (input,value1) =>{
    input.classList.remove('error');
    input.classList.add('success') 
    value1.innerHTML = "";

}
const checkUsername = (name1) =>{
    let valid = false;
    let name2 = name1.value.trim();
    const min =  3;
    const max = 25;
    console.log(name2.length);
    let change2 = document.querySelector(".Name-error");
    if(!isRequired(name2)){
        ShowError(name1,change2,'Name cannot be Blank');
    }
    else if(!isBetween(name2.length,min,max)){
        console.log("pheu! you entered me");
        ShowError(name1,change2,`Name should be between ${min} and ${max} characters`);
    }
    else{
        ShowSuccess(name1,change2);
        valid =true;
    }
    return valid;

};
const checkEmail = (Email5) =>{
    console.log("Hi I entered into email block");
    let valid = false;
    let change = document.querySelector(".email-error");
    let email1 = Email5.value.trim();
    if (!isRequired(email1)) {
        ShowError(Email5, change,'Email cannot be blank.');
    } else if (!isEmailValid(email1)) {
        ShowError(Email5, change,'Email is not valid.');
    } else {
        ShowSuccess(Email5,change);
        valid = true;
    }
    return valid;
};
const checkPassword = (pass1) => {

    console.log("Hi I entered into password block")
    let valid = false;
    let change1 = document.querySelector(".password-error");
    let password = pass1.value.trim();

    if (!isRequired(password)) {
        ShowError(pass1,change1, 'Password cannot be blank.');
    } else if (!isPasswordSecure(password)) {
        ShowError(pass1,change1,'Password must has at least 8 characters & include at least 1 lowercase character, 1 uppercase characters, and 1 special character in (!@#$%^&*)');
    } else {
        ShowSuccess(pass1,change1);
        valid = true;
    }

    return valid;
};
const reCheckPassword = (pass1, pass2)=>{
    console.log("Hi you entered into repassword mansion")
    let valid = false;
    let change2 = document.querySelector( ".repassword-error");
    let confirmpassword = pass2.value.trim();
    let password1 = pass1.value.trim();
    if (!isRequired(confirmpassword)) {
        ShowError(pass2, change2, 'Enter the password again');
    }
    else if(confirmpassword != password1) {
        ShowError(pass2,change2, 'Password should match');
    }
    else {
        ShowSuccess(pass2,change2);
        valid = true;
    }
    return valid;


}
function validation4(){
    console.log("Hi I entered into validation Blog");
    const emailEl = document.querySelector('#Email');
    const passwordEl = document.querySelector('#pwd');
    let isEmailValid = checkEmail(emailEl);
    let isPasswordValid = checkPassword(passwordEl);
    console.log(isEmailValid);
    console.log(isPasswordValid);
    let isFormValid =  isEmailValid &&
        isPasswordValid;
    if(!isFormValid){
        return false;
    }
    return true;
};
function validation5(){
    console.log("Hi I entered into validation Blog");
    const nameEl = document.querySelector("#Name");
    const repassword = document.querySelector("#pwd1");
    const emailEl = document.querySelector('#Email');
    const passwordEl = document.querySelector('#pwd');
    let isNameValid = checkUsername(nameEl);
    let isEmailValid = checkEmail(emailEl);
    let isPasswordValid = checkPassword(passwordEl);
    let isrepasswordValid = reCheckPassword(passwordEl,repassword);
    let isFormValid =  isEmailValid &&
        isPasswordValid && isNameValid && isrepasswordValid;
    if(!isFormValid){
        return false;
    }
    return true;
};
module.exports = {
    isRequired : isRequired,
    isBetween : isBetween,
    isEmailValid : isEmailValid,
    isPasswordSecure  : isPasswordSecure

}
