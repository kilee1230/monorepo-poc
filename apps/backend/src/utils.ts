import { formatMessage } from '@./shared-utils';

export function greetUser(name: string): string {
  return formatMessage(name);
}

export function addNumbers(a: number, b: number): number {
  return a + b;
}
