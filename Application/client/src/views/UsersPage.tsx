import React from 'react';
import UserList from '../components/users/userList';
import { useUsers } from '../hooks/useUser';

const UsersPage: React.FC = () => {
  const { users, loading, error } = useUsers();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Users</h1>
      <UserList users={users} />
    </div>
  );
};

export default UsersPage;