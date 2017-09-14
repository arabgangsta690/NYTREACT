// Mongoose Dependencies

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ArticleSchema = new Schema({
  title: {
    type: String,
  },
  date: {
    type: Date
    default: Date.now
  },
  url: {
    type: String,
  }
});


// Creates Model
var Article = mongoose.model('Article', ArticleSchema);

//Export the Model for Use Eleswhere
module.exports = Article;