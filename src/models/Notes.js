module.exports = (sequelize, DataTypes) => {
  const Notes = sequelize.define(
    "Notes",
    {
      noteId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      heading: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "User", key: "userId" },
        onDelete: "CASCADE",
      },
      doctorId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: { model: "User", key: "userId" },
        onDelete: "CASCADE",
      },
    },
    { freezeTableName: true }
  );

  Notes.associate = (models) => {
    Notes.belongsTo(models.User, { as: "User", foreignKey: "userId" });
    Notes.belongsTo(models.User, { as: "Doctor", foreignKey: "doctorId" });
  };

  return Notes;
};
