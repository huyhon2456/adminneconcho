import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const MovieList = ({ movies, deleteMovie  }) => {
  const navigate = useNavigate();

  const editMovie = (movie) => {
    navigate(`/edit-movie/${movie.id}`); 
  };

  return (
    <div>
      <h2>Danh Sách Phim</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên Phim</th>
            <th>Thể Loại</th>
            <th>Hành Động</th>
          </tr>
        </thead>
        <tbody>
          {movies.map(movie => (
            <tr key={movie.id}>
              <td>{movie.id}</td>
              <td>{movie.title}</td>
              <td>{movie.genre}</td>
              <td>
                <Button variant="warning" onClick={() => editMovie(movie)}>Chỉnh</Button>{' '}
                <Button variant="danger" onClick={() => deleteMovie(movie.id)}>Xóa</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MovieList;
