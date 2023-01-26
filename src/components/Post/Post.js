import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import post from './Post.css'
const Post = ({post}) => {
    const {id,title} = post;
    const navigate = useNavigate()
    let handleNavigate = ()=>{
         navigate(`/post/${id}`)
    }
  return (
    <div className='post'>
        <p>{title}</p>
        {/* <p><small> {body}</small></p> */}
        <Link to={`/post/${id}`}><button>Show Details</button></Link>
        <button onClick={handleNavigate}>Show Details</button>
    </div>
  )
}

export default Post