// 1: import json library
const jsonServer = require('json-server')

//2: create the server
const mediaPlayerServer = jsonServer.create()
//middleware to parse the json formate
const middleware = jsonServer.defaults()

//setting a path to store data
const router = jsonServer.router('db.json')

mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)

// 3:  port for the server 
const PORT = 4000 || process.env.PORT

// 4: To listen to the request from the frontend for resolving that request
mediaPlayerServer.listen(PORT,()=>{
    console.log(`server running successfully at port number ${PORT}`);
    
})