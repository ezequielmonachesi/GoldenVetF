import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Servicios from "./components/views/Servicios/Servicios";
import{BrowserRouter, Route, Routes} from 'react-router-dom'
import DetalleServicios from "./components/views/servicios/DetalleServicios";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Inicio from "./components/views/Inicio";


function App() {
  return (
    
    <BrowserRouter>
    <Menu></Menu> 
    <div className="mainSection">
        <Routes>
          <Route exact path ="/" element={<Inicio/>}></Route>                                
          <Route path ="servicios" element={<Servicios/>}></Route>        
          <Route path ="servicios/:id" element={<DetalleServicios/>}></Route>                  
    </Routes>    
      </div>   
    <Footer></Footer>
      </BrowserRouter>
  );
}

export default App;
