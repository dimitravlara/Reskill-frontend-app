import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Homepage';
  }, []);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get('http://localhost:3000/photos');
        setPhotos(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  const handlePhotoClick = (photo) => {
    if (photo.id > 3) {
      const newTab = window.open(`/photo/${photo.id}`, '_blank');
      newTab.onload = () => {
        newTab.photo = photo;
      };
    }
  };


  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className='min-h-screen flex flex-col items-center justify-center w-screen'>
      <Header />
      <div className='container mx-auto p-4 flex-grow'>
        <h1 className='text-2xl font-bold mb-4 text-left'>Posts List</h1>
        <div className='flex flex-col items-center'>
          <div className='mb-8 w-full flex flex-col items-center'>
            <div className='flex flex-col items-center mb-4 w-full text-center'>
              <img
                src={photos[0]?.url}
                alt={photos[0]?.title}
                className='mb-2 w-full max-w-2xl'
              />
              <div className='w-full max-w-2xl'>
                <h2 className='text-xl font-bold text-left'>
                  {photos[0]?.title}
                </h2>
                <p className='text-gray-600 text-left'>{photos[0]?.body}</p>
              </div>
            </div>
            <div className='flex flex-row justify-between gap-4 w-full max-w-2xl'>
              {photos.slice(1, 3).map((photo) => (
                <div
                  key={photo.id}
                  className='flex flex-col items-center mb-4 w-1/2 text-left'
                >
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className='mb-2 w-full'
                  />
                  <div className='w-full'>
                    <h2 className='text-xl font-bold text-left'>
                      {photo.title}
                    </h2>
                    <p className='text-gray-600 text-left'>{photo.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <h2 className='text-xl font-bold mb-4 text-left w-full max-w-2xl'>
            Related articles or posts
          </h2>
          <ul className='grid grid-cols-3 gap-4 w-full max-w-2xl'>
            {photos.slice(3).map((photo) => (
              <li
                key={photo.id}
                className='flex flex-col items-center cursor-pointer'
                onClick={() => handlePhotoClick(photo)}
              >
                <img
                  src={photo.thumbnailUrl}
                  alt={photo.title}
                  className='mb-2 w-full'
                />
                <div className='w-full text-center'>
                  <p className='font-bold text-left'>{photo.title}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
