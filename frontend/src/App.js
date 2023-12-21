import Nav from './components/Nav';
import Footer from './components/footer';
import Signup from './components/Signup';
import PrivateComp from './components/PrivateComp';
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateProduct';
import Profile from './components/Profile';
import About from './components/About';

import './App.css';

import AddProduct from './components/AddProduct'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Login from './components/Login';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Nav />
          <Routes>
            
            <Route path="/" element = {<PrivateComp />} >
            {/* Route is used for allocating path to a button or a link */}
            <Route path='/' element = {<ProductList />} />
            <Route path='/add' element = {<AddProduct />} />
            <Route path='/about' element = {<About />} />
            <Route path='/Update/:id' element = {<UpdateProduct />} />
            <Route path='/Logout' element = {<h1>Logout  component</h1>} />
            <Route path='/Profile' element = {<Profile />} />
            </Route>

            <Route path='/Signup' element = {<Signup />} />
            <Route path='/Login' element = {<Login />} />
            
          </Routes>
        {/* <Footer /> */}
        </BrowserRouter>
      </div>
  );
}

export default App;
