import React from 'react'
import "./sidebar.css"
import { Link, useLocation } from 'react-router-dom'

function Sidebar() {
    const location = useLocation()
    const pathname = location.pathname.split("/")[1];
    console.log(pathname)
    
    const isActive = (path) =>{
        if (path === pathname) return 'active'
        return ''
    }
    const navs = ['Questions','chatroom','connect','profile'];
    if(!navs.includes(pathname)) return <></>
  return (
    <div className='sidebar-container'>
        <Link to='/Questions'><div className={`sidebar-item ${isActive('Questions')}`}>Feed</div></Link>
        <Link to='/chatroom'><div className={`sidebar-item ${isActive('chatroom')}`}>Chatroom</div></Link>
        <Link to='/connect'><div className={`sidebar-item ${isActive('connect')}`}>Connect</div></Link>
        <Link to='profile'><div className={`sidebar-item ${isActive('profile')}`}>Profile</div></Link>
    </div>
  )
}

export default Sidebar