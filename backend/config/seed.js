import dotenv from "dotenv";
// data
import users from "../data/users.js";
import products from "../data/products.js";
// models
import User from "../models/User.js";
import Product from "../models/Product.js";
import Order from "../models/Order.js";
// connection
import connect from "../config/database.js";

dotenv.config();
connect();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await Product.insertMany(sampleProducts);

    console.log("Data Imported!");
    process.exit();
  } catch (e) {
    console.error(`Error: ${e}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data destroyed!");
    process.exit();
  } catch (e) {
     console.error(`Error: ${e}`);
     process.exit(1);
  }
};

// pass -d to just destroy data when running seed
if(process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}