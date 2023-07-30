import React from 'react';
import { Button, Container, Table, Modal, Form } from 'react-bootstrap';
import { Clipboard2PlusFill } from 'react-bootstrap-icons';
import { useState } from 'react';

const Producto = () => {
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                        <td>Comida para perro</td>
                        <td>$200</td>
                        <td>20</td>
                        <td>es solo comida para perro</td>
                        <td>una imagen</td>
                        <td>
                            <Button variant="warning" className='me-2 my-2' onClick={handleShow}>
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
                <Form>
                    <Form.Group className="mb-3" controlId="nombreProducto">
                    <Form.Label>Producto</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Nombre del producto"
                        autoFocus
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
                    controlId='precioProducto'>
                        <Form.Label>Precio</Form.Label>
                        <Form.Control
                        type="number"
                        placeholder="Ej: 50"
                        />
                    </Form.Group>
                    <Form.Group
                    className="mb-3"
                    controlId='stockProducto'>
                        <Form.Label>Stock</Form.Label>
                        <Form.Control
                        type="number"
                        placeholder="Ej: 50"
                        />
                    </Form.Group>
                    <Form.Group
                    className="mb-3"
                    controlId='imagenProducto'>
                        <Form.Label>Imagen</Form.Label>
                        <Form.Control
                        type="text"
                        placeholder="Ej: imagen.com/imagen.jpg"
                        />
                    </Form.Group>
                </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Guardar
                </Button>
                </Modal.Footer>
            </Modal>

        </Container>
    );
};

export default Producto;