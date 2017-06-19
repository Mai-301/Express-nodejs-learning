var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BookSchema = Schema({
  title: {type: String, required: true},
  author: {type: Schema.ObjectId, ref: 'Author', required: true},
  summary: {type: String, required: true},
  isbn: {type: String, required: true},
  genre: [{type: Schema.ObjectId, ref: 'Genre'}]
});

BookSchema
.virtual('url')
.get(function () {
  return '/catalog/book/' + this._id;
});

module.exports = mongoose.model('Book', BookSchema);