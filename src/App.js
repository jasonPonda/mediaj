import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Reseau from "./components/pages/reseau";
import Offre from "./components/pages/offre";
import Messages from "./components/pages/messages";
import Notification from "./components/pages/notification";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reseau" element={<Reseau />} />
        <Route path="/offre" element={<Offre />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/notification" element={<Notification />} />
      </Routes>
    </main>
  );
}

export default App;
