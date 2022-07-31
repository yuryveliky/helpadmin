"use strict";

const USER_ADMIN = "Admin" || "admin";
const ADMIN_PASSWORD = "123";
let userName;
let userPassword;
userName = prompt("Введите имя пользователя:");
if (userName != USER_ADMIN) {
    alert("Bye");
} else if (userName === USER_ADMIN) {
    userPassword = prompt("Введите пароль");
    if (userPassword != ADMIN_PASSWORD) {
        alert("Пароль не верный!");
    } else if (userPassword === ADMIN_PASSWORD) {
        alert("Вы допущены в систему!");
    } 
}
