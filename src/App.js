import "./App.css";
import Welcome from "./components/Welcome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Radium, { StyleRoot } from "radium"


function App() {
  return (
    <StyleRoot>
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/homepage" element={<Homepage />} />
        </Routes>
      </Router>
    </div>
    </StyleRoot>
  );
}

export default Radium(App);
