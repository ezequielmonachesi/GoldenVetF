import { Card, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import './style.css';
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { login } from "../../helpers/queriesUsuarios";

const Login = ({ setUsuarioLogueado }) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navegacion = useNavigate();

    const onSubmit = (usuario) => {
        login(usuario).then((respuesta) => {
            if (respuesta && respuesta.nombreUsuario) {
                sessionStorage.setItem('usuario', JSON.stringify(respuesta));
                setUsuarioLogueado(respuesta);
                navegacion('/');
            } else {
                Swal.fire(
                    "Error",
                    "Hubo un error al logearse intenta nuevamente en unos minutos",
                    "error"
                );
            }
        });
    }

    return (
        <Container className="login-container my-5">
            <Card className="border shadow rounded my-5 login-card">
                <Card.Header className="text-dark card-header-bg" as="h4">Login</Card.Header>
                <Card.Body className="bg-light">
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese un email"
                                {...register('email', {
                                    required: 'El email es un dato obligatorio',
                                    pattern: {
                                        value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                                        message: 'El email debe tener un formato valido (mail@dominio.com)'
                                    }
                                })}
                            />
                            <Form.Text className="text-danger">
                                {errors.email?.message}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                {
                                ...register('password', {
                                    required: 'El password es un dato obligatorio',
                                    pattern: {
                                        value: /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
                                        message: 'El password debe contener entre 8 y 16 caracteres y debe incluir numeros, caracteres en mayuscula, miniscula y almenos un caracter especial'
                                    }
                                })
                                }
                            />
                            <Form.Text className="text-danger">
                                {errors.password?.message}
                            </Form.Text>
                        </Form.Group>
                        <div className="row w-75 d-flex justify-content-center text-center ms-5 ps-lg-5 mt-2">
                            <button className="btn-registro my-2 rounded p-2" type="submit">
                                Iniciar sesión
                            </button>
                        </div>
                        <div className="d-flex justify-content-end contenedor-inicia-sesion">
                            <p>
                                ¿No tienes cuenta?{" "}
                                <Link to={'/registro'} className="inicia-sesion fw-semibold">Inicia sesión</Link>
                            </p>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Login;