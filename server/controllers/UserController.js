const _ = require('lodash');

class UserController {
  constructor() {
    this.database = [
      {
        id: 0,
        name: "Sunday"
      }
    ];
  }

  create(name) {
    const user = {
      id: Math.max(..._.map(this.database, 'id')) + 1,
      name,
    }
    this.database.push(user);
    return user
  }

  find(id) {
    const user = _.find(this.database, (u) => u.id == id);
    return user;
  }

  update(id, name) {
    const user = this.find(id);
    user.name = name;
    return user;
  }

  delete(id) {
    _.remove(this.database, (u) => u.id == id);
  }
}

module.exports = UserController;
