import { useEffect } from "react";
import colors from "./common/colors";

function App() {
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * colors.length);

    document.body.style.backgroundColor = colors[randomIndex];
  }, []);

  return (
    <div id="app">
      <h1>Color Change</h1>
      <div className="colors"></div>
    </div>
  );
}

export default App;
