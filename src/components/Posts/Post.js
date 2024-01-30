import React from 'react'
import "./Post.css"
import PostAuthor from '../PostAuthor/PostAuthor';
import { Link } from 'react-router-dom';


export default function Post({_id, title, summary, cover, content, createdAt, author }) {

    const shortTitle = title.length > 20 ? title.substr(0, 20) + '...' : title;
    let shortDescription = content.length > 135 ? content.substr(0, 135) + '...' : content;

    if (window.innerWidth <= 450) {
        shortDescription = content.length > 30 ? content.substr(0, 30) + '...' : content;
    }

    if (window.innerWidth <= 850) {
        shortDescription = content.length > 90 ? content.substr(0, 30) + '...' : content;
    }
    return (
        <>
            <div className='post__container' >

                <div className='post__thumbnail'>
                    <Link to={`/post/${_id}`}>
                        <img src={'https://mindfulechoesserver.onrender.com/'+cover} alt='' />
                    </Link>
                </div>

                <div className='post__content'>
                    <Link to={`/post/${_id}`}>
                        <h2>{shortTitle}</h2>
                    </Link>
                    <p>{summary} </p>
                    <p>{shortDescription}</p>
                    <div className='post__footer'>
            
                        <PostAuthor createdAt={createdAt} author={author} />
                    </div>
                </div>

            </div>


        </>
    )
}
