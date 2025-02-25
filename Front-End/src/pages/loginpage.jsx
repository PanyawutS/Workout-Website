import React from 'react';
import Login from '../components/login'; // เปลี่ยนชื่อจาก login เป็น Login

const LoginPage = () => {
    return (
        <div>
            <Login /> {/* เรียกใช้คอมโพเนนต์ Login */}
        </div>
    );
};

export default LoginPage;
