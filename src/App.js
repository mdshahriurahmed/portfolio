import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home'
import Navbar from './Components/Header/Navbar';
import Footer from './Components/Footer';
import Loading from './Components/Loading/Loading';
import { useEffect, useState } from 'react';
import Details from './Components/Details/Details';
import MyProjects from './Components/MyProjects';
import Contact from './Components/Contact';
import Resume from './Components/Resume/Resume';
import MySelf from './Components/MySelf';
import Blogs from './Components/Blogs/Blogs';
import NotFound from './Components/NotFound/NotFound'
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000)
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
              <Route path='/myprojects' element={<MyProjects></MyProjects>}></Route>
              <Route path='contact' element={<Contact></Contact>} ></Route>
              <Route path='/resume' element={<Resume></Resume>}></Route>
              <Route path='about' element={<MySelf></MySelf>}></Route>
              <Route path='/blogs' element={<Blogs></Blogs>}></Route>
              <Route path='/*' element={<NotFound></NotFound>}></Route>
            </Routes>
            <Footer></Footer>
          </>
      }

    </div>
  );
}

export default App;
