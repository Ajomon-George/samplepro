const express = require('express')
const app = express()
var  mongoose = require('mongoose');
var bodyParser = require('body-parser')
mongoose.connect('mongodb+srv://ajomon:ajomon123@cluster0.3njcf.mongodb.net/sampleproject?retryWrites=true&w=majority',{
useNewUrlParser: true
  }).then(()=>{
    console.log("db connected")
});
mongoose.Promise = global.Promise;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req,res,next)=>{
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    console.log(fullUrl)
    next();
})





app.listen(4000,()=>{
    console.log("Server started @ 4000")
})