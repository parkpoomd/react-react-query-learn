import React from 'react';
import { useQuery } from 'react-query';
import * as api from './usersApi';

function Users({ setUserId }) {
  const { data, isLoading, isError, error } = useQuery('users', api.getUsers, {
    retry: false,
  });

  if (isLoading) {
    return <p>Loading users...</p>;
  }

  if (isError) {
    return <p>Something went wrong!</p>;
  }

  return (
    <div>
      <ul>
        {data?.map((user) => (
          <li key={user.id} className="flex justify-between">
            <span>{user.name}</span>
            <button
              type="button"
              className="hover:underline"
              onClick={() => setUserId(user.id)}
            >
              view
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
