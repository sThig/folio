//challenge #3

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get printName() {
    return this.fullName();
  }

  fullName() {
    return this.firstName + ' ' + this.lastName;
  }
}

const thisName = new User('Scott', 'Thigpen');

console.log(thisName.printName);
