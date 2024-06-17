const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

const postsUrl = 'https://jsonplaceholder.typicode.com/posts';
const photosUrl = 'https://jsonplaceholder.typicode.com/photos';

app.get('/photos', async (req, res) => {
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

app.get('/photos/:id', async (req, res) => {
  try {
    const photoId = req.params.id;
    const photoResponse = await axios.get(`${photosUrl}/${photoId}`);
    const postsResponse = await axios.get(`${postsUrl}/${photoId}`);
    const photo = photoResponse.data;
    photo.body = postsResponse.data.body;
    res.json(photo);
  } catch (error) {
    res.status(404).send('Photo not found');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
