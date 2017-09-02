// Middleware that checks that a user is logged in and continues to next middleware if so
module.exports = (req, res, next) => {
	if (!user) {
		return res.status(401).send({ error: 'There must be a user logged in' });
	}

	next();
};
