import './App.css';
import LiveLearningSessionWork from './components/LiveLearningSessionWork';
import LiveLearningSessions from './components/LiveLearningSessions';
import MiddleSection from './components/MiddleSection';

import Navbar from './components/Navbar';
import TopSection from './components/TopSection';

function App() {
  return (
    <div className="App">
      <TopSection />
      <Navbar />
      <MiddleSection />
      <LiveLearningSessions />
      <LiveLearningSessionWork />
    </div>
  );
}

export default App;
