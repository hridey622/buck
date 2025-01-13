import { User } from '../types/auth';
import { UserCredential } from 'firebase/auth';

// Mock API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function mockLoginAPI(email: string, password: string) {
  await delay(1000);

  const user: User = {
    id: '1',
    email,
    firstName: 'John',
    lastName: 'Doe',
  };

  return { user };
}

export async function mockGoogleAuthAPI(credential: UserCredential) {
  await delay(1000);

  const user: User = {
    id: credential.user.uid,
    email: credential.user.email || '',
    firstName: credential.user.displayName?.split(' ')[0] || 'John',
    lastName: credential.user.displayName?.split(' ')[1] || 'Doe',
    provider: 'google'
  };

  return { user };
}

export async function mockRegisterAPI(data: { firstName: string; lastName: string; email: string; password: string }) {
  await delay(1000);

  const user: User = {
    id: '3',
    email: data.email,
    firstName: data.firstName,
    lastName: data.lastName,
  };

  return { user };
}