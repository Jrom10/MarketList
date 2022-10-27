import MarketList from "./components/MarketList";
import NavBar from "./components/NavBar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css'


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<MarketList />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
