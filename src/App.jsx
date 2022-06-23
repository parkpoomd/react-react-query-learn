import React from 'react';
import UserDetails from './UserDetails';
import Users from './Users';

function App() {
  const [userId, setUserId] = React.useState(); // selected

  return (
    <div className="flex h-screen">
      <div className="p-4 w-80 border-r">
        <Users setUserId={setUserId} />
      </div>

      <div className="p-4 flex-1">
        <UserDetails userId={userId} />
      </div>
    </div>
  );
}

export default App;
