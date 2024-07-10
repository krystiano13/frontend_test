import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./views/Home";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
