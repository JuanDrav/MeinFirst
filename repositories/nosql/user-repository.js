const UserRepository = module.exports;

const UsersModel = require('../../models/users');

UserRepository.create = async ({
  name, lastName, password, citizenNumber, gender,
}) => {
  const savedUser = new UsersModel();
  savedUser.name = name;
  savedUser.last_name = lastName;
  savedUser.password = password;
  savedUser.citizen_number = citizenNumber;
  savedUser.gender = gender;

  return new Promise((resolve, reject) => {
    try {
      savedUser.save((error, user) => {
        if (error) {
          throw new Error(`error saving in database: ${error.message}`);
        }

        resolve(user);
      });
    } catch (e) {
      reject(e);
    }
  });
};

UserRepository.readAll = () => UsersModel.find({}, (error, users) => {
  if (error) {
    throw new Error(`error retreaving in database: ${error.message}`);
  }

  return users;
});

UserRepository.read = id => UsersModel.findById(id, (error, user) => {
  if (error) {
    throw new Error(`error retreaving in database: ${error.message}`);
  }

  return user;
});

UserRepository.delete = id => UsersModel.findById(id, (error, user) => {
  if (error) {
    throw new Error(`error retreaving in database: ${error.message}`);
  }

  return user.remove((err) => {
    if (err) {
      throw new Error(`error deleting in database: ${error.message}`);
    }
  });
});

UserRepository.update = (id, userToUpdate) => (
  UsersModel.findByIdAndUpdate(id, userToUpdate, { new: true }, (error, user) => {
    if (error) {
      throw new Error(`error updating in database: ${error.message}`);
    }

    return user;
  }));
