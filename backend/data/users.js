import dotenv from "dotenv";
dotenv.config();

const users = [
  {
    name: "Admin User",
    email: "admin@email.com",
    password: process.env.ADMIN_PASSWORD,
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "john@email.com",
    password: process.env.USER_PASSWORD,
    isAdmin: true,
  },
  {
    name: "Jane Doe",
    email: "jane@email.com",
    password: process.env.USER_PASSWORD,
    isAdmin: true,
  },
];

export default users;
