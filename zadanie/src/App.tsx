import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Home } from "./views/Home";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

function App() {
  const [nameShown, setNameShown] = useState<boolean>(false);
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Navbar nameShown={nameShown} />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer
          reset={() => setNameShown(false)}
          show={() => setNameShown(true)}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
