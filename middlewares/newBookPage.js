// Render the core layout for the new book page
exports.getNewBookPage = (req, res, next) => {
	res.locals.menu = { title: 'New Book' };
	res.locals.empty = false;
	res.render('new-book');
};
