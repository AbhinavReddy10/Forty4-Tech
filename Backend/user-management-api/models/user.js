const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  const User = sequelize.define('User', {
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true, validate: { isEmail: true } },
    phone: { type: DataTypes.STRING },
    company: { type: DataTypes.STRING },
    address: { type: DataTypes.JSON }
  }, { tableName: 'users', timestamps: true });
  return User;
};