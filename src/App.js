
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Join from './pages/Join';



function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/join' element={<Join></Join>}></Route>

      </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
