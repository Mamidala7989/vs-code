const express=require('express');
const app=express();

app.listen(1264,()=>{
console.log("server running");
});

app.get('/',(req,res)=>{
res.send("Read");});
app.post('/',(req,res)=>{
    res.send("Created");});
app.put('/',(req,res)=>{
    res.send("Updated");});
app.delete('/',(req,res)=>{
    res.send("Deleted");});