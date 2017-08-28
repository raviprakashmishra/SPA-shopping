var mongoose = require('mongoose')
var product = require('product')

var user = {
    profile:{
        username:{
            type:String,
            required:true,
            lowercase:true
        },
        picture:{
            type:String,
            required:true,
            match: /^http:\/\//i
        }
    },

    data:{
        oauth:{type:String,required:true},
        cart:[{
            product:product.productSchema,
            quantity:{
                type:Number,
                default:1
            }
        }]
    }


}

var userSchema= mongoose.Schema('User',user);



module.exports.userSchema = userSchema;

