export function sharedUtils(): string {
  return 'shared-utils';
}

export function formatMessage(name: string): string {
  return `Hello ${name} from shared utils!`;
}

export function getCurrentTimestamp(): string {
  return new Date().toISOString();
}

export interface User {
  id: number;
  name: string;
  email: string;
}
