const User = {
  name: "sascha",
  email: "h@h.de",
  isActive: true,
};

function createUser({ name: string, isActive: boolean }) {}

let newUser = { name: "Sascha", isActive: false, email: "h@hs.com" };
createUser(newUser);

function createCourse(): { name: string; price: number } {
  return { name: "reactjs", price: 99 };
}

export {};
