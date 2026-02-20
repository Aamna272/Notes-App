import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Add from "./Add";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/add" element={<Add />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
