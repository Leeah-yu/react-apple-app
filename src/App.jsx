
import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css'
import Loginpage from './pages/Loginpage';
import Mainpage from './pages/Mainpage';
import Detailpage from './pages/Detailpage';
import Nav from './../components/MovieModal/Nav';
import Searchpage from './pages/Searchpage/index';


const Layout = () => {
  return(
    <>
      <Nav /> 

      <Outlet /> 
    </>
  );
};


function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Loginpage />} />
        <Route path='main' element={<Mainpage />} />
        <Route path=':movieId' element={<Detailpage />} />
        <Route path='search' element={<Searchpage />} />
      </Route>
     </Routes>
    </>
  );
};


export default App;
