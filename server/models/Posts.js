module.exports = (sequelize, DataTypes) => {// buat nge export variable/object/function biar bisa di access file lain
  const Posts = sequelize.define("Posts", { // Posts == our variable to represent our model
    title: {
      type: DataTypes.STRING,//datatypenya ya string
      allowNull: false,// ga bole kosong
    },
    postText: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Posts.associate = (models) => {// database association misalnya disini one to many, tiap post bisa ada banyak comment.
    Posts.hasMany(models.Comments, {
      onDelete: "cascade",// saat di delete kepalanya (postnya) comment semuanya yang nyambung ke id post di delete juga
    });
  };
  return Posts;
};


//disini contohnya nge export anonymous function (a,b)=>{} yang ada 2 arguments a and b didalemnya