import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import DetallePlan from "./components/views/detallePlan/DetallePlan";

function App() {
  return (
    <>
          <Menu></Menu>
          <DetallePlan/>
          <Footer></Footer>
    </>
  );
}

export default App;
