module.exports = {
  getPosts(req, res) {
	res.status(200).send(req.blog.posts)
  },
  addPost(req, res) {
	let newPost = req.body
    let postId = req.blog.posts.length
    req.blog.posts.push(newPost)
    res.status(201).send({postId: postId})
  },
  updatePost(req, res) {
	req.blog.posts[req.params.postId] = Object.assign(req.blog.posts[req.params.postId], req.body)
    res.status(200).send(req.blog.posts[req.params.postId])
  },
  removePost(req, res) {
	req.blog.posts.splice(req.params.postId, 1)
    res.status(204).send()
  }
}
