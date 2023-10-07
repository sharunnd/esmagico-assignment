import './App.css';
import LiveLearningSessionWork from './components/LiveLearningSessionWork';
import LiveLearningSessions from './components/LiveLearningSessions';
import MiddleSection from './components/MiddleSection';

import Navbar from './components/Navbar';
import TopSection from './components/TopSection';
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
    </div>
  );
}

export default App;
