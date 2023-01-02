"use strict";
exports.__esModule = true;
function addTwo(num) {
    return num + 2;
}
addTwo(5);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("asdfdiv" + "asdfasdf");
function signUpUser(name, email, passwordIsCorrect) { }
signUpUser("sascha", "test@test.de", true);
var loginUser = function (name, email, passwordIsCorrect) { };
loginUser("Sascha", "h@history.de", false);
/* function getValue(myVal: number): boolean  {
    if (myVal > 5) {
    return true
    } return "200 OK"
} */
var getHello = function (s) {
    return "";
};
var heros = ["thor", "spiderman", "ironman"];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
