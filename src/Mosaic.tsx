import { useCallback, useState, useEffect } from "react";
import { animated } from "react-spring";
import "./App.css";
import { io } from "socket.io-client";
import axios from "axios";
import Scroller from "./lib/Scroller";
// import axios from "axios";
/**
 * Represents the main Mosaic component.
 * @component
 */
const socket = io("https://mosaic-api.gokapturehub.com/", {
  // const socket = io("https://mosaic-api.gokapturehub.com/", {
  transports: ["websocket", "polling", "flashsocket"],
});
function Mosaic() {
  const [queue, setQueue] = useState<any>([]);
  const [lastLength, setLastLength] = useState(0)
  const [currentLength, setcurrentLength] = useState(0)
  const [imageScrollerque, setimageScrollerque] = useState<any>([]);
  const [showScroller, setshowScroller] = useState<any>(false);

  /** State to check whether to hide the Tool Bar or Not
   * @default false
   */
  const [hide] = useState(true);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  /** Number of rows in the grid */
  const [numRows] = useState<number>(22);

  /** Number of columns in the grid */
  const [numCols] = useState<number>(27);

  /** Width of each grid cell (in pixels) */
  const [cellWidth, setCellWidth] = useState<number>(46);

  /** Height of each grid cell (in pixels) */
  const [cellHeight, setCellHeight] = useState<number>(45);

  // const [loadingImages, setLoadingImages] = useState<boolean>(false);

  /** Data representing images in the grid */
  const [gridData, setGridData] = useState<
    Array<{
      imageId: number;
      row: number;
      col: number;
      url: string;
    }>
  >([]);


  // useefect for check new images

  // check for new image if there is no image then slider else 
  useEffect(() => {
    axios.get("https://mosaic-api.gokapturehub.com/cache-images").then((e) => {
      console.log(e.data)
      if (e.data.length !== lastLength) {
        setLastLength(e?.data.length)
      }
      let imageArray = e.data.map((e: any) => {
        return e.url[1]
      })
      setcurrentLength(e?.data.length)
      const data = e.data.map((e: any) => {
        return {
          imageId: new Date(),
          row: e.coords[0],
          col: e.coords[1],
          url: e.url[0],
        };
      });
      setimageScrollerque(() => [
        ...imageArray
      ].reverse());
      setGridData(data);
    });
  }, [])

  // after 30s 
  useEffect(() => {
    const checkimage = async () => {
      axios.get("https://mosaic-api.gokapturehub.com/cache-images").then((e) => {
        if (e.data.length !== lastLength) {
          setLastLength(e?.data.length)
        }
        setcurrentLength(e?.data.length)
        let imageArray = e.data.map((e: any) => {
          return e.url[1]
        })
        const data = e.data.map((e: any) => {
          return {
            imageId: new Date(),
            row: e.coords[0],
            col: e.coords[1],
            url: e.url[0],
          };
        });
        // console.log("after map image arr" ,...imageArray)
        setimageScrollerque(() => [
          ...imageArray
        ].reverse());
        // console.log( "after map data ", imageScrollerque)
        setGridData(data);
      });

    }

    const intervalId = setInterval(() => {
      // console.log("after 30s" , lastLength, currentLength)
      if (lastLength == currentLength && lastLength !== 180) {
        // setshowScroller(true)
      }
      checkimage()
    }, 60000);

    return () => clearInterval(intervalId);
  }, [])

  useEffect(() => {
    if (showScroller) {
      document.body.style.overflow = 'hidden'
    }else{
      document.body.style.overflow = 'auto'
    }
  }, [showScroller])
  

  // const [setIsAddingImage] = useState<boolean>(false);
  // useEffect(() => {
  //   axios.get("https://mosaic-api.gokapturehub.com/cache-images").then((e) => {
  //     // axios.get("https://mosaic-api.gokapturehub.com/cache-images").then((e) => {
  //     // setGridData()
  //     setLastLength(e?.data.length)
  //     const data = e.data.map((e: any) => {
  //       return {
  //         imageId: new Date(),
  //         row: e.coords[0],
  //         col: e.coords[1],
  //         url: e.url[0],
  //       };
  //     });
  //     console.log(data)
  //     console.log(data.url)
  //     // setimageScrollerque((prevQueue: any) => [
  //     //   ...prevQueue,
  //     //   { url:data.url },
  //     // ]);
  //     // setshowScroller(true)
  //     setGridData(data);
  //   });
  // }, []);

  /** State to manage the full-screen display of the image */
  const [fullScreenImage, setFullScreenImage] = useState<{
    url: string | null;
    imageId: number | null;
  }>({ url: null, imageId: null });

  /**
   * Handles changes in the number of rows input.
   * @param {React.ChangeEvent<HTMLInputElement>} e - The change event.
   */
  const handleRowChange = useCallback(
    () => {
      // setNumRows(+e.target.value);
      // localStorage.setItem("numRows", e.target.value);
    },
    []
  );

  /**
   * Handles changes in the number of columns input.
   * @param {React.ChangeEvent<HTMLInputElement>} e - The change event.
   */
  const handleColChange = useCallback(
    () => {
      // setNumCols(+e.target.value);
      // localStorage.setItem("numCols", e.target.value);
    },
    []
  );

  // useEffect(() => {
    // const numRows = localStorage.getItem("numRows");
    // const numCols = localStorage.getItem("numCols");
    // if (numRows) {
      // setNumRows(+numRows);
    // }
    // if (numCols) {
      // setNumCols(+numCols);
    // }
  // }, []);

  /**
   * Handles changes in the cell width input.
   * @param {React.ChangeEvent<HTMLInputElement>} e - The change event.
   */
  const handleWidthChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCellWidth(+e.target.value);
    },
    []
  );

  /**
   * Handles changes in the cell height input.
   * @param {React.ChangeEvent<HTMLInputElement>} e - The change event.
   */
  const handleHeightChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCellHeight(+e.target.value);
    },
    []
  );
  /**
   * Adds a random image to the grid with zoom effect.
   */
  const addImageToTheGrid = (data: any) => {
    // console.log(data.image);
    const randomImageId = Math.floor(Math.random() * 1000);
    // Set the flag to indicate that an image is being added
    // setIsAddingImage(true);
    const binaryString = atob(data.image);

    // Create an ArrayBuffer to hold the binary data
    const arrayBuffer = new ArrayBuffer(binaryString.length);
    const uint8Array = new Uint8Array(arrayBuffer);

    // Fill the ArrayBuffer with the binary data
    for (let i = 0; i < binaryString.length; i++) {
      uint8Array[i] = binaryString.charCodeAt(i);
    }
    const blob = new Blob([uint8Array], { type: "image/png" });
    const url = URL.createObjectURL(blob);
    // Show the image in full-screen for 3 seconds
    setshowScroller(false)
    setFullScreenImage({
      url,
      imageId: randomImageId,
    });

    // After 5 seconds, add it to the grid and reset the flag
    setTimeout(() => {
      setFullScreenImage({ url: null, imageId: null });
      // setshowScroller(true)
      setGridData((prevGridData) => [
        ...prevGridData,
        {
          imageId: randomImageId,
          row: data.coords[0],
          col: data.coords[1],
          url: data.url,
        },
      ]);

      // Reset the flag to indicate that image addition is complete
      // setIsAddingImage(false);

      // Check if there are more images in the queue to add
      if (queue.length > 0) {
        const nextUrl = queue.shift();
        addImageToTheGrid(nextUrl);
      }
    }, 3000);
  };
  // const [loadingIndex, setLoadingIndex] = useState<number>(0);

  const loadImagesSequentially = () => {
    // const delayBetweenImages = 50; // Time delay between each image in milliseconds

    // setLoadingIndex(0); // Reset the loading index

    // const intervalId = setInterval(() => {
    // setLoadingIndex((prevIndex) => {
    //   const nextIndex = prevIndex + 1;
    //   if (nextIndex < gridData.length) {
    //     return nextIndex;
    //   } else {
    //     clearInterval(intervalId); // Stop the interval when all images are displayed
    //     return prevIndex;
    //   }
    // });
    // }, delayBetweenImages);
  };

  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "Enter") {
        loadImagesSequentially();
      }
    },
    [gridData]
  );

  /**
   * Handles the click event for adding a random image.
   */
  // const handleAddImageClick = () => {
  //   // for (let i = 0; i < 3; i++) {
  //   addImageToTheGrid();
  //   // }
  // };

  useEffect(() => {
    socket.on("image", (data) => {
      console.log(data);
      const blob = new Blob([data.result.image], { type: "image/jpeg" });
      const url = URL.createObjectURL(blob);
      setQueue((prevQueue: any) => [
        ...prevQueue,
        { url, coords: data.result.coords, image: data.image },
      ]);
    });

    return () => {
      socket.off("image");
    };
  }, []);

  useEffect(() => {
    if (queue.length > 0 && !isPlaying) {
      setIsPlaying(true);
      const data = queue.shift();
      addImageToTheGrid(data);
      setTimeout(() => {
        setIsPlaying(false);
      }, 3000);
    }
  }, [queue, isPlaying]);

  return (
    <div
      tabIndex={0}
      onKeyDown={handleKeyPress}
      style={{
        //make the grid container responsive and center at the screen
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
        gap: "20px",
        // {showScroller == true }
      }}
    >
      <div
        onClick={() => {
          // setHide((prev) => !prev);
        }}
        className="grid-container"
      >
        {Array.from({ length: numRows }, (_, rowIndex) => (
          <div key={rowIndex} className="grid-row">
            {Array.from({ length: numCols }, (_, colIndex) => {
              const cellData = gridData.find(
                (data) => data.row === rowIndex + 1 && data.col - 1 === colIndex
              );

              const shouldShow = true

              return (
                <div
                  key={colIndex}
                  className="grid-cell"
                  style={{
                    minHeight: `${cellHeight}px`,
                    minWidth: `${cellWidth}px`,
                    maxWidth: `${cellWidth}px`,
                    maxHeight: `${cellHeight}px`,
                    backgroundColor: "transparent",
                    // border: "1px solid #15151a",
                  }}
                >
                  {cellData && shouldShow && (
                    <animated.div
                      className="zoom-image reveal-image"
                      style={{
                        position: "relative",
                        overflow: "hidden",
                        width: "100%",
                        height: "100%",
                        backgroundImage: `url(${cellData.url})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        zIndex:
                          fullScreenImage.imageId === cellData.imageId ? 1 : 0,
                        transition: "opacity 0.5s ease-in-out",
                        opacity: shouldShow ? 1 : 0,
                      }}
                    ></animated.div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      {showScroller && <Scroller imageArr={[...imageScrollerque]} />}
      {fullScreenImage.url && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 2,
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(0,0,0,0.2)",
          }}
        >
          <img
            src={fullScreenImage.url}
            style={{
              minWidth: "40%",
              minHeight: "40%",
              borderRadius: "18px",
            }}
            alt="Full Screen"
          />
        </div>
      )}
      {!hide && (
        <>
          {" "}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <label>
              Rows:
              <input type="number" value={numRows} onChange={handleRowChange} />
            </label>
            <label>
              Columns:
              <input type="number" value={numCols} onChange={handleColChange} />
            </label>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <label>
              Cell Width (px):
              <input
                type="number"
                value={cellWidth}
                onChange={handleWidthChange}
              />
            </label>
            <label>
              Cell Height (px):
              <input
                type="number"
                value={cellHeight}
                onChange={handleHeightChange}
              />
            </label>
          </div>
        </>
      )}
      {/* <button onClick={handleAddImageClick}>Add Random Image</button> */}
    </div>
  );
}

export default Mosaic;
