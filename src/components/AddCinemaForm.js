import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const AddCinemaForm = ({ addCinema }) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    addCinema({ name, location });
    setName('');
    setLocation('');
    navigate('/cinema-list');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Thêm Rạp</h2>
      <Form.Group>
        <Form.Label>Tên Rạp</Form.Label>
        <Form.Control 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Vị Trí:</Form.Label>
        <Form.Control type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
      </Form.Group>
      <div className="button-container">
      <Button type="submit">Thêm Rạp</Button>
      </div>
    </Form>
  );
};

export default AddCinemaForm;
