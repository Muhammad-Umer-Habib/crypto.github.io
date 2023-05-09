import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import CoinDetails from "./components/CoinDetails";
import Coins from "./components/Coins";
import Exchanges from "./components/Exchanges";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import CoinDetails from "./components/CoinDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coins" element={<Coins />} />
          <Route path="/exchanges" element={<Exchanges />} />
          <Route path="/coins/:id" element={<CoinDetails />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
