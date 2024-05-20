const { Sequelize, DataTypes } = require("sequelize");
const BookModel = require("./book");
const UserModel = require("./user");
const BorrowedBookModel = require("./borrowed-book");

const sequelize = new Sequelize({
  "host":"localhost",
  "port": 5432,
  "username":"postgres",
  "password" : "muneeb@12",
  "database":"BookShelf",
  "dialect" : "postgres",
  "logging" : false
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .then(() => {
    sequelize.sync({ alter: true });
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error.message);
  });

const models = {
  Book: BookModel(sequelize, DataTypes),
  User: UserModel(sequelize, DataTypes),
  BorrowedBook: BorrowedBookModel(sequelize, DataTypes),
};

const DB = {
  ...models,
  sequelize,
};
sequelize.models=models

module.exports = DB;
