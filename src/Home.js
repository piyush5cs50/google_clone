import React from 'react'
import {Link}  from "react-router-dom"
import "./Home.css"
import AppsIcon from '@mui/icons-material/Apps'
import Avatar from '@mui/material/Avatar';
import Search from './Search'

const Home = () => {
  return (

    <div className='home'>
        

     <div className='home-header'>
        <div className='home-header-left'>
            <Link to='/about'>About</Link>
            <Link to='/store'>store</Link>
         
        
        </div>
        <div className='home-header-right'>
        <Link to='/gmail'>Gmail</Link>
        <Link to='/images'>images</Link>
        <AppsIcon/>
        <Avatar/>
        </div>
     </div>

     <div className='home-body'>
     <img src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
     alt="Google_logo"/>
     <div>
      <Search hideButton={false} />
     </div>

            
     </div>
     
    </div>
  )
}

export default Home