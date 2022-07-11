import React , {useState} from 'react'

const Create = ({messages , setMessages}) => {
    let [input, setInput] = useState("");
    

    const submitHandler = (e) => {
        e.preventDefault();
        setMessages([...messages,input])
        setInput(""); 
    };
    
    const inputHandler = (e) =>{
        setInput(e.target.value);
    };

  return (
    <form action="">
        <input onChange={inputHandler} value={input} type="text" />
        <button onClick={submitHandler} >Submit</button>
    </form>
  )
}

export default Create