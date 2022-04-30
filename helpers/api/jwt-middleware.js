import jwt from "jsonwebtoken";

const protect = (req, res) => {
  // I use jwt in wordpress with the same key that I used in .env file...
  // If "jwt.verify" cannot verify the token which passed through request so it makes an error and we couldn't get the response
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not authorized");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized");
  }
};

module.exports = { protect };
