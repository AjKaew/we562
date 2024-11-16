import React from 'react';
import ReactDOM from 'react-dom/client';

// import {UserCard} from './UserCard';
// import {UserList} from './UserList';
import {FlipCard} from './FlipCard';

const users = [
  { id: 1, username: 'Alice', email: 'alice@example.com', bio: 'abc' },
  // { id: 2, username: 'Bob', email: 'bob@example.com', bio: 'def' },
  // { id: 3, username: 'Mary', email: 'mary@example.com', bio: 'ghi' }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <UserCard username="Kaew" email="chaloemphon.sir@dpu.ac.th" />
  // <UserList />
  <div>
  {users.map(user => (
      <FlipCard key={user.id} 
      username={user.username} email={user.email} bio={user.bio} />
  ))}
  </div>
);
