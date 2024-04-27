import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main";
import CardDescription from "./components/CardDescription";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/story/:id" element={<CardDescription />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
