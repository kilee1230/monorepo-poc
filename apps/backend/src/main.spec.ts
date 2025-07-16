import { formatMessage, getCurrentTimestamp, User } from '@./shared-utils';

describe('Backend Main', () => {
  it('should format message correctly using shared utils', () => {
    const message = formatMessage('Backend');
    expect(message).toBe('Hello Backend from shared utils!');
  });

  it('should get current timestamp', () => {
    const timestamp = getCurrentTimestamp();
    expect(timestamp).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/);
  });

  it('should work with User interface', () => {
    const user: User = {
      id: 1,
      name: 'Test User',
      email: 'test@example.com',
    };

    expect(user.id).toBe(1);
    expect(user.name).toBe('Test User');
    expect(user.email).toBe('test@example.com');
  });
});
