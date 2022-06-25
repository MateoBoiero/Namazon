module.exports = (sequelize, dataTypes) => {
    let alias = 'usuario';
    let cols = {
       id:{ 
        type: dataTypes.BIGINT(10).UNSIGNED,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
       nombre: {
        allowNull: false,
        type: dataTypes.STRING(20)
       },
       apellido: {
        allowNull: false,
        type: dataTypes.STRING(20)
       },
       contraseña: {
        allowNull: false,
        type: dataTypes.STRING(20)
       },
       email: {
        allowNull: false,
        type: dataTypes.STRING(20)
       },
       imagenUsuario:{
        allowNull: false,
        type: dataTypes.STRING(255)
       },
       idCategoria: {
        type: dataTypes.BIGINT(10).UNSIGNED,
        primaryKey: true,
        allowNull: false,
        autoIncrement: false
       }
    };
    let config = {
        tableName: "usuarios",
        timestamps: false
    }
    const usuario = sequelize.define(alias, cols, config);
    return usuario
};