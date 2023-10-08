import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom'
import { getMessages } from '../../api/chatroom';
import io from 'socket.io-client';


function Chatroom() {
    const state = useLocation().state;
    const dispatch = useDispatch()
    const [messages,setMessages] = useState([])

    const [socket, setSocket] = useState(null);
    const [messageInput, setMessageInput] = useState('');
    useEffect(() => {
      const newSocket = io('http://localhost:5000');
  
      setSocket(newSocket);
  
      return () => {
        newSocket.disconnect();
      };
    }, []);
  
    useEffect(() => {
      if (socket) {
        socket.on('new-message', (message) => {
          setMessages([...messages, message]);
        });
      }
    }, [socket, messages]);
  
    const handlesendMessage = () => {
      const sender = JSON.parse(localStorage.getItem("Profile"))?.result._id; 
      const chatroom = state._id; 
        console.log({ content: messageInput, sender, chatroom })
      if (socket) {
        socket.emit('new-message', { content: messageInput, sender, chatroom });
      }
  
      setMessageInput('');
    };
    useEffect(()=>{
        if(!socket) return;
        socket.emit('join-room',state._id)
    },[socket,state])
  
    console.log(state)


    useEffect(()=>{
        const setm = async() =>{
            const data = (await getMessages(state._id)).data
            setMessages(data.messages ? data.messages : [])
            console.log(data)
        }
        setm()
    },[dispatch,state])

  return (
    <div>
        <h1>{state.name}</h1>
        <div>Topics: {state.topics.map((topic) => (<p>{topic.name}</p>))}</div>
        <div>messages</div>
        {messages.map((message) =><div>
            {message.sender?.name} --- {message.content}
            </div>)}
        <div>
            <input type='text' placeholder='Type Message' message={messageInput} onChange={(e)=>setMessageInput(e.target.value)}></input>
            <button onClick={handlesendMessage}>Send</button>
        </div>
    </div>
  )
}

export default Chatroom