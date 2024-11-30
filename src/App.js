
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Tabla from './components/Tabla';
import SzakdogaUrlap from './components/SzakdogaUrlap';

function App() {
  return (
    <div className="App">
      <nav><a href="">Szakdogák</a></nav>
      <header className="App-header">
       <h2>Számal-Szalézi Technikum egykori diákjainak szakdolgozatai</h2>
      </header>
      <body>
      
        <Tabla></Tabla>
        <SzakdogaUrlap></SzakdogaUrlap>
      </body>
    </div>
  );
}

export default App;
