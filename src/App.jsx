import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import ListOfMovies from './components/ListOfMovies/ListOfMovies'
import Details from './components/Details/Details'

function App() {
  const [query, setQuery] = useState('')

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Hero query={query}  setQuery={setQuery} />} />
          <Route path="/listOfMovies" element={<ListOfMovies query={query}  setQuery={setQuery} />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
