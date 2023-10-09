import React, { useEffect, useState } from 'react'

import AsyncCreatableSelect from 'react-select/async-creatable';
import { createRoom, getTopics } from '../../api/chatroom';
import { useNavigate } from 'react-router-dom';

function CreateChatroom() {
    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [topics, setTopics] = useState([]);
    const [initialOptions, setInitialOptions] = useState([])

    const handleChange = (selectedOption) => {
      setTopics(selectedOption);
      console.log(`Option selected:`, selectedOption);
    };

    const loadOptions = (
        inputValue,
        callback
      ) => {
        const fetchtopics = async() =>{
            const topics = (await getTopics(inputValue)).data.topics;
            const formattedTopics = topics.map((topic,idx) =>({
                value: topic.name,
                label:topic.name
            }))
            callback(formattedTopics)
        }
        fetchtopics()
      };

    useEffect(()=>{
      const fetchtopics = async() =>{
          const topics = (await getTopics('')).data.topics;
          const formattedTopics = topics.map((topic,idx) =>({
              value: topic.name,
              label:topic.name
          }))
          setInitialOptions(formattedTopics)
      }
      fetchtopics()

    },[])

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const requestData = {
            name:name,
            description:description,
            topics:topics.map(topic =>(topic.value))
        }

        try{
            await createRoom(requestData);
            navigate('/chatroom')
        }catch(err){
            console.log(err);
        }
        
    }
  return (
    <div className='create-room-container'>
        <form onSubmit={handleSubmit} >
        <label htmlFor='name'>
              <h4>Room Name</h4>
              <input
                type='text'
                id='name'
                name='name'
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </label>
            <label htmlFor='descrition'>
              <h4>Description</h4>
              <input
                type='text'
                id='descrition'
                name='descrition'z
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </label>
            <label htmlFor='topics'>
              <h4>Topics</h4>
              <AsyncCreatableSelect className='select' cacheOptions isMulti loadOptions={loadOptions} options={topics} onChange={handleChange} defaultOptions={initialOptions} />
            </label>
            <button className='review-btn' type='submit'>Create Room</button>
        </form>
    </div>
  )
}

export default CreateChatroom