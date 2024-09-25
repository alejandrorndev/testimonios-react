import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>El poder del software para transformar vidas</h1>
        <Testimonio
          nombre='Jhon King'
          pais='Singapur'
          imagen='shawn'
          cargo='Ingeniero de Software'
          empresa='Amazon'
          testimonio='Aprender a programar cambió mi perspectiva. Lo que empezó como curiosidad se convirtió en mi nueva vocación. Gracias a horas de dedicación y práctica, encontré en el desarrollo de software una forma de crecer profesionalmente y conseguir un trabajo gratificante en la industria tecnológica.'/>
        <Testimonio
          nombre='Laura Chima'
          pais='Nigeria'
          imagen='sarah'
          cargo='Ingeniera de Software'
          empresa='ChatDesk'
          testimonio='El camino del software me mostró una nueva realidad. Comenzar desde cero es intimidante, pero la perseverancia en el aprendizaje me llevó a descubrir mi capacidad para construir soluciones tecnológicas. Hoy, como desarrollador, disfruto de una carrera dinámica y desafiante.'/>
        <Testimonio 
          nombre='Carlota Greendly'
          pais='Suecia'
          imagen='emma'
          cargo='Ingeniera de Software'
          empresa='Spotify'
          testimonio='La programación abre infinitas puertas. Invertir tiempo en aprender a desarrollar software no solo te brinda nuevas habilidades, sino que también te permite resolver problemas de maneras innovadoras. En menos de un año, descubrí mi pasión por el código y logré transformar mi carrera en una con oportunidades ilimitadas.'/>
      </div>
    </div>
  );
}

export default App;
