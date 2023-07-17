import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
<<<<<<< HEAD
import Home from './Components/Home/Home';

=======
import Blogs from './Blogs/BlogsCard';
>>>>>>> origin/blogshabib

function App() {
  return (
    <div className="App">
    <Blogs/>
      {/* <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Home />} />
=======
        <Route path="/blogs" />
>>>>>>> origin/blogshabib
      </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
