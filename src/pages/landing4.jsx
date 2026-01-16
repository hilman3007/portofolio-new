import { useState } from 'react';
import { Coffee, MapPin, Clock, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export default function CoffeeCafeLanding() {
  const [activeMenu, setActiveMenu] = useState('espresso');

  const menuItems = {
    espresso: [
      { name: 'Espresso', price: 'Rp 18.000', desc: 'Shot espresso klasik yang kaya' },
      { name: 'Americano', price: 'Rp 22.000', desc: 'Espresso dengan air panas' },
      { name: 'Cappuccino', price: 'Rp 28.000', desc: 'Espresso, susu, dan foam sempurna' },
      { name: 'Latte', price: 'Rp 30.000', desc: 'Espresso dengan susu steamed lembut' }
    ],
    manual: [
      { name: 'V60', price: 'Rp 25.000', desc: 'Pour over dengan karakteristik clean' },
      { name: 'French Press', price: 'Rp 28.000', desc: 'Body penuh dengan minyak alami' },
      { name: 'Aeropress', price: 'Rp 26.000', desc: 'Smooth dan versatile' },
      { name: 'Cold Brew', price: 'Rp 32.000', desc: 'Diseduh dingin 12 jam' }
    ],
    signature: [
      { name: 'Kopi Susu Gula Aren', price: 'Rp 28.000', desc: 'Kopi susu dengan gula aren asli' },
      { name: 'Es Kopi Susu Tetangga', price: 'Rp 26.000', desc: 'Kopi susu kekinian yang viral' },
      { name: 'Affogato', price: 'Rp 35.000', desc: 'Espresso shot dengan es krim vanilla' },
      { name: 'Spanish Latte', price: 'Rp 32.000', desc: 'Latte dengan susu kental manis' }
    ]
  };

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-amber-900 via-amber-800 to-amber-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <Coffee className="w-20 h-20 mx-auto mb-6 animate-bounce" />
          <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
            Kedai Kopi <span className="text-amber-300">Nusantara</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-amber-100">
            Menyajikan kopi pilihan terbaik dari berbagai daerah Indonesia
          </p>
          <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all transform hover:scale-105 shadow-2xl">
            Pesan Sekarang
          </button>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-amber-900 mb-6">Tentang Kami</h2>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                Kedai Kopi Nusantara hadir untuk menghadirkan pengalaman menikmati kopi berkualitas tinggi 
                dari berbagai daerah di Indonesia. Kami bekerja sama langsung dengan petani kopi lokal 
                untuk memastikan setiap cangkir yang kami sajikan memiliki cita rasa autentik.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Dengan barista berpengalaman dan suasana yang nyaman, kami menciptakan ruang sempurna 
                untuk bekerja, bersantai, atau sekadar menikmati secangkir kopi yang sempurna.
              </p>
            </div>
            <div className="bg-gradient-to-br from-amber-600 to-amber-800 rounded-3xl h-96 flex items-center justify-center shadow-2xl">
              <Coffee className="w-48 h-48 text-white opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 px-4 bg-amber-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-amber-900 mb-12">Menu Kami</h2>
          
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            <button
              onClick={() => setActiveMenu('espresso')}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                activeMenu === 'espresso'
                  ? 'bg-amber-800 text-white shadow-lg transform scale-105'
                  : 'bg-white text-amber-800 hover:bg-amber-100'
              }`}
            >
              Espresso Based
            </button>
            <button
              onClick={() => setActiveMenu('manual')}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                activeMenu === 'manual'
                  ? 'bg-amber-800 text-white shadow-lg transform scale-105'
                  : 'bg-white text-amber-800 hover:bg-amber-100'
              }`}
            >
              Manual Brew
            </button>
            <button
              onClick={() => setActiveMenu('signature')}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                activeMenu === 'signature'
                  ? 'bg-amber-800 text-white shadow-lg transform scale-105'
                  : 'bg-white text-amber-800 hover:bg-amber-100'
              }`}
            >
              Signature
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {menuItems[activeMenu].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <Coffee className="w-12 h-12 text-amber-700 mb-4" />
                <h3 className="text-xl font-bold text-amber-900 mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{item.desc}</p>
                <p className="text-2xl font-bold text-amber-700">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-amber-50 rounded-2xl">
            <MapPin className="w-12 h-12 text-amber-700 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-amber-900 mb-3">Lokasi</h3>
            <p className="text-gray-700">
              Jl. Sudirman No. 123<br />
              Bandung, Jawa Barat<br />
              40123
            </p>
          </div>
          
          <div className="text-center p-8 bg-amber-50 rounded-2xl">
            <Clock className="w-12 h-12 text-amber-700 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-amber-900 mb-3">Jam Buka</h3>
            <p className="text-gray-700">
              Senin - Jumat: 07.00 - 22.00<br />
              Sabtu - Minggu: 08.00 - 23.00
            </p>
          </div>
          
          <div className="text-center p-8 bg-amber-50 rounded-2xl">
            <Phone className="w-12 h-12 text-amber-700 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-amber-900 mb-3">Kontak</h3>
            <p className="text-gray-700">
              <span className="block mb-2">0812-3456-7890</span>
              <span className="block">info@kedaikopinusantara.com</span>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Coffee className="w-6 h-6" />
                Kedai Kopi Nusantara
              </h4>
              <p className="text-amber-100">
                Menyajikan kopi terbaik Indonesia dengan cinta
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-amber-100">
                <li><a href="#" className="hover:text-white transition">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-white transition">Menu</a></li>
                <li><a href="#" className="hover:text-white transition">Galeri</a></li>
                <li><a href="#" className="hover:text-white transition">Kontak</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4">Ikuti Kami</h4>
              <div className="flex gap-4">
                <a href="#" className="bg-amber-800 p-3 rounded-full hover:bg-amber-700 transition">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="bg-amber-800 p-3 rounded-full hover:bg-amber-700 transition">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="bg-amber-800 p-3 rounded-full hover:bg-amber-700 transition">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-amber-800 pt-8 text-center text-amber-100">
            <p>&copy; 2026 Kedai Kopi Nusantara. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}