import React from 'react'
import './index.css'
import load from '../../assets/load-pokeball.gif'

export const Loading = () => {
  return (
    <div className='load'>
        <img src={load} alt="load" />
    </div>
  )
}
