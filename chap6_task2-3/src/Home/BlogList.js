import React from 'react';
import styles from './Home.module.css';

export default function BlogList({ posts }) {
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <div className={styles['flex-row']}>
            <span>{post.createdAt}</span>
            <div className={styles['category-flex-row']}>
              {post.categories.map((categorie,index) => (
                <span key={index} className={styles['category-tag']}>{categorie}</span>
              ))}
            </div>
          </div>
          <a className={styles["post-title"]} href={`#/post/${post.id}`}>{post.title}</a> <br />
          <div className={styles["line-clamp"]}>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </li>
      ))}
    </ul>
  );
}

