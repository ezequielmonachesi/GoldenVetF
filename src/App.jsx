import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Inicio from "./components/views/Inicio";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Administrador from "./components/views/Administrador";

function App() {
  return (
    <>
          <Menu></Menu>
          {/* <Inicio></Inicio> */}
          <Administrador></Administrador>
          <Footer></Footer>
    </>
  );
}

export default App;
