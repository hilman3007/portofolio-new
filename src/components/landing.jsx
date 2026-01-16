import { ArrowRight, Check, Star, Zap } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header/Navbar */}
      <nav className="bg-white/80 backdrop-blur-sm shadow-sm fixed w-full z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Example
            </span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition">Fitur</a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition">Harga</a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition">Testimoni</a>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Mulai Sekarang
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
            ✨ Solusi Terbaik untuk Bisnis Anda
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Tingkatkan Produktivitas
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Dengan Mudah
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Platform all-in-one yang membantu bisnis Anda tumbuh lebih cepat dengan tools yang powerful dan mudah digunakan.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition flex items-center gap-2 text-lg font-semibold shadow-lg hover:shadow-xl">
              Coba Gratis 14 Hari
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-white text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition border-2 border-gray-200 text-lg font-semibold">
              Lihat Demo
            </button>
          </div>
          <div className="mt-12 flex justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              Tanpa Kartu Kredit
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              Setup 5 Menit
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              Cancel Kapan Saja
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Fitur Unggulan</h2>
            <p className="text-xl text-gray-600">Semua yang Anda butuhkan dalam satu platform</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Analytics Real-time",
                desc: "Monitor performa bisnis Anda secara real-time dengan dashboard yang intuitif",
                icon: "📊"
              },
              {
                title: "Automasi Cerdas",
                desc: "Hemat waktu dengan automasi task berulang menggunakan AI",
                icon: "🤖"
              },
              {
                title: "Kolaborasi Tim",
                desc: "Bekerja bersama tim dengan tools kolaborasi yang powerful",
                icon: "👥"
              },
              {
                title: "Keamanan Terjamin",
                desc: "Data Anda aman dengan enkripsi end-to-end dan backup otomatis",
                icon: "🔒"
              },
              {
                title: "Integrasi Mudah",
                desc: "Terhubung dengan 100+ aplikasi favorit Anda dalam sekali klik",
                icon: "🔗"
              },
              {
                title: "Support 24/7",
                desc: "Tim support kami siap membantu Anda kapan saja",
                icon: "💬"
              }
            ].map((feature, idx) => (
              <div key={idx} className="p-6 rounded-xl border-2 border-gray-100 hover:border-blue-200 hover:shadow-lg transition">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pilih Paket Anda</h2>
            <p className="text-xl text-gray-600">Harga transparan, tanpa biaya tersembunyi</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-blue-300 transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
              <p className="text-gray-600 mb-6">Untuk individu dan tim kecil</p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-900">Rp 99K</span>
                <span className="text-gray-600">/bulan</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">5 Pengguna</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">10 GB Storage</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Basic Support</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Analytics Dasar</span>
                </li>
              </ul>
              <button className="w-full bg-gray-100 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-200 transition font-semibold">
                Mulai Starter
              </button>
            </div>

            {/* Professional - Popular */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-2xl text-white transform scale-105 shadow-2xl">
              <div className="bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                PALING POPULER
              </div>
              <h3 className="text-2xl font-bold mb-2">Professional</h3>
              <p className="text-blue-100 mb-6">Untuk tim yang sedang berkembang</p>
              <div className="mb-6">
                <span className="text-5xl font-bold">Rp 299K</span>
                <span className="text-blue-100">/bulan</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-yellow-300" />
                  <span>20 Pengguna</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-yellow-300" />
                  <span>100 GB Storage</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-yellow-300" />
                  <span>Priority Support</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-yellow-300" />
                  <span>Analytics Advanced</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-yellow-300" />
                  <span>Custom Integrasi</span>
                </li>
              </ul>
              <button className="w-full bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition font-semibold">
                Mulai Professional
              </button>
            </div>

            {/* Enterprise */}
            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-blue-300 transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <p className="text-gray-600 mb-6">Untuk perusahaan besar</p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-900">Custom</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Unlimited Pengguna</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Unlimited Storage</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Dedicated Support</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Custom Features</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">SLA Guarantee</span>
                </li>
              </ul>
              <button className="w-full bg-gray-100 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-200 transition font-semibold">
                Hubungi Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Apa Kata Mereka</h2>
            <p className="text-xl text-gray-600">Dipercaya oleh ribuan bisnis di Indonesia</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Budi Santoso", role: "CEO, TechStart", text: "Platform ini benar-benar mengubah cara kami bekerja. Produktivitas meningkat 200%!" },
              { name: "Siti Rahma", role: "Founder, DigitalCo", text: "Implementasi yang mudah dan support yang luar biasa. Highly recommended!" },
              { name: "Andi Wijaya", role: "CTO, InnovateLab", text: "Best investment untuk bisnis kami. ROI tercapai dalam 3 bulan pertama." }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Siap Untuk Memulai?</h2>
          <p className="text-xl mb-8 opacity-90">
            Bergabunglah dengan ribuan bisnis yang sudah berkembang bersama kami
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold shadow-xl">
            Mulai Gratis Sekarang
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="w-6 h-6" />
            <span className="text-xl font-bold">Example</span>
          </div>
          <p className="text-gray-400 mb-6">© 2024 Example. All rights reserved.</p>
          <div className="flex justify-center gap-6 text-gray-400">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}