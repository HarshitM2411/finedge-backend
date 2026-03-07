const fs = require("fs").promises;
const path = require("path");

const file = path.join(__dirname, "../data/users.json");

exports.getUsers = async () => {
  const data = await fs.readFile(file);
  return JSON.parse(data);
};

exports.saveUsers = async (users) => {
  await fs.writeFile(file, JSON.stringify(users, null, 2));
};