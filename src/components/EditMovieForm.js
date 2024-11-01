import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './ALL.css'; 

const EditMovieForm = ({ movies, updateMovie }) => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const foundMovie = movies.find(m => m.id === parseInt(id));
    if (foundMovie) {
      setMovie(foundMovie);
    }
  }, [id, movies]);

  const handleChange = (e) => {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (movie) {
      updateMovie(movie);
      navigate('/movie-list');
    }
  };

  if (!movie) return <div>Loading...</div>;

  return (
    <form className="edit-movie-form" onSubmit={handleSubmit}>
      <h2>Cập Nhật Thông Tin Phim</h2>
      <div className="form-group">
        <label>Tên Phim:</label>
        <input type="text" name="title" value={movie.title} onChange={handleChange} className="form-control" />
      </div>
      <div className="form-group">
        <label>Thể Loại:</label>
        <input type="text" name="genre" value={movie.genre} onChange={handleChange} className="form-control" />
      </div>
      <div className="button-container">
        <button type="submit" className="btn btn-primary">Cập nhật</button>
      </div>
    </form>
  );
};

export default EditMovieForm;
