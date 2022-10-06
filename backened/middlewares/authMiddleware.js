const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const User = require("../models/userModal");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      console.log(token);
      const decodetoken = jwt.verify(token, process.env.SECRET);
      req.user = await User.findById(decodetoken.id).select("-password");
      console.log(req.user);
      next();
    } catch (err) {
      res.status(401);
      throw new Error("Invalid token ,Not authorized");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Invalid token ,Not authorized");
  }
});

module.exports = { protect };
