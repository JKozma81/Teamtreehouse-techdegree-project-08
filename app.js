// Importing extress
const express = require('express');
// Importing body-parser
const bodyParser = require('body-parser');
// Importing path modul
const path = require('path');

// Abs path
// const path = require('path');
// path.join(__dirname, 'views');
// __dirname az akt file helye
// kicserélhető const rootDir = require('./util/path');
// path.join(rootdir, 'views')

// Creating the server
const app = express();

// Initializing body-parser
app.use(bodyParser.urlencoded({ extended: false }));

// Setting up the public folder for static files and linking it to the static route
app.use(express.static(path.join(__dirname, 'public')));

// Setting the view engine to pug templating
app.set('view engine', 'pug');

// Importing the middlewares for the appropriate routes
//const about = require('./routes/about');
// const home = require('./routes/home');
// const newBook = require('./routes/newBook');
// const detail = require('./routes/detail');

const home = require('./routes/redirect');
const books = require('./routes/books');


// Importing Error page controller
//const error = require('./controllers/errorPage')

// Setting up the routes
// app.get('/projects/:projectId', projets);
// app.get('/about', about);

app.use(home);
app.use(books);

// app.get('/books/new', newBook);
// app.get('/books/:bookId', detail);
// app.get('/books', home);
// app.get('/', (req, res, next) => res.redirect('/books'));



// Helper middleware to create error
// app.use(error.createError);

// Error handling middleware
// app.use(error.getError);

// Starting the server
app.listen(3000, () => {
	console.log('Server is started at port 3000 and listening...');
});
