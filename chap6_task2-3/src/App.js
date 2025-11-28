import React, { useState, useEffect } from 'react';
import BlogList from './Home/BlogList';
import PostDetail from './detail/PostDetail';

export default function App({ posts }) {
  const [upDatePosts, setUpdatePosts] = useState(window.location.hash);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleHashChange = () => setUpdatePosts(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    setLoading(false);
  }, []);

  if (upDatePosts.startsWith('#/post/')) {
    const id = upDatePosts.replace('#/post/', '');
    return <PostDetail id={id} posts={posts} />;
  }

  return <BlogList posts={posts} />;
}
