import './App.css';
import MiddleSection from './components/MiddleSection';

import Navbar from './components/Navbar';
import TopSection from './components/TopSection';

function App() {
  return (
    <div className="App">
      <TopSection />
      <Navbar />
      <MiddleSection />
    </div>
  );
}

export default App;
