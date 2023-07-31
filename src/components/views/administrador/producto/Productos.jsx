import React from 'react';
import { Button, Container, Table, Modal, Form } from 'react-bootstrap';
import { Clipboard2PlusFill } from 'react-bootstrap-icons';
import { useState } from 'react';

const Productos = () => {
    
    const productoInicial = {
        id:'',
        nombreProducto: '',
        descripcion:'',
        precio:'',
        stock:'',
        imagen:''
    }
    const [producto, setProducto] = useState(productoInicial);
    const [modificar, setModificar] = useState(false);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const modificarProducto = (producto) => {
        setModificar(true);
        setProducto(producto);
        handleShow();
    }

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setProducto((prevProducto) => ({
          ...prevProducto,
          [id]: value,
        }));
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(modificar){
            a
            // cuando termina de modificar el producto setea la bandera
            setModificar(false);
        }
        else{
            a
        }
    }

    return (
        <Container className='bg-white'>
            <h1 className='m-5'>Administrar Productos</h1>
            <h3>
                Agregar nuevo producto: <Button variant="success" onClick={handleShow}><Clipboard2PlusFill/></Button>
            </h3>
            <hr/>
            <Table responsive>
                <thead>
                    <tr>
                        <th>N°</th>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Stock</th>
                        <th>Descripcion</th>
                        <th>Imagen</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td className='truncarTexto'>Comida para perro</td>
                        <td>$200</td>
                        <td>20</td>
                        <td className='truncarTexto'>es solo comida para perro</td>
                        <td>una imagen</td>
                        <td>
                            <Button variant="warning" className='me-2 my-2' onClick={modificarProducto}>
                                Editar
                            </Button>
                            <Button variant="danger">
                                Eliminar
                            </Button>
                        </td>
                    </tr>
                </tbody>
            </Table>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="nombreProducto">
                    <Form.Label>Producto</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Nombre del producto"
                        value={producto.nombreProducto}
                        onChange={handleInputChange}
                    />
                    </Form.Group>
                    <Form.Group
                    className="mb-3"
                    controlId="descripcionProducto"
                    >
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control as="textarea" rows={3}/>
                    </Form.Group>
                    <Form.Group
                    className="mb-3"
                    controlId='descripcion'>
                        <Form.Label>Precio</Form.Label>
                        <Form.Control
                        type="number"
                        placeholder="Ej: 50"
                        value={producto.descripcion}
                        onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group
                    className="mb-3"
                    controlId='stock'>
                        <Form.Label>Stock</Form.Label>
                        <Form.Control
                        type="number"
                        placeholder="Ej: 50"
                        value={producto.stock}
                        onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group
                    className="mb-3"
                    controlId='imagen'>
                        <Form.Label>Imagen</Form.Label>
                        <Form.Control
                        type="text"
                        placeholder="Ej: imagen.com/imagen.jpg"
                        value={producto.imagen}
                        onChange={handleInputChange}
                        />
                    </Form.Group>
                </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancelar
                </Button>
                <Button variant="primary" type='submit'>
                    Guardar
                </Button>
                </Modal.Footer>
            </Modal>

        </Container>
    );
};

export default Productos;