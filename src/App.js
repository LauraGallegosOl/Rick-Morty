//import logo from './logo.svg';
import image1 from '../src/assets/rick-morty.png';
import { useState } from 'react';
import './App.css';
import Characters from './components/Characters';


function App() {
  const [characters, setCharacters ]= useState(null)
  const regApi = async() => {
    const api = await fetch("https://rickandmortyapi.com/api/character")
    console.log(api);
    const characterApi = await api.json();
    console.log(characterApi);
   // console.log('hola');
   console.log(characters);
   setCharacters(characterApi.results);
   console.log(characters);
  }
  return (
    <div className="App">
      <header className="App-header">
       <h1 className="title">Rick and Morty</h1>
       {characters?(
       <Characters Characters={characters}></Characters>
       ):(
        <>
       <img src={image1} className="img-home" alt="logo"/>
       <button onClick={regApi} className='btn-search'>
        Buscar personajes
       </button>
       </>
       )
      }
      </header>
    </div>
  );
}

export default App;
