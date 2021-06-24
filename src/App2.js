import React, { useState, useEffect } from "react";

const App2 = () => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setNum(num);
    }, 2000);
  }, [num]);

  return <div>test{num}</div>;
};

export default App2;
