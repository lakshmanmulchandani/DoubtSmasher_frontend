import React from 'react'
import "./Profile.css"

function Profile() {
    const profile = JSON.parse(localStorage.getItem('Profile'))?.result
    if(!profile) return <></>
  return (
    <div className='profile'>
        <div className='avatar'>{profile.name[0]}</div>
        <b>@{profile.name}</b>
        <h1>{profile.email}</h1>   
        <div className='joined'>{(new Date(profile.joinedOn)).toString()}</div>     
    </div>
  )
}

export default Profile