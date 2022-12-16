import { GlobalStyled } from './GlobalStyle';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Preview } from './components/Preview';
import { Pokedex } from './components/Pokedex';
import { SearchTypes } from './components/SearchTypes';
import { SearchPokemon } from './components/SearchPokemon';

function App() {
  return (
    <>
      <GlobalStyled />
      <div className="App">
        <Header />
        <Preview />
        <SearchPokemon />
        <SearchTypes />
        <Pokedex />
        <Footer />
      </div>
    </>
  );
}

export default App;
