import Red from "./Red";
import Blue from "./Blue";
import Home from "./Home";
import Purple from "./Purple";
import { Routes, Route } from "react-router-dom";

export default function MainDiv() {
  return (
    <div id="main-section">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blue" element={<Blue />} />
        <Route path="/red" element={<Red />} />
        <Route path="/purple" element={<Purple />} />
      </Routes>
    </div>
  );
}
