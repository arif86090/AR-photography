
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import Login from './components/Login/Login';
import RequredAuth from './components/Required/RequredAuth';
import Signup from './components/Signup/Signup';
import Footer from  './components/Footer/Footer'
import Checkout from './components/Checkout/Checkout';
import Blog from './components/Blog/Blog';
import Nodata from './components/Nodata/Nodata';
function App() {
  return (
    <div>
      
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/home' element={<HomePage></HomePage>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/checkout' element={
          <RequredAuth>
            <Checkout></Checkout>
          </RequredAuth>
        }></Route>
        <Route path='/aboutme' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='*' element={<Nodata></Nodata>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
