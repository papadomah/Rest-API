import React from 'react'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

function Header() {
  return (
  
    <header className="header">
      <div className="inner"> 
        <h2 className='logo'>Where in the world?</h2>
        <div className="switch_mode">
          {/* <DarkModeOutlinedIcon /> */}
          <h3>Dark Mode</h3>
        </div>
      </div>
    </header>
      
      
      
  )
}

export default Header;