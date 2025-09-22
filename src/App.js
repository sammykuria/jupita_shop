import './App.css';
import {Routes,Route } from 'react-router-dom'
import Home from './Components/Home';
import ShopNow from './Components/ShopNow'
import ProductDetail from './Components/ProductDetail';





function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Home />} />
           <Route path='/details/:id' element={<ProductDetail />} />
     <Route path='/shopnow' element={<ShopNow />} />
     </Routes>
    </div>
  );
}

export default App;
