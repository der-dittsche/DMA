function addTwo(num: number): number {
  return num + 2;
}

addTwo(5);

function getUpper(val: string) {
  return val.toUpperCase();
}

getUpper("asdfdiv" + "asdfasdf");

function signUpUser(name: string, email: string, passwordIsCorrect: boolean) {}

signUpUser("sascha", "test@test.de", true);

let loginUser = (name: string, email: string, passwordIsCorrect: boolean) => {};

loginUser("Sascha", "h@history.de", false);

/* function getValue(myVal: number): boolean  {
    if (myVal > 5) {
    return true
    } return "200 OK"
} */

const getHello = (s: string): string => {
  return "";
};

const heros = ["thor", "spiderman", "ironman"];

heros.map((hero: string) => {
  return `hero is ${hero}`;
});

function consoleError(errmsg: string): void {
  console.log(errmsg);
}
function handleError(errmsg: string): never {
  throw new Error(errmsg);
}

export {};
