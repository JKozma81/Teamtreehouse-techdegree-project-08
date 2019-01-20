const db = require('../models');

// Render the core content for the home page
exports.getHomePageContent = (req, res, next) => {
	res.render('index');
};

// Render the core layout for the home page
exports.getHomePageLayout = (req, res, next) => {
	db.Book
		.findAll({
			attributes: [ 'id', 'title', 'author', 'genre', 'year' ]
		})
		.then((data) => {
			data.forEach((element) => {
				console.log(element);
			});

			// console.log('Database', [ ...data ]);
			res.locals.menu = { title: 'Books' };
			res.render('layout');
		});
};
