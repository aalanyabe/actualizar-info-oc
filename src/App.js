import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Formulario from './Formulario'

function App() {
  return (

    <div>
      <h3>prueba</h3>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Formulario />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
