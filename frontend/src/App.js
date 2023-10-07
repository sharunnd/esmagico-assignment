import './App.css';
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
    </div>
  );
}

export default App;
