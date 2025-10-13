import React from 'react'
import useInput from './UseInputHook';

function Input() {
    const [name, handleChange] = useInput("");
    const [email, handleChangeMail] = useInput("");
  return (
    <>
      <input type="text" placeholder="Enter your name" value={name} onChange={handleChange}/>
      <input type="email" placeholder="Enter your email" value={email} onChange={handleChangeMail} />
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </>
  )
}

export default Input