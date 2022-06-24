module.exports = (sequelize, dataTypes) => {
    let alias = 'Actor';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        apellido:{
            type: dataTypes.STRING(255),
            allowNull: false
        }
    };
    let config = {
        tableName: "actores",
        timestamps: false
    }
    const Genero = sequelize.define(alias, cols, config);

    /* Genre.associate = function(models) {
        Genre.hasMany(models.Movie,{
            as:"movies",
            foreignKey:"genre_id"
        })
    } */
    return Actor
};