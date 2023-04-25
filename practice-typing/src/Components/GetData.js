import React, { useState, useEffect, Fragment } from "react";
import { Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";
function Users() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    geData();
  }, []);

  function geData() {
    fetch("http://localhost:3000/Data").then((response) => {
      response.json().then((result) => {
        console.warn("result", result);
        setUser(result);
      });
    });
  }

//   function updateHandle(id){
// setNa
//   }

  function deletHandle(id) {
    fetch(`http://localhost:3000/Data/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((response) => {
        console.log("Print new Response", response);
        alert("recored deleted success...")
        geData();
      });
    });
  }
 

  return (
    <Fragment>
      <h1>Client Data</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
          {user &&
            user?.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>

                <td>
                  <button onClick={() => deletHandle(item.id)}>Delete</button>
            
                  {/* <button onClick={() => updateHandle(item.id)}>Update</button> */}
                </td>
              </tr>
            ))}
        </thead>
        <tbody></tbody>
      </Table>
    </Fragment>
  );
}

export default Users;
