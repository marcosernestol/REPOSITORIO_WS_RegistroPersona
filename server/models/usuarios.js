

module.exports=(sequelize,DataTypes)=>{
    const usuarios=sequelize.define('usuarios',{
        id:{
            autoIncrement:true,
            allowNull:false,
            primaryKey:true,
            type:DataTypes.INTEGER
        },
        first_name:DataTypes.STRING,
        last_name:DataTypes.STRING,
        email:DataTypes.STRING,
        usuario:DataTypes.STRING,
        password:DataTypes.STRING,
        usuario_creacion:DataTypes.STRING,
        id_rol:DataTypes.INTEGER,
        activo:DataTypes.BOOLEAN,
        avatar:DataTypes.STRING,
        createdAt:DataTypes.DATE,
        updatedAt:DataTypes.DATE

    });

    return usuarios; 
}