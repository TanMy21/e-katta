const User = require("../../../models/user");

const jwt = require("jsonwebtoken");

module.exports.createSessionJWT = async function (req, res) {
  try {
    let user = await User.findOne({ email: req.body.email });

    if (!user || user.password != req.body.password) {
      return res.json(422, {
        message: "Invalid username or password",
      });
    }

    return res.json(200, {
      message: "Sign in successful, your token is generated.",
      data: {
        token: jwt.sign(user.toJSON(), "eekkeekkkke", { expiresIn: "100000" }),
      },
    });
  } catch (err) {
    console.log("*********", err);
    return res.json(500, {
      message: "Internal Server Error",
    });
  }
};
