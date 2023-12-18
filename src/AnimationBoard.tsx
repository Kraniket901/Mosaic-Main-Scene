import axios from "axios";
import { useEffect, useState } from "react";

const page = () => {
  const [images, setImages] = useState<any>([]); 
  const [showingImages, setShowingImages] = useState<any>([]);
  useEffect(() => {
    axios.get("https://mosaic-api.gokapturehub.com/cache-images").then((e) => {
      // setGridData()
      const data = e.data.map((e: any) => {
        return {
          url: e.url[1],
        };
      });
      setImages(data);
    });
  }, []);

  useEffect(() => {
    const generateImages = () => {
      const newImages:any = [];
      for (let i = 0; i < images.length; i++) {
        const delay = i * 3; // Adjust the delay factor as needed
        newImages.push({
          src: images[i].url, // Replace with the actual path
          alt: images[i].url,
          delay: `${delay}s`,
        });
      }
      setShowingImages(newImages);
    };

    generateImages();
  }, [images]);

  return (
    <main className="container-image">
      <ImageFlow imageArr={showingImages} direction="top-left" />
      <ImageFlow imageArr={showingImages} direction="top-middle-left" />
      <ImageFlow imageArr={showingImages} direction="top-middle-right" />
      <ImageFlow imageArr={showingImages} direction="top-right" />
      <ImageFlow imageArr={showingImages} direction="bottom-left" />
      <ImageFlow imageArr={showingImages} direction="bottom-middle-left" />
      <ImageFlow imageArr={showingImages} direction="bottom-middle-right" />
      <ImageFlow imageArr={showingImages} direction="bottom-right" />
    </main>
  );
};

export default page;

const ImageFlow = (props: any) => {
  const { direction, imageArr } = props;
  return (
    <div className="section-with-images">
      {imageArr.map((image: any, index: any) => (
        <img
          data-pos={direction}
          key={index}
          src={image.src}
          alt={image.alt}
          style={{ animationDelay: image.delay }}
        />
      ))}
    </div>
  );
};
