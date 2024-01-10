#!/bin/bash

# Array of image file paths
images=("image1.png" "image2.png" "image3.png")

# Number of times to send the image
iterations=500  # Change this value to the desired number of iterations

# API endpoint
endpoint="https://mosaic-api.gokapturehub.com/process-my-image"

# Get the total number of images in the array
total_images=${#images[@]}

# Loop to send a randomly selected image multiple times
for ((i = 1; i <= iterations; i++)); do
  # Randomly select an index within the range of total_images
  random_index=$((RANDOM % total_images))

  # Get the path of the randomly selected image
  image_path=${images[$random_index]}

  echo "Sending image iteration $i: $image_path"
  curl -X POST -F "image=@$image_path" "$endpoint"
done
