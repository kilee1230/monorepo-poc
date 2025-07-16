import {
  sharedUtils,
  formatMessage,
  getCurrentTimestamp,
} from './shared-utils.js';

describe('sharedUtils', () => {
  it('should work', () => {
    expect(sharedUtils()).toEqual('shared-utils');
  });

  it('should format message correctly', () => {
    expect(formatMessage('Test')).toEqual('Hello Test from shared utils!');
  });

  it('should return current timestamp', () => {
    const timestamp = getCurrentTimestamp();
    expect(timestamp).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/);
  });
});
