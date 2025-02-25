import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/home';
import Profile from './pages/profile';
import LoginPage from './pages/loginpage'; // นำเข้า LoginPage
import About from './pages/about';
import Contact from './pages/contact';
import Course from './pages/course';
import Register from './pages/register';

// components
import Footer from './components/footer';
import Navbar from './components/navbar';
import CourseDetail from './components/coursedetail'; // หน้าแสดงรายการโปรแกรม
import DetailCourse from './components/detailcourse'; // หน้ารายละเอียดโปรแกรมแต่ละรายการ

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<LoginPage />} /> {/* ใช้ LoginPage */}
            <Route path="/about" element={<About />} /> 
            <Route path="/contact" element={<Contact/>} />
            <Route path="/register" element={<Register />} /> {/* ใช้ Register */}
            <Route path="/courses" element={<CourseDetail />} /> {/* เส้นทางหลักสำหรับ CourseDetail */}
            <Route path="/course/:id" element={<DetailCourse />} /> {/* เส้นทางตาม programId */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
