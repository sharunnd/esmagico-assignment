import './App.css';
import About from './components/About';
import Clients from './components/Clients';
import LiveLearningSessionWork from './components/LiveLearningSessionWork';
import LiveLearningSessions from './components/LiveLearningSessions';
import MiddleSection from './components/MiddleSection';

import Navbar from './components/Navbar';
import TopSection from './components/TopSection';
import TrendingSpeakers from './components/TrendingSpeakers';
import VideoCarousel from './components/VideoCarousel';

function App() {
  return (
    <div className="App">
      <TopSection />
      <Navbar />
      <MiddleSection />
      <LiveLearningSessions />
      <LiveLearningSessionWork />
      <VideoCarousel />
      <Clients />
      <About />
      <TrendingSpeakers />
    </div>
  );
}

export default App;
