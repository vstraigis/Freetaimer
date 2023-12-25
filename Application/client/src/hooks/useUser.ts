import { useEffect, useState } from 'react';
import { fetchUsers } from '../services/api';
import { User } from '../types/userTypes';

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (e) {
        setError(e as Error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return { users, loading, error };
};