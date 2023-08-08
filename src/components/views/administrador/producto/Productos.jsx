
import { useFetchData } from "../../../hooks/useFetchData";
import { Button, Container, Table, Modal, Form, Spinner } from 'react-bootstrap';
import { Clipboard2PlusFill } from 'react-bootstrap-icons';
import { useState } from 'react';
import { borrarProducto, crearProducto, editarProducto, obtenerProductos } from '../../../helpers/queriesProductos';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';

const Productos = () => {
    const {data, isLoading,refetchData } = useFetchData('productos');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [productos, setProductos] = useState([]);
    const [nomProdPrev, setNomProdPrev]= useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const filteredData = data.filter((producto) =>
  producto.nombreProducto.toLowerCase().includes(searchTerm.toLowerCase())
);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue
    } = useForm();     
    const [id, setId] = useState('');
    const [modificar, setModificar] = useState(false);

    const actualizarProductos = async () => {
        await refetchData();
      };

    const onSubmit = (prod) => { 
        if(modificar){
            if(prod.nombreProducto==nomProdPrev){
                editarProducto(prod,id).then((respuesta)=>{
                    if (respuesta && respuesta.status === 200)  {
                        Swal.fire("Producto modificado!","El producto se modifico correctamente","success");
                        actualizarProductos();
                    }
                    else Swal.fire("Ocurrio un error","No se logro modificar el producto","error");
                    handleClose();
                    limpiarForm();
                });
            }
            else{
                if(!buscarRepetido(prod.nombreProducto)) editarProducto(prod,id).then((respuesta)=>{
                    if (respuesta && respuesta.status === 200)  {
                        Swal.fire("Producto modificado!","El producto se modifico correctamente","success");
                        actualizarProductos();
                    }
                    else Swal.fire("Ocurrio un error","No se logro modificar el producto","error");
                    handleClose();
                    limpiarForm();
                });
                else{
                    Swal.fire("Ups producto repetido","El nombre del producto esta repetido y no se prodra agregar","error")
                }
            }
        }
        else{
            obtenerProductos().then((respuesta)=>{
                if (respuesta) {
                    setProductos(respuesta);
                    if(!buscarRepetido(prod.nombreProducto)) insertarProducto(prod);
                    else{
                        Swal.fire("Ups producto repetido","El nombre del producto esta repetido y no se prodra agregar","error")
                    }
                }
                else setProductos([]);
            });   
        }
    }

    const buscarRepetido = (nombreProd) => {
        let repetido = false;
        for(let i=0; i<productos.length; i++){
            if(nombreProd==productos[i].nombreProducto) repetido=true;
        }
        return repetido
    }

    const insertarProducto = (prod) => {
        crearProducto(prod).then((respuesta)=>{
            if (respuesta && respuesta.status === 201){
                Swal.fire("Producto agregado!","Se pudo ingresar el nuevo producto","success");
                actualizarProductos();
                handleClose();
            }
            else {
                Swal.fire("Ocurrio un error","No se logro modificar el producto","error")

            } 
        })
    }

    const modProducto = (prod, id) => {
        setModificar(true);
        setId(id);
        setValue("nombreProducto", prod.nombreProducto);
        setValue("descripcion", prod.descripcion);
        setValue("precio", prod.precio);
        setValue("stock", prod.stock);
        setValue("imagen", prod.imagen);
        setNomProdPrev(prod.nombreProducto);
        handleShow();
        
    }
    
    const eliminarProducto = (id) => {
        borrarProducto(id).then((respuesta)=>{
            if (respuesta && respuesta.status === 200){
                Swal.fire("Producto Eliminado!","El producto fue eliminado correctamente","success");
                actualizarProductos();
            }
            else Swal.fire("Ocurrio un error","No logro eliminar el producto","error")
        });
    }

    const limpiarForm = () => {
        reset();
        setModificar(false);
        handleClose();
    };

    
    return (
        <Container>

<input
  type="text"
  placeholder="Buscar producto..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/>


      <div className="p-3 d-flex justify-content-end">
        <Button
          variant="success"
          
          onClick={() => handleShow(true)}
        >
          Crear Producto
        </Button>
      </div>
           
            {isLoading ? (
            <div className="d-flex justify-content-center">
            <Spinner size="lg" variant="primary" />
            </div>
          ) :
            <Table responsive striped bordered hover>
                <thead>
                    <tr>
                        
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Stock</th>
                        <th>Descripcion</th>
                        <th>Imagen</th>
                        <th className="col-1">Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data &&
            filteredData?.map((prod, index)=>(
                            <tr key={index}>
                                
                                <td className='truncarTexto'>{prod.nombreProducto}</td>
                                <td>{prod.precio}</td>
                                <td className={prod.stock <= 5 ? 'text-danger fw-bold' : ''}>{prod.stock}</td>
                                <td className="text-truncate truncarTexto">{prod.descripcion}</td>
                                <td className='text-truncate truncarTexto'>{prod.imagen}</td>
                                <td className="d-flex justify-content-end">
                                    <Button variant="warning" 
                                    onClick={()=>modProducto(prod,prod.id)}>
                                        Editar
                                    </Button>
                                    <Button variant="danger"
                                    onClick={()=>eliminarProducto(prod.id)}>
                                        Borrar
                                    </Button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton onClick={limpiarForm}>
                <Modal.Title>Agregar o modificar producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="nombreProducto">
                    <Form.Label>Producto</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Nombre del producto"
                        {...register("nombreProducto",{
                            required:"El nombre del producto es obligatorio",
                            minLength:{
                                value:2,
                                message:"El nombre deve de contener como minimo 2 caracteres"
                            },
                            maxLength:{
                                value:100,
                                message:"El nombre no deve de tener mas de 100 caracteres"
                            }
                        })}
                    />
                    <Form.Text className="text-danger">
                        {errors.nombreProducto?.message}
                    </Form.Text>
                    </Form.Group>
                    <Form.Group
                    className="mb-3"
                    controlId="descripcion"
                    >
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows={3}
                        {...register("descripcion",{
                            required:"La descripcion es obligatoria",
                            minLength:{
                                value:2,
                                message:"La descripcion deve de contener como minimo 10 caracteres"
                            },
                            maxLength:{
                                value:600,
                                message:"La descripcion no deve de tener mas de 600 caracteres"
                            }
                        })}
                    />
                    <Form.Text className="text-danger">
                        {errors.descripcion?.message}
                    </Form.Text>
                    </Form.Group>
                    <Form.Group
                    className="mb-3"
                    controlId='precio'>
                        <Form.Label>Precio</Form.Label>
                        <Form.Control
                        type="number"
                        placeholder="Ej: 50"
                        {...register("precio",{
                            required:"El precio del producto es obligatorio",
                            min:{
                                value:0,
                                message:"El precio minimo es de 0"
                            },
                            max:{
                                value:50000,
                                message:"El precio maximo es de 50000"
                            }
                        })}
                    />
                    <Form.Text className="text-danger">
                        {errors.precio?.message}
                    </Form.Text>
                    </Form.Group>
                    <Form.Group
                    className="mb-3"
                    controlId='stock'>
                        <Form.Label>Stock</Form.Label>
                        <Form.Control
                        type="number"
                        placeholder="Ej: 50"
                        {...register("stock",{
                            required:"El stock del producto es obligatorio",
                            min:{
                                value:0,
                                message:"El stock minimo es de 0"
                            },
                            max:{
                                value:100,
                                message:"El stock maximo es de 100"
                            }
                        })}
                    />
                    <Form.Text className="text-danger">
                        {errors.stock?.message}
                    </Form.Text>
                    </Form.Group>
                    <Form.Group
                    className="mb-3"
                    controlId='imagen'>
                        <Form.Label>Imagen</Form.Label>
                        <Form.Control
                        type="text"
                        placeholder="Ej: imagen.com/imagen.jpg"
                        {...register("imagen",{
                            required:"La URL de la imagen es obligatorio",
                            pattern:{
                                value:/^(https?:\/\/)?(?:www\.)?[\w-]+\.[\w.-]+(?:\/[\w-./?%&=]*)?\.(?:jpg|jpeg|png|gif|bmp|jpeg|webp\?[\w=&.]*)$/,
                                message:"la URL deve de ser como 'imagen.com/imagen.jpg'"
                            }
                        })}
                    />
                    <Form.Text className="text-danger">
                        {errors.imagen?.message}
                    </Form.Text>
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