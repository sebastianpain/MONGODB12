const mongoose = require('mongoose')


const URL = 'mongodb+srv://sebastianramirezpain:sebastianramirezpain1234@ecommerce.qmsa09r.mongodb.net/ecommerce'

module.exports = {
    connect:() =>{
        return mongoose.connect(URL,{}).then(connection =>{
console.log('conexion a DB exitosa!!')
        }).catch(err => console.log(err))
    } 
   }
