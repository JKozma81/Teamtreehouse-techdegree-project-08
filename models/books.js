'use strict';
module.exports = (sequelize, DataTypes) => {
	const Books = sequelize.define(
		'Book',
		{
			title: {
				type: DataTypes.STRING,
				validate: {
					notEmpty: {
						msg: "Title can't be blank"
					}
				}
			},
			author: {
				type: DataTypes.STRING,
				validate: {
					notEmpty: {
						msg: "Author can't be blank"
					}
				}
			},
			genre: DataTypes.STRING,
			year: DataTypes.INTEGER
		},
		{}
	);
	Books.associate = function(models) {
		// associations can be defined here
	};
	return Books;
};
