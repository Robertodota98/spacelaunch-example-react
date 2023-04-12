import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListLaunches from "./components/ListLaunches";
import LauchProvider from "./context/LaunchsContext";
import Details from "./components/Details";

function App() {
  return (
    <LauchProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListLaunches />} />
          <Route path="/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </LauchProvider>
  );
}

export default App;
