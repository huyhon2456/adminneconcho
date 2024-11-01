import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CinemaList = ({ cinemas, deleteCinema }) => {
  const navigate = useNavigate();

  const editCinema = (cinema) => {
    navigate(`/edit-cinema/${cinema.id}`);
};

  return (
    <div>
      <h2>Danh Sách Rạp</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên Rạp</th>
            <th>Vị Trí</th>
            <th>Hành Động</th>
          </tr>
        </thead>
        <tbody>
          {cinemas.map(cinema => (
            <tr key={cinema.id}>
              <td>{cinema.id}</td>
              <td>{cinema.name}</td>
              <td>{cinema.location}</td>
              <td>
                <Button variant="warning" onClick={() => editCinema(cinema)}>Chỉnh</Button>{' '}
                <Button variant="danger" onClick={() => deleteCinema(cinema.id)}>Xóa</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CinemaList;
