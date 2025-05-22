'use client';

import { useState } from 'react';
import { CognitoUserAttribute } from 'amazon-cognito-identity-js';
import userPool from '@/lib/aws/cognitoConfig';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const attributes = [
      new CognitoUserAttribute({ Name: 'email', Value: email }),
    ];

    userPool.signUp(email, password, attributes, [], (err, result) => {
      if (err) {
        setMessage(`❌ ${err.message}`);
        return;
      }

      setMessage('✅ Sign-up successful! Check your email to confirm.');
      router.push('/');
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 max-w-md w-full space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-blue-600">Create an Account</h2>

        <input
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  placeholder="Email"
  required
  className="w-full px-4 py-2 border rounded-lg text-black focus:outline-none focus:ring"
/>

<input
  type="password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  placeholder="Password"
  required
  className="w-full px-4 py-2 border rounded-lg text-black focus:outline-none focus:ring"
/>


        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Sign Up
        </button>

        {message && <p className="text-sm text-center text-red-600 mt-2">{message}</p>}
      </form>
    </div>
  );
}