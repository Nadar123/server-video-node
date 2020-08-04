const express = require('express');
const router = express.Router();

// models
const Post = require('../models/post');
const checkAuth = require('../middleware/check');

router.post('/',checkAuth, async (req, res, next) => {
  try {
    const post = await new Post({
      title: req.body.title,
      category: req.body.category,
      img: req.body.img,
      imdb: req.body.imdb
    });
    post.save().then(createdPost => {
      res.status(201).json({
        message: 'your post added', 
      postId: createdPost._id
      });
    });
    
  } catch (error) {
    console.error(error.message);
    res.status(500).send('post server error')
  }
});

router.get('/' ,async (req, res, next) => {
  try {
    const posts = await Post.find({});
    res.status(200).json({
      message: 'Video post fetched',
      posts: posts
    });
    
  } catch (error) {
    console.error(error.message);
    res.status(500).send('get server error')
  }
});

router.get("/:id", (req, res, next) => {
  Post.findById(req.params.id).then(post => {
    if(post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({message: "post not found"});
    }
  });
});

router.delete('/:id', checkAuth, async(req,res, next) => {
  Post.deleteOne({_id:req.params.id})
  .then(result => {
    console.log(result);
    res.status(200).json({message: "Post Deleted"});
  });
  // try {
  //   const post = await Post.deleteOne({_id: req.params.id})
  //   console.log(result);
  //   res.status(200).json({message: 'Post Deleted', 
  //   result:post
  // });
    
  // } catch (error) {
    
  // }
});

module.exports = router;
