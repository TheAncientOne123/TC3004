import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Table, Button, Container, FormGroup,
    Modal, ModalHeader, ModalBody, ModalFooter,
} from "reactstrap";

const data = [
    { id: 1, titulo: "El Padrino", director: "Francis Ford Coppola", anio: 1972 },
    { id: 2, titulo: "Pulp Fiction", director: "Quentin Tarantino", anio: 1994 },
    { id: 3, titulo: "El Señor de los Anillos", director: "Peter Jackson", anio: 2001 },
    { id: 4, titulo: "Forrest Gump", director: "Robert Zemeckis", anio: 1994 },
    { id: 5, titulo: "Inception", director: "Christopher Nolan", anio: 2010 },
    { id: 6, titulo: "Matrix", director: "Lana y Lilly Wachowski", anio: 1999 },
];

class Peliculas extends React.Component {
    state = {
        data: data,
        modalActualizar: false,
        modalInsertar: false,
        form: {
            id: "",
            titulo: "",
            director: "",
            anio: "",
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
            form: { id: "", titulo: "", director: "", anio: "" },
        });
    };

    cerrarModalInsertar = () => {
        this.setState({ modalInsertar: false });
    };

    editar = (dato) => {
        const arreglo = this.state.data.map((registro) =>
            dato.id === registro.id
                ? { ...registro, titulo: dato.titulo, director: dato.director, anio: dato.anio }
                : registro
        );
        this.setState({ data: arreglo, modalActualizar: false });
    };

    eliminar = (dato) => {
        const opcion = window.confirm(
            "¿Estás seguro que deseas eliminar la película \"" + dato.titulo + "\"?"
        );
        if (opcion === true) {
            const arreglo = this.state.data.filter((registro) => registro.id !== dato.id);
            this.setState({ data: arreglo, modalActualizar: false });
        }
    };

    insertar = () => {
        const valorNuevo = { ...this.state.form };
        valorNuevo.id = this.state.data.length > 0
            ? Math.max(...this.state.data.map((r) => r.id)) + 1
            : 1;
        const lista = [...this.state.data, valorNuevo];
        this.setState({ modalInsertar: false, data: lista });
    };

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
                    <h2>Películas</h2>
                    <Button color="success" onClick={() => this.mostrarModalInsertar()}>
                        Crear
                    </Button>
                    <br />
                    <br />
                    <Table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Título</th>
                                <th>Director</th>
                                <th>Año</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map((dato) => (
                                <tr key={dato.id}>
                                    <td>{dato.id}</td>
                                    <td>{dato.titulo}</td>
                                    <td>{dato.director}</td>
                                    <td>{dato.anio}</td>
                                    <td>
                                        <Button
                                            color="primary"
                                            onClick={() => this.mostrarModalActualizar(dato)}
                                        >
                                            Editar
                                        </Button>{" "}
                                        <Button color="danger" onClick={() => this.eliminar(dato)}>
                                            Eliminar
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Container>

                <Modal isOpen={this.state.modalActualizar}>
                    <ModalHeader>
                        <div><h3>Editar película</h3></div>
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <label>Título:</label>
                            <input
                                className="form-control"
                                name="titulo"
                                type="text"
                                onChange={this.handleChange}
                                value={this.state.form.titulo || ""}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label>Director:</label>
                            <input
                                className="form-control"
                                name="director"
                                type="text"
                                onChange={this.handleChange}
                                value={this.state.form.director || ""}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label>Año:</label>
                            <input
                                className="form-control"
                                name="anio"
                                type="text"
                                onChange={this.handleChange}
                                value={this.state.form.anio || ""}
                            />
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => this.editar(this.state.form)}>
                            Editar
                        </Button>
                        <Button color="danger" onClick={() => this.cerrarModalActualizar()}>
                            Cancelar
                        </Button>
                    </ModalFooter>
                </Modal>

                <Modal isOpen={this.state.modalInsertar}>
                    <ModalHeader>
                        <div><h3>Insertar película</h3></div>
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <label>ID:</label>
                            <input
                                className="form-control"
                                readOnly
                                type="text"
                                value={
                                    this.state.data.length > 0
                                        ? Math.max(...this.state.data.map((r) => r.id)) + 1
                                        : 1
                                }
                            />
                        </FormGroup>
                        <FormGroup>
                            <label>Título:</label>
                            <input
                                className="form-control"
                                name="titulo"
                                type="text"
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label>Director:</label>
                            <input
                                className="form-control"
                                name="director"
                                type="text"
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label>Año:</label>
                            <input
                                className="form-control"
                                name="anio"
                                type="text"
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => this.insertar()}>
                            Insertar
                        </Button>
                        <Button
                            className="btn btn-danger"
                            onClick={() => this.cerrarModalInsertar()}
                        >
                            Cancelar
                        </Button>
                    </ModalFooter>
                </Modal>
            </>
        );
    }
}

export default Peliculas;
