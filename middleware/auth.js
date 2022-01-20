const jwt = require("jsonwebtoken");
const ErrorResponse = require("../utils/errorResponse");

exports.protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.header.authorization.split(" ")[1];
  }
  if (!token) {
    return next(new ErrorResponse("Not authorised", 401));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id);

    if (!user) {
      return next(new ErrorResponse("No user found", 404));
    }
    req.user = user;
    next();
  } catch (error) {
    return next(new ErrorResponse("Not Authorized", 401));
  }
};
