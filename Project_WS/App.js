const express=require('express')
const route=require('./Routing/Routing')


const app=express()
app.use('/',route)





const server=app.listen(3000)
console.log("Listening at 3000")
module.exports=server;