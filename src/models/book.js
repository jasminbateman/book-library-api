module.exports = (sequelize, DataTypes) => {
    const schema = {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    args: [true],
                    msg: 'Please enter a title.',
                },
                notEmpty: {
                    args: [true],
                    msg: 'The book title cannot be empty',
                },
            },
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    args: [true],
                    msg: 'Please enter an author.',
                },
                notEmpty: {
                    args: [true],
                    msg: 'The book author cannot be empty',
                },
            },
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    args: [true],
                    msg: 'Please enter a genre.',
                },
                notEmpty: {
                    args: [true],
                    msg: 'The book genre cannot be empty',
                },
            },
        },
        ISBN: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please enter the ISBN.',
                },
            },
        },
    };

    return sequelize.define('Book', schema);
}