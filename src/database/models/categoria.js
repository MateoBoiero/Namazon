module.exports = (sequelize, dataTypes) => {
   
   
    let alias = 'categoria';
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
        tableName: "categoria",
        timestamps: false
    }
    const categoria = sequelize.define(alias, cols, config);
    return categoria
};