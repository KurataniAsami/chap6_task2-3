import React, { useEffect, useState } from 'react';

export default function PostDetail({ id, posts }) {
  const post = posts.find(post => post.id.toString() === id);
  
  const [loading, setLoading] = useState(true);
    useEffect(() => {
      setLoading(false);
    },[]);
  
  return (
    <>
      {loading ? (
        <h1>ロード中</h1>
      ) : (
        <>
          <h1></h1>
        </>
      )}
      <div className='post-image'>
        post-image
      </div>
      <div className='flex-row'>
        <p>{post.createdAt}</p>
        <div className='category-flex-row'>
          {post.categories.map((categorie,index) => (
            <span key={index} className='category-tag'>{categorie}</span>
          ))}
        </div>
      </div>
      <h2>{post.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </>
  );
}
