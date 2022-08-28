import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import PlatformSection from "./components/PlatformSection/PlatformSection";
import TrackSection from "./components/TrackSection/TrackSection";
import Trainers from "./components/Trainers/Trainers";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <TrackSection />
      <PlatformSection />
      <Trainers/>
    </div>
  );
}

export default App;


