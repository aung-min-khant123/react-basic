import React,{useState} from "react";

function FormWithUseState() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const { firstName, lastName, email } = form;
  return (
    <>
      <form>
        <label>First Name</label>
        <input
          type="text"
          placeholder="Enter Your first name"
          onChange={(e) => setForm({ ...form, firstName: e.target.value })}
        ></input>
        <label>Last Name</label>
        <input
          type="text"
          placeholder="Enter Your last name"
          onChange={(e) => setForm({ ...form, lastName: e.target.value })}
        ></input>
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter Your email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        ></input>
      </form>
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{email}</p>
    </>
  );
}

export default FormWithUseState;
