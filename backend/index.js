const express = require('express');
// const mongoose = require('mongoose');
const cors = require('cors');  //issue in node of cors
require('./db/config');
const User = require("./db/User");

const Product = require("./db/Product");   //video 18

const app = express();

app.use(express.json());  //middleware
app.use(cors());



app.post("/register",async (req,res)=>{
    let u = new User(req.body); //
    if(req.body.email){

        let result = await u.save(); //save in db
        result = result.toObject();
        delete result.password;
        res.send(result);
    }
    else{
        res.send({result:"no user found"});
    }
})

app.post("/login",async (req,res)=>{
    // res.send(req.body);
    // console.log(req.body);
    if(req.body.password && req.body.email){

        let u = await User.findOne(req.body).select("-password");
        if(u){
            res.send(u);
        }
        else{
            res.send({result:"no user found"})
        }
    }
    else{
        res.send({result:"no user found"})
    }
})

app.post('/add',async (req,res)=>{
    // res.send('hi');
    // res.send(req.body);
    let p = new Product(req.body);
    let result = await p.save();
    
    res.send(result);
})
 
app.get("/products",async (req,res)=>{
    let p = await Product.find();
    if(p.length > 0){
        res.send(p);
    }
    else{
        res.send({result:"No Products Found"})
    }
})

app.delete("/Product/:id",async (req,res)=>{
    // res.send(req.params.id);
    const result = await Product.deleteOne({_id:req.params.id})
    res.send(result);
})

// update1
app.get("/product/:id",async (req,res)=>{
    let result = await Product.findOne({_id:req.params.id})
    if(result){
        res.send(result);

    }
    else{
        res.send({result:"no record Found"})
    }
})

// update in db
app.put("/product/:id", async(req,res)=>{
    let result = await Product.updateOne(
        {_id: req.params.id},
        {
            $set: req.body
        }
    )
    res.send(result);
})
// app.get("/", (req, res) => {
//     res.send("running...");
// })
app.post("/profile",async(req,res) =>{
    let result = await Product.find({userId:req.body.userId});
    res.send(result);
})

app.listen(5000);



// mongo connection......
// const connectDB = async ()=>{
//     mongoose.connect('mongodb://localhost:27017/cwhblog');
//     const productSchema = new mongoose.Schema({});
//     const product = mongoose.model('mycomments',productSchema);
//     const data = await product.find();
//     console.warn(data);
// }
// connectDB();