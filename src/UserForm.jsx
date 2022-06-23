import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import * as api from './usersApi';

function UserForm({ user, setIsEditing }) {
  const [fields, setFields] = React.useState({ ...user });

  const queryClient = useQueryClient();

  const { isLoading, mutate } = useMutation(api.updateUser, {
    onSuccess: (data) => {
      queryClient.setQueryData(['user', user.id], data);
      setIsEditing(false);
    },
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    mutate(fields);
  };

  if (isLoading) {
    return <p>Saving your changes...</p>;
  }

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="space-y-2">
        <label className="block">
          <span className="text-gray-700">Name: </span>
          <input
            type="text"
            className="mt-1 block w-full"
            name="name"
            value={fields.name}
            onChange={handleChange}
            placeholder=""
          />
        </label>

        <label className="block">
          <span className="text-gray-700">Phone: </span>
          <textarea
            className="mt-1 block w-full"
            rows="3"
            name="phone"
            value={fields.phone}
            onChange={handleChange}
          ></textarea>
        </label>

        <button type="submit" className="bg-gray-800 text-white px-4 py-2">
          Save
        </button>
      </form>
    </div>
  );
}

export default UserForm;
