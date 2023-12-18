#!/bin/bash

# Path to the image file
image_path="sample.png"

# Number of times to send the same image
iterations=280  # Change this value to the desired number of iterations

# API endpoint
endpoint="https://mosaic-api.gokapturehub.com/process-my-image"

# Loop to send the same image multiple times
for ((i = 1; i <= iterations; i++)); do
  echo "Sending image iteration $i"
  curl -X POST -F "image=@$image_path" "$endpoint"
done
