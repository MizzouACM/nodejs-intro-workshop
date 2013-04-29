// Fake in memory database that will allow creating and retrieving posts

var posts = [];

module.exports = {

  addPost: function(title, content) {
    posts.push({
      id: posts.length,
      title: title,
      content: content
    });
  },

  getPosts: function() {
    return posts;
  },

  getPost: function(id) {
    return posts[id];
  }

};