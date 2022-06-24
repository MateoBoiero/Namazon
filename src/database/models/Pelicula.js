module.exports = (sequelize, dataTypes) => {
    let alias = 'Pelicula';
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
        imagen: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        descripcion: {
            type: dataTypes.STRING(255),
            allowNull: true
        },
        precio: {
            type: BigInt(10).UNSIGNED,
            allowNull: false
        },
        rating: {
            type: BigInt(10).UNSIGNED,
            allowNull: true
        },
        idGenero: dataTypes.BIGINT(10),
        idActor: dataTypes.BIGINT(10),  
    };
    let config = {
        tableName: "peliculas",
        timestamps: false
    }
    const Pelicula = sequelize.define(alias, cols, config);

    /* Genre.associate = function(models) {
        Genre.hasMany(models.Movie,{
            as:"movies",
            foreignKey:"genre_id"
        })
    } */
    return Pelicula
};