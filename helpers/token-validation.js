import jwt from "jsonwebtoken";

const checkToken = (token, secret, router) => {
  let isAuthorized = false;
  if (token) {
    jwt.verify(token.split(" ")[1], secret, (err, decoded) => {
      if (!err) {
        isAuthorized = true;
      }
    });
  }

  if (!isAuthorized) {
    router.push("/admin/login");
  }
  return isAuthorized;
};

module.exports = { checkToken };
