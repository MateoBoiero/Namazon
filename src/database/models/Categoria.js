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

    /* Genre.associate = function(models) {
        Genre.hasMany(models.Movie,{
            as:"movies",
            foreignKey:"genre_id"
        })
    } */
    return Categoria
};