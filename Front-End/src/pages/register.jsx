import React, { useState } from 'react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // เพิ่มโค้ดสำหรับการสมัครสมาชิกที่นี่
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white">สมัครสมาชิก</h2>
        </div>
        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="email"
            placeholder='Email'
            required
            className='w-full p-3 mb-4 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder='Password'
            required
            className='w-full p-3 mb-4 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder='Confirm Password'
            required
            className='w-full p-3 mb-4 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button 
            type="submit"
            className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200'
          >
            สมัครสมาชิก
          </button>
        </form>
        <div className="mt-4 text-center">
          <a href="/login" className="text-sm text-gray-400 hover:text-gray-300">มีบัญชีอยู่แล้ว? เข้าสู่ระบบ</a>
        </div>
      </div>
    </div>
  );
};

export default Register;
