//const API_URL = 'http://localhost:3000/api'; // Adjust the port if necessary.

export const fetchUsers = async () => {
  const response = await fetch("/api/users");
  if (!response.ok) {
    throw new Error('Failed to fetch users.');
  }
  return await response.json();
};

export const fetchUserById = async (id: number) => {
  const response = await fetch(`api/users/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch user with id: ${id}`);
  }
  return await response.json();
};