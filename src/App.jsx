import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import {Routes , Route} from "react-router-dom"

const App = () => {
  return (
   <div >
    <div className= '  items-center bg-black'>
      <Navbar/>
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
   </div>
  )
};

export default App;
