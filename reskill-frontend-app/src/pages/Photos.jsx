const express = require('express');
const axios = require('axios');
const router = express.Router();

const postsUrl = 'https://jsonplaceholder.typicode.com/posts';
const photosUrl = 'https://jsonplaceholder.typicode.com/photos';

router.get('/photos', async (req, res) => {
  try {
    const [photosResponse, postsResponse] = await Promise.all([
      axios.get(photosUrl),
      axios.get(postsUrl),
    ]);

    const photos = photosResponse.data.slice(0, 12); // Get the first 12 photos
    const posts = postsResponse.data.slice(0, 3); // Get the first 3 posts

    for (let i = 0; i < 3; i++) {
      photos[i].body = posts[i].body;
    }

    res.json(photos);
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
