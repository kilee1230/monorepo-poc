import { greetUser, addNumbers } from './utils';

describe('Backend Utils', () => {
  describe('greetUser', () => {
    it('should greet user with formatted message', () => {
      const result = greetUser('Alice');
      expect(result).toBe('Hello Alice from shared utils!');
    });
  });

  describe('addNumbers', () => {
    it('should add two positive numbers', () => {
      expect(addNumbers(2, 3)).toBe(5);
    });

    it('should add negative numbers', () => {
      expect(addNumbers(-2, -3)).toBe(-5);
    });

    it('should add zero', () => {
      expect(addNumbers(5, 0)).toBe(5);
    });
  });
});
