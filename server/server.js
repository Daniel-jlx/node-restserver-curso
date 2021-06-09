require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');


const app = express();

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// habilitar la carpeta public
app.use(express.static(path.resolve(__dirname, '../public')));

// Configuracion global de rutas
app.use(require('./routes/index'));


const connectDb = async() => {
    try {
        mongoose.connect('mongodb+srv://new_user-1:7r7JlSI8UF5gEaDa@cluster0.qrjqz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        }, );
        console.log('base de datos conectado');
    } catch (error) {
        console.log(error);
    }
};



app.listen(process.env.PORT, () => {
    console.log('Escuchando el puerto: ', process.env.PORT);
})

connectDb();
// Contraseña: 7r7JlSI8UF5gEaDa