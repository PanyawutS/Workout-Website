import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Userdetail = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    age: '',
    height: '',
    weight: '',
    goal: '',
  });

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [tempFormData, setTempFormData] = useState({ ...formData });

  const navigate = useNavigate();

  useEffect(() => {
    // ดึงข้อมูล user จาก localStorage
    const userData = JSON.parse(localStorage.getItem('user'));

    if (userData) {
      setFormData({
        ...formData,
        username: userData.username,
        email: userData.email,
      });
    }

    // ดึงข้อมูลฟอร์มที่บันทึกไว้ (ถ้ามี)
    const savedFormData = JSON.parse(localStorage.getItem('formData'));
    if (savedFormData) {
      setFormData((prev) => ({ ...prev, ...savedFormData }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // บันทึกข้อมูลฟอร์มลงใน localStorage
    localStorage.setItem('formData', JSON.stringify(formData));

    // สุ่มเลือก id ของโปรแกรมออกกำลังกาย
    const randomCourseIds = ['1', '2', '3', '4', '5', '6'];
    const randomId = randomCourseIds[Math.floor(Math.random() * randomCourseIds.length)];

    // นำ id ที่สุ่มได้ไปยังหน้า detailcourse
    navigate(`/course/${randomId}`);
  };

  // เปิดโมดัลแก้ไขฟอร์ม
  const handleEditClick = () => {
    setTempFormData(formData); // นำข้อมูลจากฟอร์มหลักไปแสดงในโมดัล
    setIsEditModalOpen(true); // เปิดโมดัล
  };

  // ปิดโมดัลแก้ไขฟอร์ม
  const handleModalClose = () => {
    setIsEditModalOpen(false);
  };

  // อัปเดตข้อมูลในโมดัล
  const handleTempChange = (e) => {
    const { name, value } = e.target;
    setTempFormData({ ...tempFormData, [name]: value });
  };

  // บันทึกข้อมูลจากโมดัลลงฟอร์มหลัก
  const handleModalSave = () => {
    setFormData(tempFormData);
    localStorage.setItem('formData', JSON.stringify(tempFormData)); // อัปเดตข้อมูลใน localStorage
    setIsEditModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form onSubmit={handleFormSubmit} className="bg-white p-8 rounded-xl shadow-lg max-w-lg w-full">
        <h2 className="text-gray-900 text-center text-3xl font-bold mb-8">ข้อมูลของคุณ</h2>

        {/* ชื่อ */}
        <div className="mb-6 text-left">
          <label className="block text-sm font-medium text-gray-700 mb-2 text-left">ชื่อ :</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            readOnly
            className="input input-bordered w-full bg-gray-100 text-gray-700 cursor-not-allowed"
          />
        </div>

        {/* อายุ */}
        <div className="mb-6 text-left">
          <label className="block text-sm font-medium text-gray-700 mb-2">อายุ :</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            min="1"
            required
            className="input input-bordered w-full bg-gray-50 text-gray-700"
          />
        </div>

        {/* ส่วนสูงและน้ำหนัก */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-left">
            <label className="block text-sm font-medium text-gray-700 mb-2">ส่วนสูง (ซม.) :</label>
            <input
              type="number"
              name="height"
              value={formData.height}
              onChange={handleChange}
              min="1"
              required
              className="input input-bordered w-full bg-gray-50 text-gray-700"
            />
          </div>
          <div className="text-left">
            <label className="block text-sm font-medium text-gray-700 mb-2">น้ำหนัก (กก.) :</label>
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              min="1"
              required
              className="input input-bordered w-full bg-gray-50 text-gray-700"
            />
          </div>
        </div>

        {/* เป้าหมายการออกกำลังกาย */}
        <div className="mb-6 text-left">
          <label className="block text-sm font-medium text-gray-700 mb-2">เป้าหมายการออกกำลังกาย :</label>
          <select
            name="goal"
            value={formData.goal}
            onChange={handleChange}
            required
            className="select select-bordered w-full bg-gray-50 text-gray-700"
          >
            <option value="">เลือกเป้าหมาย</option>
            <option value="ลดน้ำหนัก">ลดน้ำหนัก</option>
            <option value="เพิ่มกล้ามเนื้อ">เพิ่มกล้ามเนื้อ</option>
            <option value="เพิ่มความแข็งแรง">เพิ่มความแข็งแรง</option>
            <option value="ปรับปรุงสุขภาพทั่วไป">ปรับปรุงสุขภาพทั่วไป</option>
          </select>
        </div>

        {/* ปุ่ม */}
        <div className="flex justify-between space-x-4">
          <button type="button" onClick={handleEditClick} className="btn btn-outline btn-secondary w-1/2">
            แก้ไข
          </button>
          <button type="submit" className="btn btn-outline btn-accent w-1/2">
            สร้างแผนออกกำลังกาย
          </button>
        </div>
      </form>

      {/* Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">แก้ไขข้อมูล</h3>

            {/* ฟอร์มใน Modal */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">อายุ :</label>
              <input
                type="number"
                name="age"
                value={tempFormData.age}
                onChange={handleTempChange}
                min="1"
                className="input input-bordered w-full bg-gray-50"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">ส่วนสูง (ซม.) :</label>
                <input
                  type="number"
                  name="height"
                  value={tempFormData.height}
                  onChange={handleTempChange}
                  min="1"
                  className="input input-bordered w-full bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">น้ำหนัก (กก.) :</label>
                <input
                  type="number"
                  name="weight"
                  value={tempFormData.weight}
                  onChange={handleTempChange}
                  min="1"
                  className="input input-bordered w-full bg-gray-50"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">เป้าหมายการออกกำลังกาย :</label>
              <select
                name="goal"
                value={tempFormData.goal}
                onChange={handleTempChange}
                className="select select-bordered w-full bg-gray-50"
              >
                <option value="">เลือกเป้าหมาย</option>
                <option value="ลดน้ำหนัก">ลดน้ำหนัก</option>
                <option value="เพิ่มกล้ามเนื้อ">เพิ่มกล้ามเนื้อ</option>
                <option value="เพิ่มความแข็งแรง">เพิ่มความแข็งแรง</option>
                <option value="ปรับปรุงสุขภาพทั่วไป">ปรับปรุงสุขภาพทั่วไป</option>
              </select>
            </div>

            {/* ปุ่มใน Modal */}
            <div className="flex justify-end space-x-4">
              <button onClick={handleModalClose} className="btn btn-secondary">
                ยกเลิก
              </button>
              <button onClick={handleModalSave} className="btn btn-accent">
                บันทึก
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Userdetail;
