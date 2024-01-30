import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import "./LandingPage.css"
import Post from '../../components/Posts/Post';

export default function LandingPage() {

  const [posts, setPosts] = useState([]);
  useEffect(()=>{
    fetch('https://mindfulechoesserver.onrender.com/post').then(response=>{
      response.json().then(posts=>{
        setPosts(posts)
      });
    });
  },[]);

  return (

    <main className='landing-container'>
      <Header />
      <div className='posts'>

       {
        posts.length>0 && posts.map(post=>(
          <Post {...post}/>
        ))
       }

      </div>
  
     </main>

  );
}
