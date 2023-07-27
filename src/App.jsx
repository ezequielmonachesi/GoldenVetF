import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Registro from "./components/views/Registro";

import Inicio from "./components/views/Inicio";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";

function App() {
  return (
    <>
    <Registro/>
          <Menu></Menu>
          <Inicio></Inicio>
          <Footer></Footer>
    </>
  );
}

export default App;
