import { formatMessage, getCurrentTimestamp, User } from '@./shared-utils';
import { useState } from 'react';

export function App() {
  const [users] = useState<User[]>([
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
  ]);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Simple Monorepo Frontend</h1>

      <div style={{ marginBottom: '20px' }}>
        <h2>Shared Utilities Demo</h2>
        <p>{formatMessage('Frontend User')}</p>
        <p>Current time: {getCurrentTimestamp()}</p>
      </div>

      <div>
        <h2>Sample Users</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      </div>

      <div
        style={{
          marginTop: '20px',
          padding: '10px',
          backgroundColor: '#f0f0f0',
        }}
      >
        <p>✅ This frontend app is using the shared TypeScript library!</p>
        <p>✅ The backend app also uses the same shared library.</p>
      </div>
    </div>
  );
}

export default App;
