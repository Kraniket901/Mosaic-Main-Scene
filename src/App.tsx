// import React, { useCallback } from "react";
import Mosaic from "./Mosaic";
import AnimationBoard from "./AnimationBoard";

const App = () => {
  // const [show, setShow] = React.useState(false);
  // const handleKeyPress = useCallback(
  //   (e: React.KeyboardEvent<HTMLDivElement>) => {
  //     if (e.key === "Enter") {
  //       setShow(true);
  //     }
  //   },
  //   []
  // );
  return (
    <div tabIndex={0}>
      {
        true ? <Mosaic /> : <AnimationBoard/>
      }
    </div>
  );
};

export default App;
