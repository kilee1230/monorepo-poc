import { formatMessage, getCurrentTimestamp, User } from '@./shared-utils';
import { greetUser, addNumbers } from './utils';

export function createSampleUsers(): User[] {
  return [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  ];
}

export function logServerStart(): void {
  console.log('Hello World');
  console.log(formatMessage('Backend'));
  console.log('Server started at:', getCurrentTimestamp());
}

export function logUserData(users: User[]): void {
  console.log('Sample users:', users);
  console.log('Greeting first user:', greetUser(users[0].name));
  console.log('Adding user IDs:', addNumbers(users[0].id, users[1].id));
}

export function runServer(): void {
  logServerStart();
  const users = createSampleUsers();
  logUserData(users);
  console.log('Backend is ready!');
}

// Run the server
runServer();
