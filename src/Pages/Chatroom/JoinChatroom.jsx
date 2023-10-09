import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getRecommendations, joinRoom } from '../../api/chatroom';
import { useDispatch } from 'react-redux';
import { getChatRooms } from '../../actions/chatroom';

function JoinChatroom() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [recommendations,setRecommendations] = useState([])
    console.log(recommendations)


    const handleClick = (chatroomid) => async() =>{
        try{
            await joinRoom(chatroomid);
            dispatch(getChatRooms())
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        const fetchcontent = async () =>{
            const data = (await getRecommendations()).data.chatrooms;
            setRecommendations(data)
        }
        fetchcontent()
    },[])

  return (
    <div className=''>
        {recommendations.map((chatroom,idx) => 
                    <div key={`suggest${idx}`} onClick={handleClick(chatroom._id)} className='ChatroomItem'>
                        <p>{chatroom.name}</p>
                        <div className='bottom'>
                            <p>Users : {chatroom.users.length} </p>
                            <div className='topics'>
                                {chatroom.topics.map(topic =><p>{topic.name}</p>)}
                            </div>
                        </div>
                    </div>
            )}
    </div>
  )
}

export default JoinChatroom