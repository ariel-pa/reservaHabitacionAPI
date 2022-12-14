'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      cliente.hasMany(models.reserva,{
        foreignKey: "id_cliente"
      })

      cliente.hasMany(models.factura,{
        foreignKey: "id_cliente"
      })
    }
  }
  cliente.init({
    name: DataTypes.STRING,
    apellido: DataTypes.STRING,
    dni: DataTypes.STRING,
    email: DataTypes.STRING,
    telefono: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'cliente',
  });
  return cliente;
};