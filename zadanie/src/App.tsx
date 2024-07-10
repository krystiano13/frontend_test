import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./views/Home";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
