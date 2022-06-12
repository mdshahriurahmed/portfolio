import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home'
import Navbar from './Components/Header/Navbar';
import Footer from './Components/Footer';
import Loading from './Components/Loading/Loading';
import { useEffect, useState } from 'react';
import Details from './Components/Details/Details';
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500)
  }, [])
  return (
    <div className="App">

      {
        loading ?
          <Loading></Loading>
          :
          <>
            <Navbar></Navbar>
            <Routes>
              <Route path='/' element={<Home></Home>}></Route>
              <Route path='/details/:id' element={<Details></Details>} ></Route>
            </Routes>
            <Footer></Footer>
          </>
      }

    </div>
  );
}

export default App;
