import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { selectChatRooms } from '../../reducers/chatroom'
import {getChatRooms} from '../../actions/chatroom'
import { Link, useNavigate } from 'react-router-dom'
import './Chatroom.css'
import JoinChatroom from './JoinChatroom'
function Chatroom() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const chatrooms = useSelector(selectChatRooms)
    console.log(chatrooms)
    useEffect(()=>{
        dispatch(getChatRooms())
    },[dispatch])
  return (
    <div className='container'>
        <h1>Chatrooms</h1>
        <div>
            {chatrooms.map(chatroom => 
                <Link to='./expand' state={chatroom} >
                    <div className='ChatroomItem'>
                        <p>{chatroom.name}</p>
                        <div className='bottom'>
                            <p>Users : {chatroom.users.length} </p>
                            <div className='topics'>
                                {chatroom.topics.map(topic =><p>{topic.name}</p>)}
                            </div>
                        </div>
                    </div>
                </Link>
            )}
        </div>
        <h1>Recommendations</h1>
        <JoinChatroom />
        <button onClick={()=> navigate('/chatroom/create')} className='create-room-btn'>
            Create
        </button>
    </div>
  )
}

export default Chatroom