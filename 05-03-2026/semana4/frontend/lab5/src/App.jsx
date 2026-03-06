import './App.css';
import EmployeeList from './components/EmpleadosList.jsx';
import PeliculasTable from './components/PeliculasTable.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Administrador de Empleados</h1>
      </header>

      <main>
        <EmployeeList />
        <PeliculasTable />
      </main>

      <footer>
        <p>CRUD de Empleados · Películas © 2026</p>
      </footer>
    </div>
  );
}

export default App;