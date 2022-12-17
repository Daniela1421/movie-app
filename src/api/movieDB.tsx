import axios from "axios";

const movieDB = axios.create({
  baseURL:'https://api.themoviedb.org/3/movie', 
  params: {
    api_key: 'eae2160379636d7c32198e2eb5cfd1a8', 
    language: 'es-ES'
  }
})

export default movieDB; 