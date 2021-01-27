module.exports = (sequelize, DataTypes) => {
  const schema = {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please enter your name.',
        },
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please enter your email address.',
        },
        isEmail: {
          msg: 'Please enter a valid email address.',
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please enter a password.',
        },
        len: {
          args: [8, 50],
          msg: 'Password must be at least 8 characters in length.',
        },
      },
    },
  };

  return sequelize.define('Reader', schema);
};
