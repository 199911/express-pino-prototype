const _ = require('lodash');

class UserController {
  constructor({ logger }) {
    this.database = [
      {
        id: 0,
        name: "Sunday"
      }
    ];
    this.logger = logger;
  }

  create(name) {
    const user = {
      id: Math.max(..._.map(this.database, 'id')) + 1,
      name,
    }
    this.database.push(user);
    this.logger.trace({userId: user.id}, "Created user %d", user.id);
    return user
  }

  find(id) {
    this.logger.trace({userId: id}, "Find user %d", id);
    const user = _.find(this.database, (u) => u.id == id);
    return user;
  }

  update(id, name) {
    const user = this.find(id);
    if (!user) {
      throw new Error('User not found');
    }
    user.name = name;
    this.logger.trace({userId: id}, "Updated user %d", user.id);
    return user;
  }

  delete(id) {
    const user = this.find(id);
    if (!user) {
      throw new Error('User not found');
    }
    _.remove(this.database, (u) => u.id == id);
    this.logger.trace({userId: id}, "Deleted user %d", user.id);
    return user;
  }
}

module.exports = UserController;
