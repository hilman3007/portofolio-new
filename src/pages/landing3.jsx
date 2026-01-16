import { useState } from 'react';
import { Star, Award, TrendingUp, Clock, Heart, MessageCircle, Sparkles, ArrowRight, Check, Menu, X } from 'lucide-react';

export default function ColorfulLanding() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Boost Performance",
      desc: "Increase your productivity by 10x with our smart tools",
      color: "bg-gradient-to-br from-pink-400 to-rose-500",
      shadow: "shadow-pink-500/50"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Save Time",
      desc: "Automate repetitive tasks and focus on what matters",
      color: "bg-gradient-to-br from-purple-400 to-indigo-500",
      shadow: "shadow-purple-500/50"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Love Your Work",
      desc: "Enjoy every moment with our intuitive interface",
      color: "bg-gradient-to-br from-orange-400 to-red-500",
      shadow: "shadow-orange-500/50"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Stay Connected",
      desc: "Collaborate seamlessly with your team anywhere",
      color: "bg-gradient-to-br from-cyan-400 to-blue-500",
      shadow: "shadow-cyan-500/50"
    }
  ];

  const testimonials = [
    {
      name: "Alex Rivera",
      role: "Product Manager",
      company: "TechFlow",
      text: "Absolutely game-changing! Our team's efficiency skyrocketed within weeks.",
      avatar: "bg-gradient-to-br from-pink-400 to-rose-500"
    },
    {
      name: "Jordan Lee",
      role: "Creative Director",
      company: "DesignHub",
      text: "The most intuitive platform I've ever used. Beautiful design meets powerful features!",
      avatar: "bg-gradient-to-br from-purple-400 to-indigo-500"
    },
    {
      name: "Sam Chen",
      role: "Startup Founder",
      company: "InnovateCo",
      text: "This tool paid for itself in the first month. Incredible ROI and support!",
      avatar: "bg-gradient-to-br from-cyan-400 to-blue-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      {/* Decorative blobs */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <div className="fixed top-0 right-0 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      <div className="fixed bottom-0 left-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />

      {/* Navigation */}
      <nav className="relative z-50 bg-white/70 backdrop-blur-xl border-b border-gray-200 sticky top-0">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                NexaFlow
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-700 hover:text-purple-600 font-medium transition">Features</a>
              <a href="#pricing" className="text-gray-700 hover:text-purple-600 font-medium transition">Pricing</a>
              <a href="#testimonials" className="text-gray-700 hover:text-purple-600 font-medium transition">Reviews</a>
              <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              {mobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenu && (
            <div className="md:hidden mt-4 pb-4 space-y-4">
              <a href="#features" className="block text-gray-700 hover:text-purple-600 font-medium">Features</a>
              <a href="#pricing" className="block text-gray-700 hover:text-purple-600 font-medium">Pricing</a>
              <a href="#testimonials" className="block text-gray-700 hover:text-purple-600 font-medium">Reviews</a>
              <button className="w-full px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold">
                Get Started
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-6">
                <Star className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-semibold text-purple-700">Rated 4.9/5 by 10,000+ users</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                  Work Smarter,
                </span>
                <br />
                <span className="text-gray-900">Not Harder</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                The ultimate productivity platform that helps teams achieve more with less effort. Join thousands of happy users today!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all flex items-center justify-center gap-2">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-white text-gray-700 rounded-2xl font-bold text-lg border-2 border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all">
                  Watch Demo
                </button>
              </div>

              <div className="flex items-center gap-8">
                <div className="flex -space-x-3">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className={`w-12 h-12 rounded-full border-4 border-white ${i === 0 ? 'bg-gradient-to-br from-purple-400 to-pink-500' : i === 1 ? 'bg-gradient-to-br from-cyan-400 to-blue-500' : i === 2 ? 'bg-gradient-to-br from-orange-400 to-red-500' : 'bg-gradient-to-br from-green-400 to-emerald-500'}`} />
                  ))}
                </div>
                <div>
                  <div className="font-bold text-gray-900">Join 10,000+ users</div>
                  <div className="text-sm text-gray-600">Already loving NexaFlow</div>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative flex items-center justify-center">
              {/* Floating Cards - Mobile Grid, Desktop Absolute */}
              <div className="grid grid-cols-1 md:hidden gap-6 w-full">
                {/* Mobile Layout */}
                <div className="w-full p-6 bg-white rounded-3xl shadow-2xl shadow-purple-500/20 transform hover:scale-105 transition-all">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mb-4 flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Productivity Up</h3>
                  <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">+300%</div>
                </div>

                <div className="w-full p-6 bg-white rounded-3xl shadow-2xl shadow-cyan-500/20 transform hover:scale-105 transition-all">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl mb-4 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Time Saved</h3>
                  <div className="text-3xl font-black bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">15hrs/week</div>
                </div>

                <div className="w-full p-6 bg-white rounded-3xl shadow-2xl shadow-orange-500/20 transform hover:scale-105 transition-all">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl mb-4 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Satisfaction</h3>
                  <div className="flex gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:block relative w-full h-[500px]">
                {/* Card 1 */}
                <div className="absolute top-0 right-0 w-64 p-6 bg-white rounded-3xl shadow-2xl shadow-purple-500/20 transform hover:scale-105 transition-all rotate-3 hover:rotate-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mb-4 flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Productivity Up</h3>
                  <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">+300%</div>
                </div>

                {/* Card 2 */}
                <div className="absolute top-32 left-0 w-64 p-6 bg-white rounded-3xl shadow-2xl shadow-cyan-500/20 transform hover:scale-105 transition-all -rotate-3 hover:-rotate-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl mb-4 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Time Saved</h3>
                  <div className="text-3xl font-black bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">15hrs/week</div>
                </div>

                {/* Card 3 */}
                <div className="absolute bottom-0 right-12 w-64 p-6 bg-white rounded-3xl shadow-2xl shadow-orange-500/20 transform hover:scale-105 transition-all rotate-2 hover:rotate-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl mb-4 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Satisfaction</h3>
                  <div className="flex gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-purple-100 rounded-full text-purple-700 font-semibold mb-4">
              ✨ Powerful Features
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Everything You Need
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              All the tools you need to supercharge your workflow in one beautiful package
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div 
                key={idx}
                className="group relative p-8 bg-white rounded-3xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-gray-100"
              >
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all ${feature.shadow} group-hover:shadow-xl`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-3xl p-12 text-white shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
              {[
                { value: '10K+', label: 'Active Users' },
                { value: '500K+', label: 'Tasks Completed' },
                { value: '99.9%', label: 'Uptime' },
                { value: '24/7', label: 'Support' }
              ].map((stat, idx) => (
                <div key={idx}>
                  <div className="text-5xl font-black mb-2">{stat.value}</div>
                  <div className="text-purple-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 px-6 bg-gradient-to-b from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Loved by Thousands
            </h2>
            <p className="text-xl text-gray-600">See what our happy users have to say</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div 
                key={idx}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 ${testimonial.avatar} rounded-2xl`} />
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">Choose the plan that's right for you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Basic',
                price: '$19',
                period: '/month',
                features: ['5 team members', '10 GB storage', 'Basic support', 'Core features'],
                color: 'from-purple-100 to-pink-100',
                button: 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
              },
              {
                name: 'Pro',
                price: '$49',
                period: '/month',
                popular: true,
                features: ['20 team members', '100 GB storage', 'Priority support', 'Advanced features', 'Custom integrations'],
                color: 'from-purple-600 to-pink-600',
                button: 'bg-white text-purple-600'
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                period: '',
                features: ['Unlimited members', 'Unlimited storage', '24/7 support', 'All features', 'Custom solutions', 'Dedicated manager'],
                color: 'from-orange-100 to-red-100',
                button: 'bg-gradient-to-r from-orange-600 to-red-600 text-white'
              }
            ].map((plan, idx) => (
              <div 
                key={idx}
                className={`relative p-8 rounded-3xl ${plan.popular ? `bg-gradient-to-br ${plan.color} text-white scale-105` : 'bg-white'} shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-yellow-400 text-gray-900 rounded-full text-sm font-bold shadow-lg">
                    MOST POPULAR
                  </div>
                )}
                
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                <div className="mb-6">
                  <span className={`text-5xl font-black ${plan.popular ? 'text-white' : 'text-gray-900'}`}>{plan.price}</span>
                  <span className={plan.popular ? 'text-purple-100' : 'text-gray-600'}>{plan.period}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className={`w-5 h-5 ${plan.popular ? 'text-yellow-300' : 'text-green-500'}`} />
                      <span className={plan.popular ? 'text-purple-50' : 'text-gray-700'}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-2xl font-bold ${plan.button} hover:scale-105 transition-all shadow-lg`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-3xl p-16 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Ready to Transform Your Workflow?
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Join thousands of teams already using NexaFlow
              </p>
              <button className="px-12 py-5 bg-white text-purple-600 rounded-2xl font-bold text-xl hover:scale-105 transition-all shadow-2xl hover:shadow-white/50">
                Start Your Free Trial
              </button>
              <p className="text-sm text-purple-200 mt-6">No credit card required • 14-day free trial • Cancel anytime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">NexaFlow</span>
              </div>
              <p className="text-gray-400">Making work life easier for everyone.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2024 NexaFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}