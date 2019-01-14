// Render the core content for the home page
exports.getHomePageContent = (req, res, next) => {
	res.render('index');
};

// Render the core layout for the home page
exports.getHomePageLayout = (req, res, next) => {
	res.render('layout');
};
