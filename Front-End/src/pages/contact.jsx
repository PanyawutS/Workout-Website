import React from 'react';

const Contact = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">ติดต่อเรา</h2>
                
                {/* Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="flex flex-col items-center">
                        <div className="text-xl font-semibold text-gray-800">Email</div>
                        <div className="text-gray-600">contact@company.com</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="text-xl font-semibold text-gray-800">Phone</div>
                        <div className="text-gray-600">+66 123-456-789</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="text-xl font-semibold text-gray-800">Location</div>
                        <div className="text-gray-600">Bangkok, Thailand</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="text-xl font-semibold text-gray-800">Working Hours</div>
                        <div className="text-gray-600">Mon - Fri: 9 AM - 6 PM</div>
                    </div>
                </div>

                {/* Contact Form */}
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input 
                            type="text" 
                            placeholder="ชื่อ" 
                            className="input input-bordered w-full"
                            required 
                        />
                        <input 
                            type="email" 
                            placeholder="อีเมล" 
                            className="input input-bordered w-full"
                            required 
                        />
                    </div>
                    <input 
                        type="text" 
                        placeholder="หัวข้อ" 
                        className="input input-bordered w-full"
                        required 
                    />
                    <textarea 
                        className="textarea textarea-bordered w-full" 
                        placeholder="ข้อความ" 
                        rows="4"
                        required
                    ></textarea>
                    <button type="submit" className="btn btn-primary w-full">ส่งข้อความ</button>
                </form>

                {/* Social Media Links */}
                <div className="flex justify-center space-x-6 mt-8">
                    <a href="#" className="text-gray-500 hover:text-gray-800 transition duration-150">
                        <i className="fab fa-facebook fa-2x"></i>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-800 transition duration-150">
                        <i className="fab fa-twitter fa-2x"></i>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-800 transition duration-150">
                        <i className="fab fa-instagram fa-2x"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
