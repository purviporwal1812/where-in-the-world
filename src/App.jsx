import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
