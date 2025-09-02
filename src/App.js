import './App.css';
import {Routes,Route } from 'react-router-dom'
import Home from './Components/Home';
import ShopNow from './Components/ShopNow'
function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Home />} />
     <Route path='/shopnow' element={<ShopNow />} />
     </Routes>
    </div>
  );
}

export default App;
