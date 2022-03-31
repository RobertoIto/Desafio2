const express = require('express')
const app = express()
const port = 3000

var msg1 = '<h1>Full Cycle Rocks!</h1>'

// Cria a string de conexão para o banco de dados
// rhidb criado no mysql.
const config = {
    // host: 'localhost',
    host: 'rhidb',
    port: '3306',
    user: 'rito',
    password: 'rito',
    database: 'desafio2'
};
const mysql = require('mysql')
const con = mysql.createConnection(config)

con.connect(function(err) {
    if (err) throw err;
    
    // Abaixo dois exemplos de como criar as strings sql
    const sql = `INSERT INTO desafio2.pessoa(nome, data) values('InseridoViaScript', now())`
    console.log(sql)
    con.query(sql, function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
      
    con.query("SELECT concat(id, ' - ', nome) idnome FROM pessoa", function (err, result, fields) {
      if (err) throw err;
      console.log(result);

      let i = 0;
      while (i < result.length) {
        msg1 += result[i].idnome + "<br>";
        i++;
      }
      console.log(msg1);
    });
});

app.get('/', (req, res) => {
    res.send(msg1);
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})
