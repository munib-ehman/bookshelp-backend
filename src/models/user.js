// User model
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password:{
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  User.associate = function (models) {
    User.hasMany(models.BorrowedBook, {
      foreignKey: "userId",
    });
  };

  return User;
};
