import './App.css';
import Testimonio from './componentes/Testimonio';
import testimonios from './testimonios';

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>El poder del software para transformar vidas</h1>
        {testimonios.map((testimonio, index) => (
                <Testimonio
                    key={index}
                    nombre={testimonio.nombre}
                    pais={testimonio.pais}
                    imagen={testimonio.imagen}
                    cargo={testimonio.cargo}
                    empresa={testimonio.empresa}
                    testimonio={testimonio.testimonio}
                />
            ))}
      </div>
    </div>
  );
}

export default App;
