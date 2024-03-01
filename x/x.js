const axios = require('axios');
const fs = require('fs');

// Your array with objects and URL arrays
const yourArray = [
  {
    "url": [
      "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/c722d598-853f-4636-8534-a6fefeb87f57.png",
      "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/6e637648-d495-4964-9f80-1780d88d13ff.png"
    ],
    "coords": [
      7,
      11
    ]
  },
  {
    "url": [
      "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/6fa3b364-ddd0-4a1e-bd01-85ec9f2e0342.png",
      "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/bd48d049-0e36-4bfe-91f5-8a40e74bd603.png"
    ],
    "coords": [
      9,
      4
    ]
  },
  {
    "url": [
      "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/fba014bd-379a-4cab-be04-5fd06d845f32.png",
      "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/8761a98e-385b-4191-82b1-16437120083e.png"
    ],
    "coords": [
      3,
      1
    ]
  },
  {
    "url": [
      "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/199bcca7-8c74-402c-8cca-1d402039c606.png",
      "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/4af44144-e8a2-4e6e-a81f-bead36e1d2e9.png"
    ],
    "coords": [
      2,
      12
    ]
  },
  {
    "url": [
      "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/7c7b8c84-3ac1-4ab7-ac93-00d2dbd865bc.png",
      "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/6fdf3604-11f7-433a-acc4-50d86acef72c.png"
    ],
    "coords": [
      10,
      17
    ]
  }
]

// API endpoint to send images
const sendImageEndpoint = 'https://mosaic-api.gokapturehub.com/process-my-image';

// Number of times to fetch and send an image
const iterations = 40;

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
      // console.error(`Failed to download or send image data for iteration ${i}:`, error.message);
    }
  }
};
// run the funtion for the number of iterations
for (let i = 0; i < iterations; i++) {
  processImages();
}