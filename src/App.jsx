import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Pokedex } from './components/Pokedex'
import { Preview } from './components/Preview';
import { SearchPokemon } from './components/SearchPokemon';

function App() {
  return (
    <div className="App">
      <Header />
      <Preview />
      <SearchPokemon />
      <Pokedex />
      <Footer/>
    </div>
  );
}

export default App;
