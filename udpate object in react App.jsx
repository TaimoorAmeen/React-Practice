import { useState } from "react";

const App = () => {
  const [data ,setData] = useState({
    name: "Taimoor",
    address:{
      city: "FSD",
      country: "Pakistan"
    }
  })
  const handleName = (val) => {
    data.name = val;
    setData({...data});
  }

  const handleCity = (city) => {
    data.address.city = city;
    console.log(data);
    setData({...data,address:{...data.address,city}});
  }
  return(
    <>
      <h1>Updating Objects in State</h1>
      <input type="text" placeholder="update name" onChange={(event)=> handleName(event.target.value)}/>
      <input type="text" placeholder="upate city" onChange={(event)=> handleCity(event.target.value)}/>
      <h2>Name: {data.name}</h2>
      <h2>City: {data.address.city}</h2>
      <h2>Country: {data.address.country}</h2>
    </>
  )
}

export default App;
