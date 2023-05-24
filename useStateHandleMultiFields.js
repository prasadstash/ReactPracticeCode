import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



const App = () => {

  const [details, setDetails] =useState({
    //to handle multiple form value we need to 
    //create use state in such way
    name : "",
    email : "",
    password : "",
    address : "",
  });

  const handleChange = (e) =>
  {
    const {name, value} = e.target
    //const name = e.target.name;
    //const value = e.target.value;
    //console.log(name, value);
    setDetails((prev) => {
      return { ...prev, [name] : value}
    });
  }

  console.log(details);

  const handleSubmit = (e) => 
  {
    e.preventDefault();
    console.log(details);
    //call API in this function and send all the data to the server.
  }
  return (
    <form onSubmit={handleSubmit}>
      <h3>Name: </h3><input type='text' name="name" onChange={handleChange}/>
      <h3>Email: </h3><input type='text' name="email" onChange={handleChange}/>
      <h3>Password: </h3><input type='text' name="password" onChange={handleChange}/>
      <h3>Address:</h3> <textarea name="address" onChange={handleChange}></textarea>
      <button type='submit'>submit form</button>
    </form>
  );
}

export default App;
