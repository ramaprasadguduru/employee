import React, { Fragment, useEffect, useState } from 'react';
import Editemployee from './Editemployee';

const Listemployees = () => {
  const [employees, setemployees] = useState([]);

  
  const getemployees = async() => {
    try {

      const response = await fetch("http://172.31.87.152:5000/users");
      console.log(response);
      const jsonData = await response.json();

      setemployees(jsonData);
      
    } catch (err) {
      console.error(err.message);
    }
  };

  const deleteemployee = async (id) => {
    try {
      const deleteemployee = await fetch(`http://172.31.87.152:5000/users/${id}`, {
        method: "DELETE"
      });

      setemployees(employees.filter(employee => employee.employee_id !== id)) 
      console.log(deleteemployee);
    } catch (err) {
      console.errror(err.message) 
    }
  }
    
  useEffect(() => {
    getemployees();
  }, []);

    return  ( 
    <Fragment>        
      <table className="table mt-6 text-center">
        <thead>
          <tr>
            <th>employee</th>
            <th>Edit employee Information</th>
            <th>Delete employee Information</th>
          </tr>
        </thead> 
        <tbody>
          {employees.map((employee) => (
          <tr key={employee.employee_id}>
            <td>{employee.name}</td>
            <td>
              <Editemployee semployee={employee} />
            </td>
            <td>
              <button className="btn btn-light" onClick={() => deleteemployee(employee.employee_id)}>Delete employee</button> 
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
    );
};


export default Listemployees;
