let fakeUsers = [
  { name: "Xavier", password: "october", legion: "Bronx" },
  { name: "Ruben", password: "cheers", legion: "Queens" },
  { name: "Reed", password: "cheese", legion: "Brooklyn" }
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
  addUser: (name, password, legion) => {
    let newUser = {
      name: name,
      password: password,
      legion: legion
    };
    fakeUsers.push(newUser);
    return fakeUsers;
  }
};
