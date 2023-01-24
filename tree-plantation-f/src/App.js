import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Blogs/BlogsCard';

function App() {
  return (
    <div className="App">
    <Blogs/>
      {/* <BrowserRouter>
      <Routes>
        <Route path="/blogs" />
      </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
