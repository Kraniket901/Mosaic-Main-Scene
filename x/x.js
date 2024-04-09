const axios = require('axios');
const fs = require('fs');

// Your array with objects and URL arrays
const yourArray = [
  {
    "url": [
      "https://gkh-images.s3.ap-south-1.amazonaws.com/hdfc/9d986e5a-a726-4494-aec7-2d9ecb13c6cd.png",
      "https://gkh-images.s3.ap-south-1.amazonaws.com/hdfc/f792bd6e-6c98-4c7f-b8d4-b1409e87aca6.png"
    ],
    "coords": [
      18,
      20
    ]
  }
]

// API endpoint to send images
const sendImageEndpoint = 'http://mosaic-api.gokapturehub.com/process-my-image';

// Number of times to fetch and send an image
const iterations = 646;

// Function to download and send images
const processImages = async () => {
  for (const obj of yourArray) {
    const imageUrl = obj.url[1];
    console.log('Processing image:', imageUrl);
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