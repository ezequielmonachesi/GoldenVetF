import React, { useEffect } from 'react';
import { Button, Container, Table, Modal, Form } from 'react-bootstrap';
import { Clipboard2PlusFill } from 'react-bootstrap-icons';
import { useState } from 'react';
import { borrarProducto, crearProducto, editarProducto, obtenerProductos } from '../../../helpers/queriesProductos';
import Swal from 'sweetalert2';

const Productos = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [productos, setProductos] = useState([]);

    useEffect(()=>{
        obtenerProductos().then((respuesta)=>{
            if (respuesta) setProductos(respuesta);
            else setProductos([]);
        })
    },[]);
    const productoInicial = {
        nombreProducto: '',
        descripcion:'',
        precio:'',
        stock:'',
        imagen:''
    }
    const [producto, setProducto] = useState(productoInicial);
    const [id, setId] = useState('');
    const [modificar, setModificar] = useState(false);

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
            editarProducto(producto,id).then((respuesta)=>{
                if (respuesta && respuesta.status === 200)  
                    Swal.fire("Producto modificado!","El producto se modifico correctamente","success");
                else Swal.fire("Ocurrio un error","No se logro modificar el producto","error");
                handleClose();
                limpiarForm();
                obtenerProductos().then((respuesta)=>{
                    if (respuesta) setProductos(respuesta);
                    else setProductos([]);
                })
            })
        }
        else{
            obtenerProductos().then((respuesta)=>{
                if (respuesta) setProductos(respuesta);
                else setProductos([]);
            });
            insertarProducto(producto);
        }
    }

    const insertarProducto = (prod) => {
        crearProducto(prod).then((respuesta)=>{
            if (respuesta && respuesta.status === 201){
                Swal.fire("Producto agregado!","Se pudo ingresar el nuevo producto","success");
                handleClose();
            }
            else {
                Swal.fire("Ocurrio un error","No se logro modificar el producto","error")

            }
            obtenerProductos().then((respuesta)=>{
                if (respuesta) setProductos(respuesta);
                else setProductos([]);
            }); 
        })
    }

    const modProducto = (prod, id) => {
        setModificar(true);
        setId(id);
        setProducto(prod);
        handleShow();
        
    }

    const eliminarProducto = (id) => {
        borrarProducto(id).then((respuesta)=>{
            if (respuesta && respuesta.status === 200){
                Swal.fire("Producto Eliminado!","El producto fue eliminado correctamente","success");
            }
            else Swal.fire("Ocurrio un error","No logro eliminar el producto","error")
        });
        obtenerProductos().then((respuesta)=>{
            if (respuesta) setProductos(respuesta);
            else setProductos([]);
        });
    }

    const limpiarForm = () => {
        setProducto(productoInicial);
        setModificar(false);
        handleClose();
    };

    
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
                    {productos.map((prod, index)=>(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td className='truncarTexto'>{prod.nombreProducto}</td>
                                <td>{prod.precio}</td>
                                <td>{prod.stock}</td>
                                <td className='truncarTexto'>{prod.descripcion}</td>
                                <td className='truncarTexto'>{prod.imagen}</td>
                                <td>
                                    <Button variant="warning" className='me-2 my-2' 
                                    onClick={()=>modProducto(prod,prod.id)}>
                                        Editar
                                    </Button>
                                    <Button variant="danger"
                                    onClick={()=>eliminarProducto(prod.id)}>
                                        Eliminar
                                    </Button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Agregar o modificar receta</Modal.Title>
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
                    controlId="descripcion"
                    >
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows={3}
                        value={producto.descripcion}
                        onChange={handleInputChange}
                    />
                    </Form.Group>
                    <Form.Group
                    className="mb-3"
                    controlId='precio'>
                        <Form.Label>Precio</Form.Label>
                        <Form.Control
                        type="number"
                        placeholder="Ej: 50"
                        value={producto.precio}
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
                    <Modal.Footer>
                        <Button variant="secondary" onClick={limpiarForm}>
                            Cancelar
                        </Button>
                        <Button variant="primary" type="submit">
                            Guardar
                        </Button>
                    </Modal.Footer>
                </Form>
                </Modal.Body>
            </Modal>
        </Container>
    );
};

export default Productos;