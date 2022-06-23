import React from 'react';
import { useQuery } from 'react-query';
import UserForm from './UserForm';
import * as api from './usersApi';

function UserDetails({ userId }) {
  const [isEditing, setIsEditing] = React.useState(false);

  const {
    data: user,
    isLoading,
    isFetching,
  } = useQuery(['user', userId], () => api.getUser(userId), {
    enabled: Boolean(userId),
  });

  if (!userId) {
    return <p>Select a User.</p>;
  }

  if (isLoading) {
    return <p>Loading User Details</p>;
  }

  return (
    <div>
      <button
        className="bg-gray-800 text-white px-4 py-2"
        onClick={() => setIsEditing(!isEditing)}
      >
        {isEditing ? 'CANCEL' : 'EDIT'}
      </button>

      {isEditing ? (
        <UserForm user={user} setIsEditing={setIsEditing} />
      ) : (
        <div>
          <h2>{user.name}</h2>
          <p>{user.phone}</p>
        </div>
      )}
    </div>
  );
}

export default UserDetails;
