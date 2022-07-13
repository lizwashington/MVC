const { Model, DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config");
class Comment extends Model {}

Comment.init(
  {
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
  }
);
module.exports = Comment;
