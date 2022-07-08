import "./App.css";
import "./Game.css";
import Game from "./component/Game";
import { useEffect } from "react";
function App() {

  useEffect(() => {
    console.log("App.js Mounted")
  }, [])
  return (
    <>
      <Game />
    </>
  );
}

export default App;
