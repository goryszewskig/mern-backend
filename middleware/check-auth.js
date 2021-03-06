const jwt = require('jsonwebtoken');
const HttpError = require('../models/http-error');

module.exports = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next();
  }
  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      throw new Error('Authentication failed in try check-auth!');
    }
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_TOKEN);

    req.userData = { userId: decodedToken.userId };
    next();
  } catch (err) {
    const error = new HttpError(
      `Authentication failed in catch check-auth ${err} `,
      401
    );
    return next(error);
  }
};
