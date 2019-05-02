/*
const mongoose = require('mongoose');

module.exports = function(uri) {
   mongoose.connect(uri, { useNewUrlParser: true });

   mongoose.connection.on('connected', function() {
      console.log('Mongoose! conectado a ' + uri);
   });

   mongoose.connection.on('disconnected', function() {
      console.log('Mongoose! desconectado de ' + uri);
   });

   mongoose.connection.on('error', function(e) {
      console.log('Mongoose! ERRO: ' + e);
   });

   process.on('SIGINT', function () {
      mongoose.connection.close(function () {
         console.log('Mongoose! Desconectado pelo término da aplicação');
         process.exit(0);
      });
   });   
}

*/

const mysql = require('mysql');

const client = {}

client.connect = () =>{
   let database = 'dados191n'
   var mysqlConnection = mysql.createConnection({
      host:'localhost',
      user:'root',
      password:'senha123',
      database: database
   });

   mysqlConnection.connect((error) => {
      if(!error) console.log('Conectado com sucesso a dados191n');
      else console.log(JSON.stringify(error, undefined, 2));
   });
   mysqlConnection.query('USE ' + database);
   return mysqlConnection;
}

module.exports = client;

