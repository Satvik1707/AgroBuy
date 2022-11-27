const bcrypt = require("bcryptjs");
const users = [
  {
    name: "Admin",
    email: "user@admin.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "User",
    email: "user@user.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Transporter",
    email: "user@transporter.com",
    password: bcrypt.hashSync("123456", 10),
    isTransport: true,
  },
  {
    name: "Breeder",
    email: "user@breeder.com",
    isBreeder: true,
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "FCI",
    email: "user@fci.com",
    isFCI: true,
    password: bcrypt.hashSync("123456", 10),
  },
];
module.exports = users;
