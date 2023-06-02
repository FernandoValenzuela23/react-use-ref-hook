import logo from './logo.svg';
import './App.css';
import { FormularioComponent } from './components/FormularioComponent';
import { EjemploComponent } from './components/EjemploComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>useRef Hook</h3>
        
        <FormularioComponent />
        <br />
        <EjemploComponent />

      </header>
    </div>
  );
}

export default App;
