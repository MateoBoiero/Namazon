module.exports = (sequelize, dataTypes) => {
    let alias = 'Categoria';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        categoria: {
            type: dataTypes.STRING(255),
            allowNull: false
        }
    };
    let config = {
        tableName: "categorias",
        timestamps: false
    }
    const Categoria = sequelize.define(alias, cols, config);

    categoria.associate = function(models){
        categoria.hasMany(models.usuario,{
            as:"categorias",
            foreignKey:"idCategoria"
        })
    }
    
    return Categoria
};