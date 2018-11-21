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
    if (!user) {
      throw new Error('User not found');
    }
    user.name = name;
    return user;
  }

  delete(id) {
    const user = this.find(id);
    if (!user) {
      throw new Error('User not found');
    }
    _.remove(this.database, (u) => u.id == id);
    return user;
  }
}

module.exports = UserController;
