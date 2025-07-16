import { formatMessage, getCurrentTimestamp, User } from '@./shared-utils';
import { greetUser, addNumbers } from './utils';

console.log('Hello World');
console.log(formatMessage('Backend'));
console.log('Server started at:', getCurrentTimestamp());

// Simple API simulation
const users: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
];

console.log('Sample users:', users);
console.log('Greeting first user:', greetUser(users[0].name));
console.log('Adding user IDs:', addNumbers(users[0].id, users[1].id));
console.log('Backend is ready!');
