import React from 'react';
import Message  from './Message';

const info = ({messages , setMessages}) => {
  return (
    <div>
    {messages.map((msg)=>(
        <Message msg={msg} messages={messages} setMessages={setMessages}/>
    ))}    
    </div>
  )
}

export default info