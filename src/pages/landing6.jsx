import { useState } from 'react';
import { Leaf, Heart, Shield, Zap, Star, Package, Truck, Award, Instagram, Facebook, Mail, Phone } from 'lucide-react';

export default function JamuHerbalLanding() {
  const [activeProduct, setActiveProduct] = useState('kunyit');

  const products = {
    kunyit: {
      name: 'Jamu Kunyit Asam',
      price: 'Rp 45.000',
      benefits: ['Mencerahkan kulit', 'Melancarkan haid', 'Meningkatkan imun', 'Detoksifikasi tubuh'],
      image: '🥤'
    },
    temulawak: {
      name: 'Jamu Temulawak',
      price: 'Rp 50.000',
      benefits: ['Menjaga kesehatan liver', 'Meningkatkan nafsu makan', 'Anti-inflamasi', 'Menurunkan kolesterol'],
      image: '🥤'
    },
    beras_kencur: {
      name: 'Jamu Beras Kencur',
      price: 'Rp 42.000',
      benefits: ['Menghilangkan pegal-pegal', 'Meningkatkan stamina', 'Melancarkan pencernaan', 'Menghangatkan tubuh'],
      image: '🥤'
    },
    pahitan: {
      name: 'Jamu Pahitan',
      price: 'Rp 48.000',
      benefits: ['Menurunkan gula darah', 'Detoksifikasi', 'Meningkatkan metabolisme', 'Anti-diabetes'],
      image: '🥤'
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-emerald-700 to-teal-800"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-green-500 bg-opacity-30 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Leaf className="w-5 h-5" />
              <span className="font-semibold">100% Alami & Berkhasiat</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Jamu Tradisional untuk <span className="text-green-300">Kesehatan Modern</span>
            </h1>
            
            <p className="text-xl mb-8 text-green-50 leading-relaxed">
              Warisan nenek moyang Indonesia yang terbukti menyehatkan. 
              Dibuat dari bahan-bahan pilihan tanpa bahan kimia berbahaya.
            </p>
            
            <div className="flex gap-4 mb-8">
              <button className="bg-white text-green-700 hover:bg-green-50 px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-2xl">
                Pesan Sekarang
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-green-700 px-8 py-4 rounded-full font-bold transition-all">
                Pelajari Lebih Lanjut
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { icon: <Shield className="w-8 h-8" />, text: 'BPOM Certified' },
                { icon: <Leaf className="w-8 h-8" />, text: '100% Herbal' },
                { icon: <Award className="w-8 h-8" />, text: 'Halal MUI' }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="bg-white bg-opacity-20 backdrop-blur-sm p-3 rounded-full mb-2">
                    {item.icon}
                  </div>
                  <span className="text-sm font-semibold">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white border-opacity-20">
              <div className="text-9xl text-center mb-4">🌿</div>
              <h3 className="text-white text-2xl font-bold text-center mb-2">Jamu Sehat Nusantara</h3>
              <p className="text-green-100 text-center">Resep turun temurun yang dipercaya</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Mengapa Memilih Jamu Kami?</h2>
            <p className="text-xl text-gray-600">Khasiat tradisional dengan standar modern</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Leaf className="w-12 h-12" />,
                title: 'Bahan Alami',
                desc: 'Semua bahan dari alam tanpa pengawet dan bahan kimia',
                color: 'green'
              },
              {
                icon: <Heart className="w-12 h-12" />,
                title: 'Resep Turun Temurun',
                desc: 'Formula rahasia yang telah dipercaya ratusan tahun',
                color: 'red'
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: 'Teruji Klinis',
                desc: 'Lulus uji BPOM dan sertifikasi halal MUI',
                color: 'blue'
              },
              {
                icon: <Zap className="w-12 h-12" />,
                title: 'Khasiat Nyata',
                desc: 'Ribuan testimoni positif dari pelanggan setia',
                color: 'yellow'
              }
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl hover:shadow-xl transition-all transform hover:-translate-y-2"
              >
                <div className={`text-${benefit.color}-600 mb-4`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Produk Unggulan</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Pilih jamu sesuai kebutuhan kesehatan Anda</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-12">
            {Object.keys(products).map((key) => (
              <button
                key={key}
                onClick={() => setActiveProduct(key)}
                className={`p-4 rounded-xl font-semibold transition-all ${
                  activeProduct === key
                    ? 'bg-green-600 text-white shadow-lg scale-105'
                    : 'bg-white text-green-700 border-2 border-green-600 hover:bg-green-50'
                }`}
              >
                {products[key].name}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-12 flex items-center justify-center">
                <div className="text-9xl">{products[activeProduct].image}</div>
              </div>
              
                <div className="p-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{products[activeProduct].name}</h3>
                <p className="text-4xl font-bold text-green-600 mb-6">{products[activeProduct].price}</p>
                
                <h4 className="text-xl font-bold text-gray-900 mb-4">Manfaat:</h4>
                <ul className="space-y-3 mb-8">
                  {products[activeProduct].benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="w-full sm:flex-1 bg-green-600 hover:bg-green-700 text-white py-3 sm:py-4 rounded-xl font-bold transition-all transform hover:scale-105">
                    Beli Sekarang
                  </button>
                  <button className="w-full sm:w-auto border-2 border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 sm:py-4 rounded-xl font-bold transition-all">
                    <Package className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Apa Kata Mereka?</h2>
          <p className="text-center text-green-100 mb-12 text-lg">Ribuan pelanggan puas merasakan khasiatnya</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Ibu Rahma',
                text: 'Setelah rutin minum jamu kunyit asam, kulit saya jadi lebih cerah dan segar. Haid juga lebih lancar!',
                rating: 5
              },
              {
                name: 'Pak Joko',
                text: 'Jamu temulawak sangat membantu menjaga kesehatan liver saya. Napsu makan juga meningkat.',
                rating: 5
              },
              {
                name: 'Dina Kartika',
                text: 'Jamu beras kencur jadi andalan saya setelah olahraga. Pegal-pegal langsung hilang!',
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-2xl border border-white border-opacity-20">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-300 text-yellow-300" />
                  ))}
                </div>
                <p className="text-green-50 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-bold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Siap Hidup Lebih Sehat?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Dapatkan promo spesial untuk pembelian pertama Anda
          </p>
          
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Truck className="w-12 h-12 text-green-600 mx-auto mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Gratis Ongkir</h4>
                <p className="text-gray-600 text-sm">Min. pembelian 100rb</p>
              </div>
              <div className="text-center">
                <Package className="w-12 h-12 text-green-600 mx-auto mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Packing Aman</h4>
                <p className="text-gray-600 text-sm">Dijamin sampai dengan baik</p>
              </div>
              <div className="text-center">
                <Award className="w-12 h-12 text-green-600 mx-auto mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Garansi 100%</h4>
                <p className="text-gray-600 text-sm">Uang kembali jika tidak puas</p>
              </div>
            </div>
          </div>
          
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-12 py-3 sm:py-5 rounded-full text-base sm:text-xl font-bold transition-all transform hover:scale-105 shadow-xl">
            Pesan Sekarang & Dapatkan Diskon 20%
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-green-800 to-emerald-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-8 h-8" />
              <span className="text-2xl font-bold">Jamu Sehat</span>
            </div>
            <p className="text-green-100">
              Melestarikan tradisi kesehatan Indonesia dengan jamu berkualitas tinggi.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Produk</h4>
            <ul className="space-y-2 text-green-100">
              <li><a href="#" className="hover:text-white transition">Jamu Kunyit Asam</a></li>
              <li><a href="#" className="hover:text-white transition">Jamu Temulawak</a></li>
              <li><a href="#" className="hover:text-white transition">Jamu Beras Kencur</a></li>
              <li><a href="#" className="hover:text-white transition">Jamu Pahitan</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Informasi</h4>
            <ul className="space-y-2 text-green-100">
              <li><a href="#" className="hover:text-white transition">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-white transition">Cara Pemesanan</a></li>
              <li><a href="#" className="hover:text-white transition">Sertifikasi</a></li>
              <li><a href="#" className="hover:text-white transition">Kontak</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Hubungi Kami</h4>
            <div className="space-y-3 text-green-100 mb-4">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>0812-9876-5432</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
              <span>info@jamusehat.id</span>
              </div>
            </div>
            <div className="flex gap-3">
              <a href="#" className="bg-green-700 hover:bg-green-600 p-3 rounded-full transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-green-700 hover:bg-green-600 p-3 rounded-full transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-green-700 hover:bg-green-600 p-3 rounded-full transition">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-green-700 text-center text-green-100">
          <p>&copy; 2026 Jamu Sehat Nusantara. Semua hak cipta dilindungi.</p>
        </div>
      </footer>
    </div>
  );
}