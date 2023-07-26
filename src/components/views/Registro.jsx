import { Form } from "react-bootstrap";

const Registro = () => {
  return (
    <div className="mt-5 mainSection">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-xl-4">
          <Form className="form-registro mx-auto p-2 border shadow p-3 mb-5 bg-body-tertiary rounded">
          <h3 className="text-center registro">Registro</h3>
            <Form.Group className="mb-2">
              <Form.Control
                type="text"
                placeholder="Ingrese un nombre de usuario"
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Control placeholder="Ingrese un email" />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Control type="password" placeholder="Ingrese un password" />
            </Form.Group>
            <div className="row w-75 d-flex justify-content-center text-center ms-5 ps-lg-5">
              <button
                className="btn-registro mb-2 rounded"
                type="submit"
              >
                Registrar
              </button>
            </div>
          </Form>
          <div className="d-flex justify-content-end contenedor-inicia-sesion">
            <p>¿Ya tienes cuenta?  <span className="inicia-sesion">Inicia sesión</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registro;
