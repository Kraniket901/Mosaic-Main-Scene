import { useState, useEffect } from "react";

function QueueSystem() {
  const [queue, setQueue] = useState<any[]>([]);
  const [newData, setNewData] = useState("");
  const [renderedData, setRenderedData] = useState("");

  // Function to add data to the queue
  const enqueueData = () => {
    if (newData.trim() !== "") {
      setQueue([...queue, newData]);
      setNewData("");
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
        setQueue([...queue, Math.random()]);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Function to remove and render data in FIFO order
  const renderNextData = () => {
    if (queue.length > 0) {
      const nextData = queue[0];
      setRenderedData(nextData);
      setQueue(queue.slice(1));
    }
  };

  // Automatically render data when the queue changes
  useEffect(() => {
    renderNextData();
  }, [queue]);

  return (
    <div>
      <h1>Queue System</h1>
      <div>
        <input
          type="text"
          value={newData}
          onChange={(e) => setNewData(e.target.value)}
        />
        <button onClick={enqueueData}>Enqueue</button>
      </div>
      <div>
        <p>Rendered Data: {renderedData}</p>
        <button onClick={renderNextData}>Render Next</button>
      </div>
    </div>
  );
}

export default QueueSystem;
