import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getRecommendations, joinRoom } from '../../api/chatroom';

function JoinChatroom() {
    const navigate = useNavigate()
    const [recommendations,setRecommendations] = useState([])
    console.log(recommendations)


    const handleClick = (chatroomid) => async() =>{
        try{
            await joinRoom(chatroomid);
            navigate('/chatroom')
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
    <div className='auth-container-2'>
        {recommendations.map((recommendation)=>
        <div onClick={handleClick(recommendation._id)}>
            <b>{recommendation.name}</b>
            <p>topics</p>{recommendation.topics.map((topic)=><p>{topic.name}</p>)}
            Users: {recommendation.users.length}
        </div>
        )}
    </div>
  )
}

export default JoinChatroom