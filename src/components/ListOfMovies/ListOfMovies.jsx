import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'



export default function ListOfMovies({query}) {
    const [searchResult, setSearchResult] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect( () => {fetchData()}, [] )

    async function fetchData(){
        const res = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=5147931f`)
        const data = await res.json()
        setSearchResult(data)
        setLoading(false)
    }

    function displayResult(){
        if(!loading){
            if( searchResult.Response == 'True' ){
                return (searchResult.Search.map( (result, i) => {
                    return (
                        <div className='movie-card' key={i}>
                            <img src={result.Poster} />
                            <div className='movie-detail'>
                                <h2> {result.Title} </h2>
                                <h3> Type: {result.Type} </h3>
                                <h3> Year: {result.Year} </h3>
                                <h3> imdbId: {result.imdbID} </h3>
                                <Link to="/details" state={{ id: result.imdbID }}>
                                    <button className='btn'> View More Details </button>
                                </Link>
                            </div>
                        </div>
                    )
                } ))
            }
            return <h1> Movie not found! </h1>
        }
        return <h2> Loading... </h2>
    }

  return (
    <section className='section list-of-movie-section'>
        <div className='container'>
            <h1 className='heading'> Search Results for: {query} </h1>
            <hr></hr>
            <div className='grid-container'>
               {displayResult()}
            </div>
        </div>
    </section>
  )
}
