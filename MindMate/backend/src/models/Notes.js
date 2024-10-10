module.exports = (sequelize, DataTypes) => {
    const Notes = sequelize.define("Notes", {
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
        type: DataTypes.STRING,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "userId",
        },
        onDelete: "CASCADE",
      },
    });
  
    Notes.associate = (models) => {
      Notes.belongsTo(models.User, { foreignKey: "userId" });
    };
  
    return Notes;
  };