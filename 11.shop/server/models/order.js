const mongoose = require('mongoose');
const ProductModel = require('./product.js');

const ProductSchema = new mongoose.Schema({

  productId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Product'
  },
  price:{
    type:Number
  },
  name:{
    type:String
  },
  images:{
    type:String
  },
  count:{
    type:Number,
    default:1
  },
  totalPrice:{
    type:Number,
    default:0
  },
 
});

const ShippingSchema = new mongoose.Schema({
    shippingId:{
        type:String
    },
    name:{
        type:String
    }, 
    province:{
        type:String
    }, 
    city:{
        type:String
    }, 
    address:{
        type:String
    }, 
    phone:{
        type:String
    },
    zip:{
        type:String
    }
})

const OrderSchema = new mongoose.Schema({
 //订单所属用户
 user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
 },
  orderNo:{//订单号
    type:String
  },
  payment:{//支付金额
    type:String
  },
  paymentType:{//支付方式
    type:String,
    enum:["10","20"],//10-支付宝 20-微信
    default:"10"
  },
  paymentTypeDesc:{
    type:String,
    enum:["支付宝","微信"],//10-支付宝 20-微信
    default:"支付宝"
  },
  paymentTime:{
    type:Date
  },
  status:{
    type:String,
    enum:["10","20","30","40","50"],//10-未支付 20-取消 30-已支付 40-已发货 50-完成
    default:"10"
  },
  statusDesc:{
    type:String,
    enum:["未支付","取消","已支付","已发货","完成"],//10-未支付 20-取消 30-已支付 40-已发货 50-完成
    default:"未支付"
  },
 //配送地址
  shipping:{
    type:ShippingSchema
  },
  //产品商品信息
  productList:{
    type:[ProductSchema],
    default:[]
  }
},{
  timestamps:true
});


const OrderModel = mongoose.model('Order', OrderSchema);

module.exports = OrderModel;