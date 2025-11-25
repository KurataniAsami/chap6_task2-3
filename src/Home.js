import React from 'react'
import './App.css';

export default function BlogList({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <div className='flex-row'>
            <div>
              {post.createdAt}
            </div>
            <div className='category-tag'>
              {post.categories}
            </div>
          </div>

          {post.title}
          {post.content}
        </li>
      ))}
    </ul>
  )
}

