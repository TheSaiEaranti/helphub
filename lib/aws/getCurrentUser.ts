import userPool from './cognitoConfig';

export function getCurrentUser() {
  return userPool.getCurrentUser();
}