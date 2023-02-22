import './App.css';
import Videopage from './components/Videospage/Videopage';
import LittleTreehugger from './components/Littletreehuggerpage/LittleTreehugger'



function App() {
  return (
    <div className="App">
      {/* 1st Task Video Page */}
      <Videopage />
      {/* 2nd Task Little Tree Hugger Page */}
      <LittleTreehugger />
    </div>
  );
}

export default App;
