// Middleware that checks that a user has credits and continues to next middleware if so
module.exports = (req, res, next) => {
	if (req.user.credits < 1) {
		return res.status(403).send({ error: 'Not enough credits' });
	}

	next();
};
