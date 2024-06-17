import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PhotoDetail = () => {
  const { id } = useParams();
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.title = 'Single Post';
  }, []);

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/photos/${id}`);
        setPhoto(response.data);
      } catch (err) {
        setError(err);
      }
    };

    fetchPhoto();
  }, [id]);

  if (error) return <div>Error: {error.message}</div>;
  if (!photo) return;

  return (
    <div className='min-h-screen flex flex-col items-center justify-center w-screen'>
      <Header />
      <div className='container mx-auto p-4 max-w-4xl flex-grow'>
        <h1 className='text-2xl font-bold mb-2 text-left'>Single Post</h1>
        <div className='flex flex-col md:flex-row items-start'>
          <div className='w-full md:w-1/2 mb-4 md:mb-0 md:pr-4'>
            <p className='text-gray-600'>{photo.body}</p>
          </div>
          <div className='w-full md:w-1/2'>
            <img
              src={photo.url}
              alt={photo.title}
              className='max-w-full rounded-lg'
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PhotoDetail;
