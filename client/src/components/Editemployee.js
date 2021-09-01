import React, { Fragment , useState } from 'react';

const Editemployee = ({employee}) => {
  console.log(employee);
  const [name, setName] = useState(employee.name);
const [id, setId] = useState(employee.id);

  const changeName = async e => {
    e.preventDefault();
    try {
      const body = { name };
      const response = await fetch(`http://3.82.146.237:5000/update/${employee.id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      }
      );

      window.location = "/";
      console.log(response);

    } catch (err) {
      console.error(err.message)
    }
  };


  return (
    <Fragment>
      <button
        type="button"
        className = "btn btn info"
        data-toggle="modal"
        data-target={`#id${employee.employee_id}`}>
        Edit employee
        </button>
      <div className="modal" id={`id${employee.id}`} onClick={() => setName(employee.name)}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit employee Information</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setName(employee.name)}>&times;</button>
            </div>
            <div className="modal-body">
              <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-info" data-dismiss="modal">Exit</button>
              <button
                type="button" className="btn btn-light" data-dismiss="modal"
                onClick = {e => changeName(e)}>
                  Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Editemployee;
