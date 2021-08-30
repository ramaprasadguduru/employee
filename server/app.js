const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

app.post("/employees", async (req, res) => {
    try {
        
        const { name } = req.body;
    
        const newemployee = await pool.query(
          "INSERT INTO employees (name) VALUES($1)  RETURNING *",
          [name]
        );
      
        res.json(newemployee.rows[0]);
    
    } catch (err) {
      console.error(err.message);
    }
  });

  app.get("/employees", async(req, res) => {
    try {
      const getAllemployee = await pool.query("SELECT * FROM employees");
      res.json(getAllemployees.rows);
  
    } catch (err) {
      console.error(err.message)
    }
  });

  app.get("/employees/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const employee = await pool.query("SELECT * FROM employees WHERE employee_id = $1", [id]
      );
  
      res.json(employee.rows[0]);
  
    console.log(req.params)
    } catch (err) {
      console.error(err.message)
    }
    
  });

  app.put("/employees/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const editemployee = await pool.query("UPDATE employees SET name = $1 WHERE employee_id = $2",
      [name, id]);
  
      res.json("You successfully updated the employee record")
    } catch (err) {
      console.error(err.message)
    }
    });

    app.delete("/employees/:id", async (req, res) => {
        try {
          const { id } = req.params;
          const deleteemployee = await pool.query("DELETE FROM employees WHERE employee_id = $1",
          [id]);
      
          res.json("You succesfully deleted the employee record")
        } catch (err) {
          console.log(err.message);
        }
      });

app.listen(5000, function() {
    console.log("Listening for requests on Port 5000")
});
