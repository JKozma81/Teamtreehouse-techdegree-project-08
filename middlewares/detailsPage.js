const { books } = require('./books.json');

const getBook = (req) => {
	const id = parseInt(req.params.bookId);
	const book = books.find((book) => book.id === id);
	return book;
};

// Render the core layout for the book details page
exports.getDateilsPage = (req, res, next) => {
	res.locals.book = getBook(req);
	res.locals.menu = { title: res.locals.book.title };
	res.locals.empty = false;
	res.render('details');
};
