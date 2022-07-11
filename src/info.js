import React from 'react';
import Message  from './Message';

const info = ({messages , setMessages}) => {
  return (
    <div>
    {messages.map((msg)=>(
        <Message msg={msg}/>
    ))}    
    </div>
  )
}

export default info