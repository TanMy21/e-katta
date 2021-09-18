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

module.exports.destroyPost = async function (req, res) {

    try{
      let post = await Post.findById(req.params.id);
     
        // .id means converting the object id into string
        if (post.user == req.user.id) {
          post.remove();
    
          await Comment.deleteMany({ post: req.params.id });
            return res.redirect("back");
          
        } else {
          return res.redirect("back");
        }
    } catch(err) {
        console.log("Error", err);
        return;
    }
 
};

