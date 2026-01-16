import { useState } from 'react';
import { Shirt, ShoppingBag, Star, MapPin, Phone, Instagram, Mail, Heart, Sparkles, Menu, X } from 'lucide-react';

export default function BatikStoreLanding() {
  const [selectedCategory, setSelectedCategory] = useState('pria');
  const [menuOpen, setMenuOpen] = useState(false);

  const products = {
    pria: [
      { name: 'Kemeja Batik Parang', price: 'Rp 285.000', rating: 4.8, image: '👔' },
      { name: 'Batik Slim Fit Kawung', price: 'Rp 320.000', rating: 4.9, image: '👔' },
      { name: 'Batik Megamendung', price: 'Rp 295.000', rating: 4.7, image: '👔' },
      { name: 'Batik Truntum Premium', price: 'Rp 350.000', rating: 5.0, image: '👔' }
    ],
    wanita: [
      { name: 'Dress Batik Modern', price: 'Rp 425.000', rating: 4.9, image: '👗' },
      { name: 'Blouse Batik Encim', price: 'Rp 310.000', rating: 4.8, image: '👗' },
      { name: 'Kaftan Batik Tulis', price: 'Rp 485.000', rating: 5.0, image: '👗' },
      { name: 'Rok Batik Lilit', price: 'Rp 265.000', rating: 4.7, image: '👗' }
    ],
    couple: [
      { name: 'Set Couple Parang', price: 'Rp 580.000', rating: 4.9, image: '👫' },
      { name: 'Couple Batik Modern', price: 'Rp 625.000', rating: 5.0, image: '👫' },
      { name: 'Couple Batik Klasik', price: 'Rp 550.000', rating: 4.8, image: '👫' },
      { name: 'Couple Batik Pesta', price: 'Rp 750.000', rating: 4.9, image: '👫' }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-amber-50">
      {/* Header */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-red-700" />
            <span className="text-2xl font-bold text-red-800">Batik Nusantara</span>
          </div>
          <div className="flex gap-6 items-center">
            <a href="#" className="hidden md:inline text-gray-700 hover:text-red-700 font-medium transition">Beranda</a>
            <a href="#" className="hidden md:inline text-gray-700 hover:text-red-700 font-medium transition">Koleksi</a>
            <a href="#" className="hidden md:inline text-gray-700 hover:text-red-700 font-medium transition">Tentang</a>
            <ShoppingBag className="w-6 h-6 text-red-700 cursor-pointer hover:scale-110 transition" />
            <button 
              className="md:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4 space-y-4">
              <a href="#" className="block text-gray-700 hover:text-red-700 font-medium">Beranda</a>
              <a href="#" className="block text-gray-700 hover:text-red-700 font-medium">Koleksi</a>
              <a href="#" className="block text-gray-700 hover:text-red-700 font-medium">Tentang</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-amber-700 opacity-10"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-red-300 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-300 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-full mb-4 font-semibold">
              🎉 Koleksi Terbaru 2026
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Keindahan <span className="text-red-700">Batik Indonesia</span> dalam Setiap Helai
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Batik tulis dan cap berkualitas tinggi dari pengrajin terbaik Indonesia. 
              Lestarikan budaya dengan gaya modern yang memukau.
            </p>
            <div className="flex gap-4">
              <button className="bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
                Belanja Sekarang
              </button>
              <button className="border-2 border-red-700 text-red-700 hover:bg-red-50 px-8 py-4 rounded-lg font-semibold transition-all">
                Lihat Katalog
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-red-600 to-amber-600 rounded-3xl p-8 shadow-2xl transform hover:rotate-2 transition-transform duration-300">
              <Shirt className="w-full h-64 text-white opacity-80" />
            </div>
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-bold shadow-lg">
              Gratis Ongkir!
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: '✨', title: 'Batik Asli', desc: '100% batik tulis & cap asli' },
            { icon: '🚚', title: 'Gratis Ongkir', desc: 'Untuk pembelian min. 500rb' },
            { icon: '💯', title: 'Garansi Kualitas', desc: 'Tukar barang 7 hari' },
            { icon: '🎁', title: 'Packing Eksklusif', desc: 'Kemasan mewah & rapi' }
          ].map((item, index) => (
            <div key={index} className="text-center p-6 rounded-xl hover:bg-red-50 transition">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Koleksi Pilihan</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Batik berkualitas untuk setiap momen istimewa Anda</p>
          
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {['pria', 'wanita', 'couple'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-red-700 text-white shadow-lg transform scale-105'
                    : 'bg-white text-red-700 border-2 border-red-700 hover:bg-red-50'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products[selectedCategory].map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 group"
              >
                <div className="bg-gradient-to-br from-red-100 to-amber-100 h-48 flex items-center justify-center text-7xl relative overflow-hidden">
                  {product.image}
                  <Heart className="absolute top-4 right-4 w-6 h-6 text-gray-400 group-hover:text-red-500 cursor-pointer transition" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold text-gray-700">{product.rating}</span>
                    <span className="text-sm text-gray-500 ml-1">(50+ terjual)</span>
                  </div>
                  <p className="text-2xl font-bold text-red-700 mb-4">{product.price}</p>
                  <button className="w-full bg-red-700 hover:bg-red-800 text-white py-3 rounded-lg font-semibold transition">
                    Beli Sekarang
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Testimoni Pelanggan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Ibu Siti', text: 'Batiknya bagus banget! Bahan adem dan motifnya elegan. Cocok untuk acara formal.', rating: 5 },
              { name: 'Bapak Budi', text: 'Pelayanan ramah, pengiriman cepat. Batiknya original dan kualitas premium.', rating: 5 },
              { name: 'Dina Pertiwi', text: 'Sudah langganan di sini. Koleksinya selalu update dan harganya reasonable!', rating: 5 }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-red-50 to-amber-50 p-8 rounded-2xl shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-bold text-gray-900">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-red-900 to-red-800 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6" />
              <span className="text-2xl font-bold">Batik Nusantara</span>
            </div>
            <p className="text-red-100 mb-4">Melestarikan warisan budaya Indonesia melalui batik berkualitas tinggi.</p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Informasi</h4>
            <ul className="space-y-2 text-red-100">
              <li><a href="#" className="hover:text-white transition">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-white transition">Cara Pemesanan</a></li>
              <li><a href="#" className="hover:text-white transition">Kebijakan Privasi</a></li>
              <li><a href="#" className="hover:text-white transition">Syarat & Ketentuan</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Kontak</h4>
            <div className="space-y-3 text-red-100">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Yogyakarta, Indonesia</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>0812-3456-7890</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>info@batiknusantara.id</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Ikuti Kami</h4>
            <div className="flex gap-3">
              <a href="#" className="bg-red-800 hover:bg-red-700 p-3 rounded-full transition">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="bg-red-800 hover:bg-red-700 p-3 rounded-full transition">
                <Mail className="w-6 h-6" />
              </a>
              <a href="#" className="bg-red-800 hover:bg-red-700 p-3 rounded-full transition">
                <ShoppingBag className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-red-700 text-center text-red-100">
          <p>&copy; 2026 Batik Nusantara. Seluruh hak cipta dilindungi.</p>
        </div>
      </footer>
    </div>
  );
}