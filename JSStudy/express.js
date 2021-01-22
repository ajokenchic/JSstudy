const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/server1.html");
});

app.listen(3000,()=>{
    console.log('standby port:3000')
})