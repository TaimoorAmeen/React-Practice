import { useState } from "react";

const App = () => {
  const [data, setData] = useState([
    'Taimoor','Dawood','Ahmad','tony'
  ]);

  const [dataDetails,setDataDetails] = useState([
    {name: "Taimoor",age: 16},
    {name: "Ahmad",age: 10},
    {name: "Dawood",age: 25}
  ])
  const handleUser = (name) =>{
    data[data.length-1] = name;
    setData([...data]);
  }

  const handleAge = (age) =>{
    dataDetails[dataDetails.length-1].age = age;
    setDataDetails([...dataDetails]);
  }
  return(
    <>
        <h1>Updating Array in State</h1>
        <input type="text" placeholder="enter last user name"
          onChange={(event)=> handleUser(event.target.value)}
        />
        {
          data.map((item,index)=>(
            <h3 key={index}>{item}</h3>
          ))
        }
        <hr />
        <input type="text" placeholder="enter last user age"
          onChange={(event)=> handleAge(event.target.value)}
        />
        {
          dataDetails.map((item,index)=> (
            <h4 key={index}>{item.name}, {item.age}</h4>
          ))
        }
    </>
  )
}

export default App;
