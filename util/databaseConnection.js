const Sequelize = require('sequelize');

const sequelize = new Sequelize('../db/library.db', global, null, {
	dialect: 'sqlite',
	operatorsAliases: false
});

module.exports = sequelize;
