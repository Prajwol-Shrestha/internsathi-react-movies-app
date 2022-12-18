import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

export default function ListOfMovies({query}) {
    const [searchResult, setSearchResult] = useState([])
    const [loading, setLoading] = useState(true)
    const [queryData, setQuery] = useState(query)
    // const queryData = query

    useEffect( () => {fetchData()}, [] )


    async function fetchData(){
        const res = await fetch(`https://www.omdbapi.com/?s=${queryData}&apikey=5147931f`)
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
                            <img src={result.Poster} className="poster-img"/>
                            <div className='detail'>
                                <h2 className='sub-heading'> {result.Title} </h2>
                                <p className='title'> <b> Type: </b> {result.Type} </p>
                                <p className='title'> <b> Year: </b> {result.Year} </p>
                                <p className='title'> <b> imdbId: </b> {result.imdbID} </p>
                                <Link to="/details" state={{ id: result.imdbID }}>
                                    <button className='btn'> View More Details </button>
                                </Link>
                            </div>
                        </div>
                    )
                } ))
            }
            return (
                <div className='not-found'>
                    <h2 className='sub-heading'> Movie Not Found </h2>
                    <Link to="/">
                        <button className='btn'> Back to Home </button>
                    </Link>
                </div>
                
            )
        }
        return <h2> Loading... </h2>
    }

  return (
    <section className='section movie-section'>
        <div className='container'>
            <h1 className='heading'> Search Results for: {queryData} </h1>
            <hr></hr>
            <div className='grid-container'>
               {displayResult()}
            </div>
        </div>
    </section>
  )
}
