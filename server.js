const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require('cors');

//Iniciando o app
const app = express();
app.use(express.json());
app.use(cors());
// Iniciando DB - caso de erro devido a versao retirar o objeto da frase 
//{ useNewUrlParser: true } incluir { useUnifiedTopology: true }
mongoose.connect("mongodb://localhost:27017/nodeapi", 
{ useNewUrlParser: true,
  useUnifiedTopology: true }
);

requireDir("./src/models");

//const Product = mongoose.model('Product');

// Rotas 
app.use('/api', require('./src/routes'));

app.listen(process.env.PORT || 3001);