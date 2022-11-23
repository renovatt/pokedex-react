import './App.css';
import { Header } from './components/Header';
import { Pokedex } from './components/Pokedex'

function App() {
  return (
    <div className="App">
      <Header/>
      <Pokedex />
    </div>
  );
}

export default App;
