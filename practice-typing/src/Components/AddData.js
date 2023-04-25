import React, { useEffect, useState } from "react";

const AddData = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("API Data", name, email, phone);
    let data = { name, email, phone };
    fetch("http://localhost:3000/Data", {
      method: "POST",
      headers: {
        'Accept': "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      result.json().then((response) => {
        console.log("Print new Response", response);
      });
    });
  }

  return (
    <>
      <div>
        <h1>Client Form</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            name="name"
            placeholder="client name"
          />
          <br />
          <br />
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            name="email"
            placeholder="client email"
          />
          <br />
          <br />
          <input
            type="text"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            name="phone"
            placeholder="client phone"
          />
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default AddData;
