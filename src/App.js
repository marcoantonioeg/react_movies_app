import {useEffect, useState} from "react";
import MovieCard from "./MovieCard";
//usefect para obtener al cargar la app los datos
//aec7cde3
import './App.css';//usop el css
import SearchIcon from './search.svg';
const API_URL = 'http://www.omdbapi.com?apikey=aec7cde3';//apikey
const movie1 = 
    {
      "Title": "The Avengers",
      "Year": "2012",
      "imdbID": "tt0848228",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
    }
  
const App = () =>{
    const [searchTerm, setSearchTerm] = useState('');
    const [movies, setMovies] = useState([]);
    const searchMovies = async (title)=>{//funcion asincrona que recibe el titulo como param
        const response = await fetch(`${API_URL}&s=${title}`);//obtengo la respuesya
        const data = await response.json();//la respuesta la paso a un json

        setMovies(data.Search);//muestro en consola la respuesta
    }
    useEffect(()=>{//uso useffect
        searchMovies('Transformers')
    },[])
    return(
        <div className="app">
            <h1>Movies Card App</h1>
            <div className="search">
                <input placeholder="Buscar películas" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
                <img src={SearchIcon} alt="search" onClick={()=>searchMovies(searchTerm)}/>
            </div>
{
    movies?.length>0
    ? (
        <div className="container">
        {movies.map((movie)=>(
            <MovieCard movie={movie}/>
        ))}
    </div>
    )
    :
    (
        <div className="empty">
            <h2>No movies Found</h2>
        </div>
    )
}

            
        </div>
    );
}
export default App