import React, { useState, useEffect } from 'react';

const Posts = () => {
   const [posts, setPosts] = useState([]);
   useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setPosts(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);

return (
    <div className="container-fluid">
    {posts.map((post) => {
       return (
         <div className='row'>
            <div className='col-4'>
               <div className="card" key={post.id}>
                  <div className="card-img-top"><img src={post.thumbnailUrl} /></div>
                  <div className="card-body">{post.title}</div>
                  <div className="card-footer"><a href={post.url}>Vai</a></div>
               </div>
            </div>
         </div>
       );
    })}
 </div>
);
};

export default Posts