import React from 'react'
import './Sidebar.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Sidebar = () => {
  const recentItem = (topic) => (
    <div className='sidebar__recentItem'>
        <span className='sidebar__hash'>#</span>
        <p>{topic}</p>
    </div>
  )


  return (
    <div className='sidebar'>
        <div className='sidebar__top'>
            <img src='https://singlecolorimage.com/get/33fd8f/400x100' 
            alt=''/>
            <AccountCircleIcon className='sidebar__avatar'/>
            <h2>Eunjin Lee</h2>
            <h4>dldmswls1103@gmail.com</h4>
       
            <div className='sidebar_stats'>
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,543</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">2,448</p>
                </div>
            </div>
        </div>

        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem('recatjs')}
            {recentItem('programming')}
            {recentItem('softwareengineering')}
            {recentItem('design')}
            {recentItem('developer')}
        </div>
    </div>
  )
}

export default Sidebar
