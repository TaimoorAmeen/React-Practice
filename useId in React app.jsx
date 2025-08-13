import { useId } from "react";

function UserForm(){
  const user = useId();
  return(
    <div>
        <form action="">
          <label htmlFor={user+"name"}>Enter User Name</label>
          <input id={user+"name"} type="text" placeholder="enter name"/>
          <br /><br />
          <label htmlFor={user+"password"}>Enter User Password</label>
          <input id={user+"password"} type="password" placeholder="enter password"/>
          <br /><br />
          <label htmlFor={user+"skills"}>Enter User Skills</label>
          <input id={user+"skills"} type="text" placeholder="enter skills"/>

          <br /><br />
          <input id={user+"terms"} type="checkbox"/>
          <label htmlFor={user+"terms"}>Terms & Conditions</label>
        </form>
    </div>
  )
}
const App = () => {
  return(
    <div>
        <UserForm/>
        <hr />
        <UserForm/>
        
    </div>
  )
}

export default App;
