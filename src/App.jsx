import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Inicio from "./components/views/Inicio";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";

import Productos from "./components/views/Productos";

function App() {
  return (
    <>
          <Menu></Menu>
          <Inicio></Inicio>
          <Productos/>
          <Footer></Footer>
    </>
  );
}

export default App;
