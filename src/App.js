import React, {useState} from "react"; 


const App = ()  => {
//State 


let [name,setName] = useState("Mike Wang");
const changeNameHandler = ()=>{
  setName("Jaanus Zeng");
}


  return(
    <div>
        <h1>{name}</h1>
        <button onClick={changeNameHandler}> Change </button>
        <p>{name}</p>
    </div>
  );
};

export default App;