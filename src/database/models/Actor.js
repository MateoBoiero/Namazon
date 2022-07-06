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
    const Actor = sequelize.define(alias, cols, config);

    Actor.associate = function(models) {
        Actor.hasMany(models.Pelicula,{
            as:"actores",
            foreignKey:"idActor"
        })
    }
    return Actor
};