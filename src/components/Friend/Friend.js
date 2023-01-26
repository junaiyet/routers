import React from 'react'
import { Link } from 'react-router-dom'
import friend from '../Friend/Friend.css'
const Friend = ({friend}) => {
    const {name,username,email,id} =friend
  return (
    <div className='friend' >
        <h6>{name}</h6>
        <p>{email}</p>
        <p><small>{username} <Link to={`/friend/${id}`}>{username} </Link> </small></p>
    </div>
  )
}

export default Friend