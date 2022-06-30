module.exports = (sequelize, dataTypes) => {
    let alias = 'Genero';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        genero: {
            type: dataTypes.STRING(255),
            allowNull: true
        }
    };
    let config = {
        tableName: "generos",
        timestamps: false
    }
    const Genero = sequelize.define(alias, cols, config);

    Genero.associate = function(models) {
        Genero.hasMany(models.Pelicula,{
            as:"generos",
            foreingKey:"idGenero"
        })
    }
    return Genero
};