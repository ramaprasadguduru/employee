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
app.get('/employees', (req, res)=>{
    client.query(`Select * from employee`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

app.post('/add', (req, res)=> {
    const employee = req.body;
    let insertQuery = `insert into employee(name) 
                       values('${employee.name}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

app.put('/update/:id', (req, res)=> {
    let employee = req.body;
    let updateQuery = `update employee
                       set name = '${employee.name}'
                       where id = ${employee.id}`

    client.query(updateQuery, (err, result)=>{
        if(!err){
            res.send('Update was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

app.delete('/delete/:id', (req, res)=> {
    let insertQuery = `delete from employee where id=${req.params.id}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})




