import "./App.css";

import Header from "./components/Header/Header";
import Descriptions from "./components/Descriptions/descriptions";
import PriceSection from "./components/PriceSection/PriceSection";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="body-div">
      <div className="card">
        <Header />
        <div className="main-div">
          <Descriptions />
          <PriceSection />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
