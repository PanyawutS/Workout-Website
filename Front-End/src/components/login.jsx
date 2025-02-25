import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';  // นำเข้า sweetalert2
import logo from '../images/logo.png';

function Login() {
    const [email, setEmail] = useState("");  // เปลี่ยนจาก username เป็น email
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('email')) {
            navigate('/');
        }
    }, [navigate]);

    async function login() {
        console.log(email, password);
        let item = { email, password };
        try {
            let result = await fetch("http://localhost:8080/api/workoutprograms/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(item)
            });

            if (result.ok) {
                let data = await result.json();  // API จะส่ง JSON กลับมาเสมอ

                if (data.message === "Login successful") {
                    localStorage.setItem('user', JSON.stringify({ email, username: data.username })); // เก็บ username ด้วย

                    Swal.fire({
                        icon: 'success',
                        title: 'เข้าสู่ระบบสำเร็จ!',
                        text: 'ยินดีต้อนรับเข้าสู่ระบบ',
                        timer: 3000,
                        showConfirmButton: false
                    });
                    

                    navigate('/profile');  // เมื่อ login สำเร็จไปยังหน้า profile
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'เข้าสู่ระบบล้มเหลว',
                        text: data.message,  // ใช้ข้อความจาก API
                    });
                }
            } else {
                let errorData = await result.json();  // รับข้อความ error จาก API
                Swal.fire({
                    icon: 'error',
                    title: 'เข้าสู่ระบบล้มเหลว',
                    text: errorData.message,
                });
            }
        } catch (error) {
            console.error("Error during login:", error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "ชื่อผู้ใช้หรือรหัสผ่านผิดพลาด !!",
              });
        }
    }


    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg ">
                <div className="text-center mb-8">
                    <img
                        src={logo}
                        alt="ENERGYM Logo"
                        className="mx-auto w-28"
                    />
                    <h2 className="text-2xl font-bold text-white">เข้าสู่ระบบ</h2>
                </div>
                <div className="mb-6">
                    <input
                        type="email"
                        placeholder='Email'
                        className='w-full p-3 mb-4 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder='Password'
                        className='w-full p-3 mb-4 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200'
                    onClick={login}
                >
                    ลงชื่อเข้าใช้งาน
                </button>
            </div>
        </div>
    );
}

export default Login;
