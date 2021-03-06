const Post = require('../../../models/post');

const Comment = require('../../../models/comment');


module.exports.index = async function(req,res){
    
    let posts = await Post.find({})
    .sort("-createdAt")
    .populate("user")
    .populate({
      path: "comments",
      populate: {
        path: "user",
      },
    });
    
    
    return res.json(200,{
        message: "List of Posts",
        posts: posts
    });
}


module.exports.destroyPost = async function (req, res) {

    try{
      let post = await Post.findById(req.params.id);
     
        // .id means converting the object id into string
        if (post.user == req.user.id) {
          post.remove();
    
          await Comment.deleteMany({ post: req.params.id });
         
        //   if (req.xhr){
        //     return res.status(200).json({
        //         data: {
        //             post_id: req.params.id
        //         },
        //         message: "Post deleted"
        //     });
        // }
          

        //   req.flash('success', 'Post is deleted');

          
        //   return res.redirect("back");
        return res.json(200, {
            message: "Posts and associated comments deleted."
        });


          
        } else {
            return res.json(401, {
              message: "You cannot delete this post"
            });
        }
    } catch(err) {
        // req.flash('error', err);
        // return res.redirect("back");
        return res.json(500, {
            message:"Internal Server Error"
        });
    }
 
};

