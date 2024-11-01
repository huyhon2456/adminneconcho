import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MemberList from './components/MemberList';
import AddMovieForm from './components/AddMovieForm';
import EditMovieForm from './components/EditMovieForm';
import MovieList from './components/MovieList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddCinemaForm from './components/AddCinemaForm';
import EditCinemaForm from './components/EditCinemaForm';
import CinemaList from './components/CinemaList';

function App() {

  const [movies, setMovies] = useState([
    { id: 1, title: 'Avengers', genre: 'Action' },
    { id: 2, title: 'Inception', genre: 'Sci-Fi' }
  ]);

  const addMovie = (movie) => {
    setMovies([...movies, { ...movie, id: movies.length + 1 }]);
  };

  const updateMovie = (updatedMovie) => {
    setMovies(movies.map(movie => (movie.id === updatedMovie.id ? updatedMovie : movie)));
  };

  const deleteMovie = (id) => {
    setMovies(movies.filter(movie => movie.id !== id));
  };

 
  const [cinemas, setCinemas] = useState([
    { id: 1, name: 'Cinema 1', location: 'Downtown' },
    { id: 2, name: 'Cinema 2', location: 'Uptown' }
  ]);

  const addCinema = (cinema) => {
    setCinemas([...cinemas, { ...cinema, id: cinemas.length + 1 }]);
  };

  const updateCinema = (updatedCinema) => {
    setCinemas(cinemas.map(cinema => (cinema.id === updatedCinema.id ? updatedCinema : cinema)));
  };

  const deleteCinema = (id) => {
    setCinemas(cinemas.filter(cinema => cinema.id !== id));
  };

  return (
    <Router>
      <div className="d-flex">
          <Sidebar />
        <div className="flex-grow-1 p-4">
          <Routes>
            <Route path="/members" element={<MemberList />} />
           
            <Route path="/add-movie" element={<AddMovieForm addMovie={addMovie} />} />
            <Route path="/edit-movie/:id" element={<EditMovieForm movies={movies} updateMovie={updateMovie} />} />
            <Route path="/movie-list" element={<MovieList movies={movies} deleteMovie={deleteMovie} />} />

            <Route path="/cinema-list" element={<CinemaList cinemas={cinemas} deleteCinema={deleteCinema} />} />
            <Route path="/add-cinema" element={<AddCinemaForm addCinema={addCinema} />} />
            <Route path="/edit-cinema/:id" element={<EditCinemaForm cinemas={cinemas} updateCinema={updateCinema} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
