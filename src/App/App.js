import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Parents from "./components/Parents/Parents";
import PlatformSection from "./components/PlatformSection/PlatformSection";
import Tools from "./components/Tools/Tools";
import TrackSection from "./components/TrackSection/TrackSection";
import Teachers from "./components/Teachers/Teachers";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <TrackSection />
      <PlatformSection />
      <Tools />
      <Teachers />
      <Parents />
      <Footer />
    </div>
  );
}

export default App;
