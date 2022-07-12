import React, {useState,useEffect} from "react";


const App = ()  => {
  let [name , setName ] = useState("Mike Hung");
  const changeName = () =>{
    setName("Janus Zeng")
  }

  //useEffect
  useEffect(()=>{
    console.log("useEffect function is running ");
  },
  [name]
  
  );

  return(
    <div>
        <h1>{ name }</h1>
        <button onClick={changeName}>Change Name</button>
    </div>
  );
};

export default App;