import './App.css';
import Menu from './utils/Menu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import rutas from './route-config';
import configurarValidaciones from './validaciones/configurarValidaciones';

configurarValidaciones();

function App() {
  return (
    <>
      <BrowserRouter basename={import.meta.env.VITE_BASE_PATH}>
        <Menu />
        <div className="container">
          <Routes>
            {rutas.map(ruta => (
              <Route 
                key={ruta.path} 
                path={ruta.path} 
                element={ruta.componente} 
              />
            ))}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

