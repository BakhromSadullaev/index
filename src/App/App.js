import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import PlatformSection from "./components/PlatformSection/PlatformSection";
import TrackSection from "./components/TrackSection/TrackSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <TrackSection />
      <PlatformSection />
    </div>
  );
}

export default App;
