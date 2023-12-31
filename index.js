const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const homeRouter= require('./routers/home.router');
const productsRouter = require('./routers/products.router');
const cartsRouter = require('./routers/carts.router');
const PORT = process.env.PORT || 8080
//config Socket IO
const http =require('http');
const server = http.createServer(app);
const Database = require('./src/db/db.js');
const { Server } =require ('socket.io');
const { connection } = require('mongoose');
const io = new Server (server)

app.use(express.static(__dirname+'/public'))

// configuracion de handlebars

app.engine ('handlebars',handlebars.engine())
app.set('view engine', 'handlebars')
app.set('views',__dirname+'/views')

//middlewares

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.use('/home',homeRouter);
app.use('/api/products',productsRouter);
app.use('/api/carts',cartsRouter);

let mensajes = []
//logica de websocket
io.on('conection',(socket)=>{
    console.log('nuevo usuario conectado')
    io.sockets.emit('new-message',(data)=>{
        console.log(data)
        mensajes.push(data)
        io.sockets.emit('memssages-all',mensajes)

})

app.use(express.static(__dirname+'/public'))
//views
app.engine('handlebars',handlebars.engine())
app.set('view engine','handlebars')
app.set('views',__dirname+'/views')

io.on('connection',(socket)=>{
    console.log("conexion exitosa")
})
app.get('/socket.io', (req,res)=>{
    res.sendFile(__dirname+'/index.html')
})
app.get('socket.io',(req,res)=>{
    res.sendStatus(200);
})
app.get('/socket.io/socket.io.js',(req,res)=>{
    res.sendFile(__dirname+'/node_modules/@socket.io/client-dist/socket.io.js');
})

server.listen(8080,()=>{
    console.log('servidor en el puerto 8080!!');
    //ejecuto la base de datos
    Database.connect()
})});
