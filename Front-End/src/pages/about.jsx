import React from 'react';

const About = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <main className="container mx-auto px-4 py-8 flex-1">
                <div className="relative flex items-center justify-center mt-10 mb-10">
                    <h1 className="text-black text-2xl font-bold">ทีมผู้จัดทำเว็บไซต์</h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* สมาชิกที่ 1 */}
                    <div className="card bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="flex flex-col items-center text-center p-6">
                            <img src="https://i.imgur.com/TW26EaU.png" alt="Mr.Zico" className="w-48 h-48 object-cover rounded-full mb-4" />
                            <h3 className="text-xl font-semibold">Mr.Zico</h3>
                            <p className="text-m text-gray-600">ผู้พัฒนา Back-end</p>
                        </div>
                    </div>

                    {/* สมาชิกที่ 2 */}
                    <div className="card bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="flex flex-col items-center text-center p-6">
                            <img src="https://i.imgur.com/ixVTCFJ.png" alt="Mr.Looktao" className="w-48 h-48 object-cover rounded-full mb-4" />
                            <h3 className="text-xl font-semibold">Mr.Looktao</h3>
                            <p className="text-m text-gray-600">ผู้พัฒนา Front-end</p>
                        </div>
                    </div>

                    {/* สมาชิกที่ 3 */}
                    <div className="card bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="flex flex-col items-center text-center p-6">
                            <img src="https://i.imgur.com/9l3RZRE.png" alt="Mr.Auto" className="w-48 h-48 object-cover rounded-full mb-4" />
                            <h3 className="text-xl font-semibold">Mr.Auto</h3>
                            <p className="text-m text-gray-600">นักออกแบบ UI/UX</p>
                        </div>
                    </div>

                    {/* สมาชิกที่ 4 */}
                    <div className="card bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="flex flex-col items-center text-center p-6">
                            <img src="https://i.imgur.com/a6xx0Ur.png" alt="Mr.Punnie" className="w-48 h-48 object-cover rounded-full mb-4" />
                            <h3 className="text-xl font-semibold">Mr.Punnie</h3>
                            <p className="text-m text-gray-600">ผู้พัฒนา Front-end</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>



    );
};

export default About;
