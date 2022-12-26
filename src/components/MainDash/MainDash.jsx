import { CardActions } from '@mui/material'
import React from 'react'
import './MainDash.css'
import Cards from '../Cards/Cards'

const MainDash = () => {
  return (
    <div className='MainDash'>
        <h1>Home</h1>
        <Cards/>
    </div>
  )
}

export default MainDash