import React from 'react'
import { Link } from 'react-router-dom'
import "./PostAuthor.css";
import {formatISO9075} from "date-fns";
export default function PostAuthor({createdAt, author}) {
  return (
    <Link to={``} className='post__author'>
        <div className='post__author-avatar'>
            {/* <img src="https://designyourownblog.com/wp-content/uploads/2019/04/marianne-manthey-2015.jpg" alt=''/> */}
            <h5>By: {author.username}</h5>

        </div>
        <div className='post__author-details'>
            <small>{formatISO9075(new Date(createdAt))}</small>
        </div>
    </Link>
  )
}
