var express = require('express');
var status = require('http-status');


module.exports = function (wagner) {
    var api = express.Router();

    // router to find categories by category id
    api.get('/category/id/:id',wagner.invoke(function (Category) {
        return function (req,res) {
            Category.findOne({id:req.params.id},function (error,category) {
                if(error) return res.status(status.INTERNAL_SERVER_ERROR).json({error:error.toString()});
                if(!category){
                    return res.status(status.NOT_FOUND).
                    json({error:'Not Found'});
                }

                res.json({category:category});

            });
        };
    }));

    // router to find category by parent's category id

    api.get('/category/parent/:id',wagner.invoke(function (Category) {
        return function (req,res) {

        };
    }));
    return api;
}