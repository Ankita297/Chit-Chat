const jwt = require("jsonwebtoken");

const genrateToken = (id) => {
 return jwt.sign(
    {
      id,
    },
    process.env.SECRET,
    { expiresIn: "30d" }
  );
};

module.exports = genrateToken;
