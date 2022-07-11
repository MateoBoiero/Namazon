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
            type: dataTypes.STRING(500),
            allowNull: false
        },
        descripcion: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        precio:{
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },
        rating: {
            type: dataTypes.DECIMAL(3, 1).UNSIGNED,
            allowNull: false
        }
       /*  idGenero:{
            type: dataTypes.BIGINT(10).UNSIGNED,
        },
        idActor: {type: dataTypes.BIGINT(10).UNSIGNED,
        } */
    }
    let config = {
        tableName:'peliculas',
        timestamps: false
    }
    const Pelicula = sequelize.define(alias,cols,config);
    /* Pelicula.assosiate = function(models) {
        Pelicula.belongsTo(models.Genero,{
            as:"generos",
            foreingKey:"idGenero"
        }),
        Pelicula.belongsTo(models.Actor,{
         as:"actores",
         foreignKey:"idActor"
         })
     }; */
    
    return Pelicula
};