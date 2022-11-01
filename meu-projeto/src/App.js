import './App.css';
import HelloWorld from './components/HelloWorld';
import Pessoa from './components/Pessoa';
import SayMyName from './components/SayMyName';

function App() {

  const nome = "Maria"

  return (
    <div className="App">
      <HelloWorld />
      <SayMyName nome="Icaro"/>
      <SayMyName nome={nome} />
      <Pessoa nome="Icaro" idade="33" profissao="Programador" foto="https://via.placeholder.com/150"/>
    </div>
  );
}

export default App;