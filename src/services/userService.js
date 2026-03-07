const { v4: uuidv4 } = require("uuid");
const userModel = require("../models/userModel");

exports.createUser = async (data) => {
  const users = await userModel.getUsers();

  const newUser = {
    id: uuidv4(),
    name: data.name,
    email: data.email
  };

  users.push(newUser);

  await userModel.saveUsers(users);

  return newUser;
};

exports.getUsers = async () => {
  return await userModel.getUsers();
};

exports.getUserById = async (id) => {
  const users = await userModel.getUsers();
  return users.find(u => u.id === id);
};

exports.deleteUser = async (id) => {
  let users = await userModel.getUsers();

  users = users.filter(u => u.id !== id);

  await userModel.saveUsers(users);

  return { message: "User deleted" };
};