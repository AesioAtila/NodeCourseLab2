module.exports = {
  getComments(req, res) {
	  let postId=req.params.postId
    res.status(200).send(req.blog.posts[postId].comments)
  }, 
  addComment(req, res) {
    let newComment = req.body
    let comments = req.blog.posts[req.params.postId].comments
    let commentId = comments.length
    comments.push(newComment)
    res.status(201).send({commentId: commentId})
  },
  updateComment(req, res) {
    req.blog.posts[req.params.postId].comments[req.params.commentId] = Object.assign(req.blog.posts[req.params.postId].comments[req.params.commentId], req.body)
    res.status(200).send(req.blog.posts[req.params.postId].comments[req.params.commentId])  
  },
  removeComment(req, res) {
    req.blog.posts[req.params.postId].comments.splice(req.params.commentId, 1)
    res.status(204).send()
  }  
}
