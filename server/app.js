const client = require('./db.js')
const express = require('express');
const app = express();

app.listen(5005, ()=>{
    console.log("Sever is now listening at port 5005");
})

client.connect();

app.get('/users', (req, res)=>{
    client.query(`Select * from employee`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})
client.connect();
