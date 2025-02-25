import React from 'react';
import '../App.css'
import back from '../images/back.jpg'

function home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative">
                <img 
                    src={back} 
                    alt="Hero Image" 
                    className="w-full h-[400px] object-cover" 
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-white text-4xl font-bold">ENERGYM - ระบบออกกำลังกายส่วนตัว</h1>
                </div>
            </section>

            {/* Categories section */}
            <section className="container mx-auto px-4 py-16">
                <h2 className="text-center text-2xl font-semibold mb-8">หมวดหมู่การฝึกออกกำลังกาย</h2>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center">
                    {[
                        { src: 'https://i.imgur.com/lVZShtH.png', alt: 'โปรแกรมแขน', title: 'โปรแกรมแขน' },
                        { src: 'https://i.imgur.com/SUxvA5Y.png', alt: 'โปรแกรมไหล่', title: 'โปรแกรมไหล่' },
                        { src: 'https://i.imgur.com/aWQq8Wj.png', alt: 'โปรแกรมอก', title: 'โปรแกรมอก' },
                        { src: 'https://i.imgur.com/lrFd4QC.png', alt: 'โปรแกรมขา', title: 'โปรแกรมขา' },
                        { src: 'https://i.imgur.com/WhNvz6q.png', alt: 'โปรแกรมหลัง', title: 'โปรแกรมหลัง' },
                    ].map((item, index) => (
                        <div key={index}>
                            <img 
                                src={item.src} 
                                alt={item.alt} 
                                className="mx-auto w-24 h-24 mb-4" 
                            />
                            <h3 className="font-semibold">{item.title}</h3>
                        </div>
                    ))}
                </div>
            </section>
    </div>


  );
}

export default home;
