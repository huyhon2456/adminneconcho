import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AddMovieForm = ({ addMovie }) => {
  const [movie, setMovie] = useState({ title: '', genre: '' });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie(movie);
    setMovie({ title: '', genre: '' });
    navigate('/movie-list');
  };

  return (
    <Form onSubmit={handleSubmit}>  
    <h2>Thêm Phim</h2>
      <Form.Group>
        <Form.Label>Tên Phim</Form.Label>
        <Form.Control
          type="text"
          value={movie.title}
          onChange={(e) => setMovie({ ...movie, title: e.target.value })}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Thể Loại</Form.Label>
        <Form.Control
          type="text"
          value={movie.genre}
          onChange={(e) => setMovie({ ...movie, genre: e.target.value })}
          required
        />
      </Form.Group>
      <div className="button-container">
      <Button type="submit">Thêm Phim</Button>
      </div>
    </Form>
  );
};

export default AddMovieForm;
