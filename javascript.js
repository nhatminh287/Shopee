// alert('hello');
// const sign_in = document.g("sign-in");
// sign_in.addEventListener('click', function() {
//     login.style.display = "block";
//     alert('abc');
// })
// var header = document.querySelector(".header");
// header.addEventListener('click', function() {
//     alert("hello");
// })
var sign = document.querySelector("#sign-up");
sign.addEventListener("click", function() {
    alert("You've just click on sign-up!");
    document.querySelector(".modal").style.display = "block";
})
var switch_btn_login = document.querySelector(".auth-form__switch-btn");
switch_btn_login.addEventListener("click", function() {
    document.querySelector(".auth-form__register").style.display="none";
    document.querySelector(".auth-form__login").style.display="block";
})

var switch_btn_sign_up = document.querySelector(".auth-form__switch-btn-sign_up");
switch_btn_sign_up.addEventListener("click", function() {
    document.querySelector(".auth-form__login").style.display="none";
    document.querySelector(".auth-form__register").style.display="block";
})
