import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Inicio from "./components/views/Inicio";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";

import Inicio from "./components/views/Inicio";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";

function App() {
  return (
    <>
      <Menu></Menu>
      <Inicio></Inicio>
      <Footer></Footer>
    </>
  );
}

export default App;
