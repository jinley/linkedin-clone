import React from 'react'
import './HeaderOption.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function HeaderOption( {avatar, Icon, title }) { // Header.js에서 Icon, title을 props로 받아옴
  return (
    // render received props
    <div className='headerOption'>
      {Icon && <Icon className='headerOption__icon' />} 
      {avatar && <AccountCircleIcon className='headerOption__icon' src={avatar} />}
      <h3 className='headerOption__title'>{title}</h3>
    </div>
  )
}

export default HeaderOption
