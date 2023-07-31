import React, { useEffect } from 'react';
import { Button, Container, Table, Modal, Form } from 'react-bootstrap';
import { Clipboard2PlusFill } from 'react-bootstrap-icons';
import { useState } from 'react';
import { borrarProducto, crearProducto, editarProducto, obtenerProductos } from '../../../helpers/queriesProductos';

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
        id:'',
        nombreProducto: '',
        descripcion:'',
        precio:'',
        stock:'',
        imagen:''
    }
    const [producto, setProducto] = useState(productoInicial);
    const [id, setId] = useState('');
    const [modificar, setModificar] = useState(false);

    const modificarProducto = (producto, id) => {
        setModificar(true);
        setProducto(producto);
        setId(id)
        handleShow();
    }
    
    const limpiarForm = () => {
        setProducto(productoInicial);
        setModificar(false);
        handleClose();
    };

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
            editarProducto(producto,id);
            setId('');
            setProducto(productoInicial);
            setModificar(false);
            handleClose();
        }
        else{
            console.log('lado del else')
            crearProducto(producto).then((respuesta)=>{
                if(respuesta && respuesta.status === 201) console.log('se creo el producto')
                else console.log('no se creo el producto')
            });
            handleClose();
        }
    }

    const eliminarProducto = (id) => {
        borrarProducto(id).then((respuesta)=>{
            if (respuesta && respuesta.status === 200) console.log('Se elimino el producto')
            else console.log('no se pudo eliminar el producto')
        })
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
                                    onClick={()=>modificarProducto(prod,prod.id)}>
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
                    controlId="descripcion"
                    >
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows={3}
                        value={producto.descripcion}
                        onChange={handleInputChange}/>
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
                </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={limpiarForm}>
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