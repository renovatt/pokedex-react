import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Pokedex } from './components/Pokedex';
import { SearchPokemon } from './components/SearchPokemon';
import { SearchTypes } from './components/SearchTypes';
import { Preview } from './components/Preview';

function App() {
  return (
    <div className="App">
      <Header />
      <Preview />
      <SearchPokemon/>
      <SearchTypes/>
      <Pokedex />
      <Footer />
    </div>
  );
}

export default App;
