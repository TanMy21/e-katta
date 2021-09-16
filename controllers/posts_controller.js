const Post = require("../models/post");
const Comment = require("../models/comment");

module.exports.createPost = function (req, res) {
  Post.create(
    {
      content: req.body.content,
      user: req.user._id,
    },
    function (err, post) {
      if (err) {
        console.log("error in creating post");
        return;
      }
      return res.redirect("back");
    }
  );
};

module.exports.destroyPost = function (req, res) {
  Post.findById(req.params.id, function (error, post) {
    // .id means converting the object id into string
    if (post.user == req.user.id) {
      post.remove();

      Comment.deleteMany({ post: req.params.id }, function (err) {
        return res.redirect("back");
      });
    } else {
      return res.redirect("back");
    }
  });
};
