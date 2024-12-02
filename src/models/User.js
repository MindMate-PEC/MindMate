module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      userId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { isEmail: true },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { len: [6, 100] },
      },
      token: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      isDoctor: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    { freezeTableName: true }
  );

  User.associate = (models) => {
    User.hasMany(models.Notes, { as: "UserNotes", foreignKey: "userId" });
    User.hasMany(models.Notes, { as: "DoctorNotes", foreignKey: "doctorId" });
  };

  return User;
};
