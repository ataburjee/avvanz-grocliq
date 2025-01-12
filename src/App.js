import "./App.css";
import BackgroundChecksBanner from "./components/BackgroundBanner";
import BackgroundCheck from "./components/BackgroundCheck";
import DynamicSwiper from "./components/DynamicSwiper";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import UpperFooter from "./components/UpperFooter";
import UpperHeader from "./components/UpperHeader";

function App() {
  return (
    <div className="App">
      <UpperHeader />
      <Navbar />
      <BackgroundChecksBanner />
      <BackgroundCheck />
      <DynamicSwiper />
      <UpperFooter />
      <Footer />
    </div>
  );
}

export default App;
