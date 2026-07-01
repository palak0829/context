import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count ${count}`;
  }, [count]); //runs evertime when the  variable (count) changes
  
  // useEffect(() => {
  //   console.log("useEffect called");
  // }, []); //work on first render

  //useEffect(() => {
  //   console.log("useEffect called");
  // }); //work on every render

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}

export default App;