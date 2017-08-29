var mongoose = require('mongoose');
var category  = require('/schema/category');



mongoose.connect('mongodb://localhost:27017/test');
var Category  = mongoose.model('Category',category.categorySchema);



module.exports = function (wagner) {
    wagner.factory('Category',function () {
        return Category;
    });

    return {
        Category:Category
    };
};