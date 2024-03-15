class User {
  constructor(id, username, email, password) {
    this._id = id;
    this._username = username;
    this._email = email;
    this._password = password;
  }

  static fromMap(map) {
    let user = new User(map.username);
    user._id = map.id;
    user._username = map.username;
    user._email = map.email;
    user._password = map.password;
    return user;
  }

  toMap() {
    return {
      id: this._id,
      username: this._username,
      email: this._email,
      password: this._password,
    };
  }

  get id() {
    return this._id;
  }

  get username() {
    return this._username;
  }

  get email() {
    return this._email;
  }

  get password() {
    return this._password;
  }

  set id(id) {
    this._id = id;
  }

  set username(username) {
    this._username = username;
  }

  set email(email) {
    this._email = email;
  }

  set password(password) {
    this._password = password;
  }
}

module.exports = User;