import React from 'react';
import './App.css';

export default function BlogList({ posts }) {
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <div className='flex-row'>
            <span>{post.createdAt}</span>
            <div className='category-flex-row'>
              {post.categories.map((categorie,index) => (
                <span key={index} className='category-tag'>{categorie}</span>
              ))}
            </div>
          </div>
          <a className="post-title" href={`#/post/${post.id}`}>{post.title}</a> <br />
          <div className="line-clamp">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </li>
      ))}
    </ul>
  );
}

