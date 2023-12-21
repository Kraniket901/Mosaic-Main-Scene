import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import io from "socket.io-client";

interface ImageData {
  src: string;
  alt: string;
  delay?: string;
}

interface SocketImageData {
  image: string;
  result: {
    coords: string;
  };
}

const socket = io("https://mosaic-api.gokapturehub.com/", {
  transports: ["websocket", "polling", "flashsocket"],
});

interface ImageFlowProps {
  direction: string;
  image: ImageData[];
}

const ImageFlow = ({ direction, image }: ImageFlowProps) => {
  return (
    <div className="section-with-images">
      {image.map((img: ImageData, index: number) => (
        <img
          data-pos={direction}
          key={index}
          src={img.src}
          alt={img.alt}
          style={{ animationDelay: img.delay }}
        />
      ))}
    </div>
  );
};

const Page = () => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [showingImages, setShowingImages] = useState<ImageData[]>([]);

  const fetchImages = useCallback(() => {
    axios.get("https://mosaic-api.gokapturehub.com/cache-images").then((response) => {
      const data: ImageData[] = response.data.map((item: any) => ({
        src: item.url[1],
        alt: item.url[1],
      }));
      setImages(data);
    });
  }, []);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  useEffect(() => {
    const generateImages = () => {
      const newImages: ImageData[] = images.map((img, index) => ({
        ...img,
        delay: `${index * 3}s`,
      }));
      setShowingImages(newImages);
    };

    generateImages();
  }, [images]);

  useEffect(() => {
    const handleIncomingImage = (data: SocketImageData) => {
      const binaryString = atob(data.image);
      const arrayBuffer = new ArrayBuffer(binaryString.length);
      const uint8Array = new Uint8Array(arrayBuffer);

      for (let i = 0; i < binaryString.length; i++) {
        uint8Array[i] = binaryString.charCodeAt(i);
      }

      const blob = new Blob([uint8Array], { type: "image/png" });
      const url = URL.createObjectURL(blob);

      setImages((prevImages) => [
        ...prevImages,
        {
          src: url,
          alt: data.image,
        },
      ]);
    };

    socket.on("image", handleIncomingImage);

    return () => {
      socket.off("image", handleIncomingImage);
    };
  }, []);

  return (
    <main className="container-image">
      <ImageFlow image={showingImages} direction="top-left" />
      <ImageFlow image={showingImages} direction="top-right" />
      <ImageFlow image={showingImages} direction="bottom-left" />
      <ImageFlow image={showingImages} direction="bottom-right" />

      {/* Add other ImageFlow components here for different directions */}
    </main>
  );
};

export default Page;