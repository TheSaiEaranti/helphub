import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'us-east-2_VamzXz04m', // Replace this
  ClientId: '7ofn53id433njgg80r6q1lkjf9'
};

export default new CognitoUserPool(poolData);