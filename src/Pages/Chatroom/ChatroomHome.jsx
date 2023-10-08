import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { selectChatRooms } from '../../reducers/chatroom'
import {getChatRooms} from '../../actions/chatroom'
import { Link } from 'react-router-dom'
function Chatroom() {
    const dispatch = useDispatch()
    const chatrooms = useSelector(selectChatRooms)
    console.log(chatrooms)
    useEffect(()=>{
        dispatch(getChatRooms())
    },[dispatch])
  return (
    <div>
        <h1>Chatrooms</h1>
        <div>
            {chatrooms.map(chatroom => 
                <Link to='./expand' state={chatroom} >
                    <p>{chatroom.name}</p>
                </Link>
                )}
        </div>
    </div>
  )
}

export default Chatroom