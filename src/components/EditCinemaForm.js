import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditCinemaForm = ({ cinemas, updateCinema }) => {
  const { id } = useParams();
  const cinemaToEdit = cinemas.find(cinema => cinema.id === parseInt(id));

  const [name, setName] = useState(cinemaToEdit ? cinemaToEdit.name : '');
  const [location, setLocation] = useState(cinemaToEdit ? cinemaToEdit.location : '');
  
  const navigate = useNavigate();

  useEffect(() => {
    if (!cinemaToEdit) {
      navigate('/cinema-list');
    }
  }, [cinemaToEdit, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCinema({ id: parseInt(id), name, location });
    navigate('/cinema-list');
  };

  return (
    <form className="edit-movie-form"onSubmit={handleSubmit}>
      <h2>Cập Nhật Thông Tin Rạp</h2>
      <div className="form-group">
        <label>Tên Rạp:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
      </div>
      <div className="form-group">
        <label>Vị Trí:</label>
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} className="form-control" />
      </div>
      <div className="button-container">
      <button type="submit" className="btn btn-primary">Cập Nhật</button>
      </div>
    </form>
  );
};

export default EditCinemaForm;
