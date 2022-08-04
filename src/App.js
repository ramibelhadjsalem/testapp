import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import HeaderMenu from "./Components/HeaderMenu";
import Footer  from './Components/Footer';
import NotFound from './Components/Notfound';
import Joke from './Components/Joke';
import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Nav/>
        <HeaderMenu/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/joke/:id' element={<Joke/>}/>
            <Route path='*' element={<NotFound/>}/>
           
        </Routes> 

        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
