import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';

const MemberList = () => {
  const [members, setMembers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', password: '123' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', password: '123' }
  ]);

  const handleDelete = (id) => {
    const filteredMembers = members.filter(member => member.id !== id);
    setMembers(filteredMembers);
  };

  return (
    <div>
      <h2>Danh Sách Người Dùng</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tài Khoản</th>
            <th>Email</th>
            <th>Mật Khẩu</th>
            <th>Hành Động</th>
          </tr>
        </thead>
        <tbody>
          {members.map(member => (
            <tr key={member.id}>
              <td>{member.id}</td>
              <td>{member.name}</td>
              <td>{member.email}</td>
              <td>{member.password}</td>
              <td>
                <Button variant="danger" onClick={() => handleDelete(member.id)}>Xóa</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MemberList;
