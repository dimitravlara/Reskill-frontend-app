import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get(`http://localhost:3000/posts/${id}`);
      setPost(response.data);
    };

    fetchPost();
  }, [id]);

  
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default SinglePost;
