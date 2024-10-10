module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
      userId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      token: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    });

    User.associate = (models) => {
        User.hasMany(models.Notes, { foreignKey: "userId" });
      };


    return User;
  };
  