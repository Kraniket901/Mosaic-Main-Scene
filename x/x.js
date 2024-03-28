const axios = require('axios');
const fs = require('fs');

// Your array with objects and URL arrays
const yourArray = []

// API endpoint to send images
const sendImageEndpoint = 'http://mosaic-api.gokapturehub.com/process-my-image';

// Number of times to fetch and send an image
const iterations = 2;

// Function to download and send images
const processImages = async () => {
  for (const obj of yourArray) {
    const imageUrl = obj.url[1];
    try {

      // Download the image
      const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
      const imageData = new Blob([response.data], { type: 'image/png' });
      // // Sending the downloaded image data to the target endpoint
      const formData = new FormData();
      formData.append('image', imageData, `temp_image_${Date.now()}.jpg`);

      await axios.post(sendImageEndpoint, formData);

    } catch (error) {
      console.log(error)
    }
  }
};
// run the funtion for the number of iterations
for (let i = 0; i < iterations; i++) {
  processImages();
}