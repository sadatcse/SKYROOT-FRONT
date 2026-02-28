import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Lock } from 'lucide-react';

export const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState({ type: '', text: '' });
  const { token } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage({ type: 'error', text: 'Passwords do not match' });
      return;
    }

    try {
      const res = await fetch('/api/auth/change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ newPassword })
      });

      if (res.ok) {
        setMessage({ type: 'success', text: 'Password changed successfully' });
        setNewPassword('');
        setConfirmPassword('');
      } else {
        setMessage({ type: 'error', text: 'Failed to change password' });
      }
    } catch (err) {
      setMessage({ type: 'error', text: 'An error occurred' });
    }
  };

  return (
    <div className="max-w-md">
      <h1 className="text-3xl font-bold text-neutral mb-8">Change Password</h1>

      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        {message.text && (
          <div className={`p-4 rounded-lg mb-6 ${
            message.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
          }`}>
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-neutral focus:border-neutral outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-neutral focus:border-neutral outline-none"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-neutral text-white py-3 rounded-lg font-medium hover:bg-neutral/90 transition-colors"
          >
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
};
