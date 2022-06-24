module.exports = (sequelize, dataTypes) => {
   
   
    let alias = 'categorias';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        categoria: {
            type: dataTypes.STRING(255),
            allowNull: true
        }
    };
    let config = {
        tableName: "categorias",
        timestamps: false
    }
    const categorias = sequelize.define(alias, cols, config);
    return categorias
};