const client = require('./db.js')
const express = require('express');
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.listen(5000, ()=>{
    console.log("Sever is now listening at port 5000");
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



