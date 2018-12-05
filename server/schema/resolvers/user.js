let fakeUsers = [
  { name: "Xavier", password: "october", city: "Bronx" },
  { name: "Ruben", password: "cheers", city: "Queens" },
  { name: "Reed", password: "cheese", city: "Brooklyn" }
];

export default {
  allUsers: () => {
    return fakeUsers;
  },
  getUser: name => {
    let findUser = fakeUsers.find(user => user.name === name);
    if (findUser) {
      return findUser;
    } else {
      return { message: "Not found" };
    }
  },
  addUser: (name, password, city) => {
    let newUser = {
      name: name,
      password: password,
      city: city
    };
    fakeUsers.push(newUser);
    return newUser;
  }
};
