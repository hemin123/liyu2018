// getting-started.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');


var db = mongoose.connection;
db.on('error', (err)=>{
  throw err;
});
db.once('open', ()=> {
  console.log("connected");
  // we're connected!
  var kittySchema = new mongoose.Schema({
    name: String,
    age:Number,
    sex:String
  });

  var Kitten = mongoose.model('Kitten', kittySchema);

  var silence = new Kitten({ name: 'Silence3',age:28,sex:"boy" });
  console.log(silence); // 'Silence'
  //法一
/*  silence.save((err,doc)=>{
    if(!err){
      console.log(doc.toString());
    }else{
      console.log(err)
    }
  })*/
//法二 
  /*let promise =silence.save();
   promise
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
        console.log(err);
    });*/
    //最简便的方法存入数据库
/*  new Kitten({ name: 'Silence',age:18,sex:"boy" })
  .save()
  .then((doc)=>{
    console.log(doc);

  })*/


  /*kittySchema.insertMany({},(err,data)=>{
    if(!err){

    }

    promise
    .then((data)=>{

    })
    .catch((err)=>{

    })
  })*/




  /*Kitten.find({age:{$gt:50}},{name:1,_id:0},(err,docs)=>{
    if (!err) {
      console.log(docs);
    }else{
      console.log(err);
    }
  }) 
   Kitten.find({age:{$gt:50}},'name -_id',(err,docs)=>{
     if (!err) {
      console.log(docs);
    }else{
      console.log(err);
    }
  })
  Kitten.find({age:{$gt:50}},'name',{ sort:{age:1}},(err,docs)=>{
    if (!err) {
      console.log(docs);
    }else{
      console.log(err);
    }
  })
   Kitten.find({age:{$lt:50}},'name -_id',{skip:1,limit:1 },(err,docs)=>{
    if (!err) {
      console.log(docs);
    }else{
      console.log(err);
    }
  })  */


 /* 
  Kitten.findById('5b626b34b1a83f20d4a1ae9c',(err,data)=>{
    if(!err){
      console.log(data);
    }else{
      console.log(err);
    }

  })
  //获取去重后的值
    //返回所有的name，去除重复 
  Kitten.distinct('name',{},(err,data)=>{
  if (!err) {
    console.log(data);
  }else{
    console.log(err);
  }
  })


  */


//更新
//更新一个
/*Kitten.update({age:{$lt:20}},{$set:{name:"hh"}},(err,result)=>{
  if (!err) {
    console.log(result);
  }else{
    console.log(err);
  }
})*/
//更新全部
/*Kitten.update({age:{$lt:20}},{$set:{name:"hh"}},{multi:true},(err,result)=>{
  if (!err) {
    console.log(result);
  }else{
    console.log(err);
  }
})*/
/*Kitten.updateMany({age:{$lt:20}},{$set:{name:"silen"}},(err,result)=>{
  if (!err) {
    console.log(result);
  }else{
    console.log(err);
  }
})*/


//删除
/*  Kitten.remove({_id:'5b626b34b1a83f20d4a1ae9c'},(err,result)=>{
    if(!err){
      console.log(result);
    }else{
      console.log(err);
    }

  });*/

/*
deleteMany({age:9},(err,result)=>{
  if(!err){
  console.log(result);
  }else{
  console.log(err);
  }
  
})

remove({age:9}).setOptions

});
*/



})

// 模块化不懂