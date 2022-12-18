import React, { useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'

export default function Details() {
    const location = useLocation()
    const { id } = location.state

    // useEffect( () => {fetchData()}, [] )

    // async function fetchData(){
    //     const res = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=5147931f`)
    //     const data = await res.json()
    //     setSearchResult(data)
    //     setLoading(false)
    // }

    console.log(id)

    
  return (
    <div>{id}</div>
  )
}
