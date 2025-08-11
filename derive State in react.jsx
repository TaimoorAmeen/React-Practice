import { useState, useTransition } from "react";
const App = () => {
  const [users,setUsers] = useState([]);
  const [user,setUser] = useState("");

  const handleAddUsers = () => {
    setUsers([...users,user]);
  }
  /*
    State that is calculated or derived from other state values or props within your component.
    Derive state can be a variable. No need to extra state. Only variables or constants are enough.
  
  */
  //here the variable total,last and unique are a derived state
  const total = users.length;
  const last = users[users.length-1];
  const unique = [...new Set(users)].length;
  return(
    <>
      <h2>Total Users: {total}</h2>
      <h2>Last User: {last}</h2>
      <h2>Uniqure Total User: {unique}</h2>
      <input type="text" onChange={(event)=> setUser(event.target.value)} placeholder="add new user"/>
      <button onClick={handleAddUsers}>Add User</button>
      {   
        users.map((item,index)=>(
            <ul key={index}>
              <li>{item}</li>
            </ul>
        ))
      }
    </>
  )
}

export default App;
