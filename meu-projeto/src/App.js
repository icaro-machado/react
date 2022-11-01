import './App.css';
import HelloWorld from './components/HelloWorld';
import List from './components/List';
import Pessoa from './components/Pessoa';
import SayMyName from './components/SayMyName';

function App() {

  const nome = "Maria"

  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <HelloWorld />
      <SayMyName nome="Icaro"/>
      <SayMyName nome={nome} />
      <Pessoa nome="Icaro" idade="33" profissao="Programador" foto="https://via.placeholder.com/150"/>
      <List />
    </div>
  );
}

export default App;