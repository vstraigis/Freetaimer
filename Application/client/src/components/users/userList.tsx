import React from 'react';
//import { User } from '../../models/user';

interface User {
    id: number;
    name: string;
    email: string;
  }

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.name} - {user.email}
        </li>
      ))}
    </ul>
  );
};

export default UserList;