import { formatMessage, getCurrentTimestamp, User } from '@./shared-utils';
import {
  createSampleUsers,
  logServerStart,
  logUserData,
  runServer,
} from './main';

// Mock console.log to test console output
const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

describe('Backend Main', () => {
  beforeEach(() => {
    consoleSpy.mockClear();
  });

  afterAll(() => {
    consoleSpy.mockRestore();
  });

  describe('createSampleUsers', () => {
    it('should return array of sample users', () => {
      const users = createSampleUsers();
      expect(users).toHaveLength(2);
      expect(users[0]).toEqual({
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
      });
      expect(users[1]).toEqual({
        id: 2,
        name: 'Jane Smith',
        email: 'jane@example.com',
      });
    });
  });

  describe('logServerStart', () => {
    it('should log server startup messages', () => {
      logServerStart();
      expect(consoleSpy).toHaveBeenCalledWith('Hello World');
      expect(consoleSpy).toHaveBeenCalledWith(
        'Hello Backend from shared utils!'
      );
      expect(consoleSpy).toHaveBeenCalledWith(
        'Server started at:',
        expect.stringMatching(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/)
      );
    });
  });

  describe('logUserData', () => {
    it('should log user data and function results', () => {
      const users = createSampleUsers();
      logUserData(users);

      expect(consoleSpy).toHaveBeenCalledWith('Sample users:', users);
      expect(consoleSpy).toHaveBeenCalledWith(
        'Greeting first user:',
        'Hello John Doe from shared utils!'
      );
      expect(consoleSpy).toHaveBeenCalledWith('Adding user IDs:', 3);
    });
  });

  describe('runServer', () => {
    it('should run the complete server startup sequence', () => {
      runServer();

      // Verify all expected console.log calls
      expect(consoleSpy).toHaveBeenCalledWith('Hello World');
      expect(consoleSpy).toHaveBeenCalledWith(
        'Hello Backend from shared utils!'
      );
      expect(consoleSpy).toHaveBeenCalledWith(
        'Server started at:',
        expect.stringMatching(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/)
      );
      expect(consoleSpy).toHaveBeenCalledWith(
        'Sample users:',
        expect.any(Array)
      );
      expect(consoleSpy).toHaveBeenCalledWith(
        'Greeting first user:',
        'Hello John Doe from shared utils!'
      );
      expect(consoleSpy).toHaveBeenCalledWith('Adding user IDs:', 3);
      expect(consoleSpy).toHaveBeenCalledWith('Backend is ready!');
    });
  });

  // Keep existing tests for backward compatibility
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
