var mongoose = require('mongoose');

var category = {
    id:String,
    parent:{type:String,ref:'Category'},
    ancestor:[{type:String,ref:'Category'}]
};

var categorySchema = mongoose.Schema('Category',category);



module.exports.categorySchema = categorySchema;

