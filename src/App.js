import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Home from './components/Paginas/Home';
import Souvenirs from './components/Paginas/Souvenirs';
import Cuadros from './components/Paginas/Cuadros';

function App() {
  return (
    <div className="App">
      
        <NavBar />
        <ItemListContainer gretting={"Hellow"}></ItemListContainer>

        <h1>Página de Inicio</h1>

    </div>
  );
}

export default App;
