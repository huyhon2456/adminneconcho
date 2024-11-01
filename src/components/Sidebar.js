import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaFilm, FaPlus,FaBuilding } from 'react-icons/fa'; 

const Sidebar = () => {
  return (
    <div className="d-flex flex-column bg-dark" style={{ width: '250px', height: '100vh' }}>
      <h2 className="text-white p-3">Admin Dashboard</h2>
      <nav className="nav flex-column">
        <Link to="/members" className="nav-link text-white">
          <FaUser className="me-2" /> Quản lý thành viên
        </Link>
        <Link to="/add-movie" className="nav-link text-white">
          <FaPlus className="me-2" /> Thêm phim
        </Link>
        <Link to="/add-cinema" className="nav-link text-white">
          <FaPlus className="me-2" /> Thêm rạp 
        </Link>
        <Link to="/movie-list" className="nav-link text-white">
          <FaFilm className="me-2" /> Danh sách phim
        </Link>
        <Link to="/cinema-list" className="nav-link text-white">
          <FaBuilding className="me-2" /> Danh sách rạp 
        </Link>
        
      </nav>
    </div>
  );
};

export default Sidebar;
