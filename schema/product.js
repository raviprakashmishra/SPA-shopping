var category = require('category');
var mongoose = require('mongoose');

var product = {
    name:{type:String,required:true},
    pictures:[{type:String,match:/^http:\/\//i}],
    price: price,
    category:category.categorySchema,
    internal:{
        approximatePriceUSD:Number
    }
}

var price = {
    amount:{type:Number,
            required:true,
            set:setApproximateUSDPrice
    },
    currency:{type:String,
              enum:['USD', 'EUR', 'GBP'],
              required:true,
              set: function(v) {
                    this.internal.approximatePriceUSD =
                        this.price.amount / (fx()[v] || 1);
                    return v;
              }
    }
}

function setApproximateUSDPrice(v) {
    this.internal.approximatePriceUSD =
        v / (fx()[this.price.currency] || 1);
    return v;
}

var ProductSchema = mongoose.Schema('Product',product);

var currencySymbols = {
    'USD':'$',
    'EUR':'E',
    'GBP':'P'
}


ProductSchema.virtual('displayPrice')
    .get(function () {
        return currencySymbols[this.price.currency] +' '+this.price.amount;
    })
    .set('toJSON',{virtuals:true})
    .set('toObject',{virtuals:true});

modules.exports.model = mongoose.model(ProductSchema);






