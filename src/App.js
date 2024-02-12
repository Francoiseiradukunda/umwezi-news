import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import './App.css';
import './sass/main.scss'
import Forest from './component/home';

import Important from './pages/impo';
import Conclusion from './pages/conclusion';
import Effect from './pages/efect';
import Care from './pages/care';
import Header from './component/header';
function App() {
  return (
    <>
   <Router>
    <Routes>
    <Route path='/' element={<Header/>}></Route>
    <Route path='/forest' element={<Forest/>}></Route>
    <Route path='/important' element={<Important/>}></Route>
    <Route path='/effect' element={<Effect/>}></Route>
    <Route path='/care' element={<Care/>}></Route>
    <Route path='/conclusion' element={<Conclusion/>}></Route>
    </Routes>
   </Router>
 </> 
 );

};

export default App;
