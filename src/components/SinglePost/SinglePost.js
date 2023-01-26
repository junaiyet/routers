import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'

const SinglePost = () => {
  const post = useLoaderData()
  const {id,body,userId} =post
  const navigate = useNavigate()
  let handleNavigate=()=>{
          navigate(`/friend/${userId}`)
  }
  return (
    <div>
      <h4>ID: {id}</h4>
      <p><small>{body}</small></p>
      <button onClick={handleNavigate}>Get the author</button>
    </div>
  )
}

export default SinglePost