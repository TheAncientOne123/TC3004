import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Table, Button, Container, FormGroup, Modal, ModalHeader, ModalBody, ModalFooter,} from "reactstrap";
const data = [
    { id: 1, marca: "Toyota", modelo: "Corolla", anio: 2020 },
    { id: 2, marca: "Honda", modelo: "Civic", anio: 2019 },
    { id: 3, marca: "Ford", modelo: "Mustang", anio: 2021 },
    { id: 4, marca: "Chevrolet", modelo: "Camaro", anio: 2020 },
    { id: 5, marca: "Tesla", modelo: "Model 3", anio: 2022 },
    { id: 6, marca: "BMW", modelo: "3 Series", anio: 2018 },
    { id: 7, marca: "Audi", modelo: "A4", anio: 2019 },
    { id: 8, marca: "Mercedes-Benz", modelo: "C-Class", anio: 2021 },


];

class usuarios extends React.Component {
    state = {
        data: data,
        modalActualizar: false,
        modalInsertar: false,
        form: {
            id: "",
            nombre: "",
            empresa: "",
        },
    };
    mostrarModalActualizar = (dato) => {
        this.setState({
            form: dato,
            modalActualizar: true,
        });
    };
    cerrarModalActualizar = () => {
        this.setState({ modalActualizar: false });
    };
    mostrarModalInsertar = () => {
        this.setState({
            modalInsertar: true,
        });
    };
    cerrarModalInsertar = () => {
        this.setState({ modalInsertar: false });
    };
    editar = (dato) => {
        var contador = 0;
        var arreglo = this.state.data;
        arreglo.map((registro) => {
            if (dato.id === registro.id) {
                arreglo[contador].coche = dato.coche;
                arreglo[contador].marca = dato.marca;
                arreglo[contador].modelo = dato.modelo;
                arreglo[contador].anio = dato.anio;
            }
            contador++;
        });
        this.setState({ data: arreglo, modalActualizar: false });
    };
    eliminar = (dato) => {
        var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento " + dato.id);
        if (opcion === true) {
            var contador = 0;
            var arreglo = this.state.data;
            arreglo.map((registro) => {
                if (dato.id === registro.id) {
                    arreglo.splice(contador, 1);
                }
                contador++;
            });
            this.setState({ data: arreglo, modalActualizar: false });
        }
    };
    insertar = () => {
        var valorNuevo = { ...this.state.form };
        valorNuevo.id = this.state.data.length + 1;
        var lista = this.state.data;
        lista.push(valorNuevo);
        this.setState({ modalInsertar: false, data: lista });
    }
    handleChange = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };
    render() {
        return (
            <>
                <Container>
                    <br />
                    <Button color="success" onClick={() => this.mostrarModalInsertar()}>Crear</Button>
                    <br />
                    <br />
                    <Table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Marca</th>
                                <th>Modelo</th>
                                <th>Año</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map((dato) => (
                                <tr key={dato.id}>
                                    <td>{dato.id}</td>
                                    <td>{dato.marca}</td>
                                    <td>{dato.modelo}</td>
                                    <td>{dato.anio}</td>
                                    <td>
                                        <Button color="primary" onClick={() => this.mostrarModalActualizar(dato)} >Editar
                                        </Button>{" "}
                                        <Button color="danger" onClick={() => this.eliminar(dato)}>Eliminar</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Container>
                <Modal isOpen={this.state.modalActualizar}>
                    <ModalHeader>
                        <div><h3>Editar Registro</h3></div>
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <label>Marca:</label>
                            <input className="form-control" name="marca" type="text"
                                onChange={this.handleChange} value={this.state.form.marca} />
                        </FormGroup>
                        <FormGroup>
                            <label>Modelo:</label>
                            <input className="form-control" name="modelo" type="text"
                                onChange={this.handleChange} value={this.state.form.modelo} />
                        </FormGroup>
                        <FormGroup>
                            <label>Año:</label>
                            <input className="form-control" name="anio" type="text"
                                onChange={this.handleChange} value={this.state.form.anio} />
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => this.editar(this.state.form)} >
                            Editar</Button>
                        <Button color="danger" onClick={() => this.cerrarModalActualizar()} >
                            Cancelar</Button>
                    </ModalFooter>
                </Modal>
                <Modal isOpen={this.state.modalInsertar}>
                    <ModalHeader>
                        <div><h3>Insertar nombre</h3></div>
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <label>Id: </label>
                            <input className="form-control" readOnly type="text" value={this.state.data.length + 1} />
                        </FormGroup>
                        <FormGroup>
                            <label>Nombre: </label>
                            <input className="form-control" name="nombre" type="text" onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <label>Empresa: </label>
                            <input className="form-control" name="empresa" type="text" onChange={this.handleChange}
                            />
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => this.insertar()} >Insertar </Button>
                        <Button className="btn btn-danger" onClick={() => this.cerrarModalInsertar()}
                        >Cancelar</Button>
                    </ModalFooter>
                </Modal>
            </>
        );
    }
}
export default usuarios;

