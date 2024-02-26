import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="font-jost">
      <Navbar />
      <Routes>
        <Route path="/" element={<Wrapper />} />
      </Routes>
    </div>
  )
}