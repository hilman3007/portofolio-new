import { useState, useEffect } from 'react';
import { Sparkles, Zap, Shield, Rocket, Star, TrendingUp, Users, ArrowRight, Play, X, ChevronDown } from 'lucide-react';

export default function ProductLanding() {
  const [scrollY, setScrollY] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
      </div>

      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 relative">
          <div 
            className="absolute top-8 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full blur-3xl"
            style={{ transform: `translateY(${scrollY * 0.5}px) translateX(-50%)` }}
          />
          
          <div className="max-w-6xl mx-auto text-center relative">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full mb-8 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-semibold text-purple-300">Launching Revolution 2024</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
                Transform Your
              </span>
              <br />
              <span className="text-white">Business Today</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
              The all-in-one platform that helps 10,000+ companies scale faster with AI-powered automation and insights
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
                <span className="relative z-10 flex items-center gap-2">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              
              <button 
                onClick={() => setShowVideo(true)}
                className="group px-8 py-4 border-2 border-gray-700 rounded-full font-bold text-lg hover:border-purple-500 transition-all hover:bg-purple-500/10 flex items-center gap-2"
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
              {[
                { value: '10K+', label: 'Active Users' },
                { value: '99.9%', label: 'Uptime' },
                { value: '4.9/5', label: 'Rating' }
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-gray-600" />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Powerful Features
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Everything you need to scale your business to the next level
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: 'Lightning Fast',
                  desc: 'Experience blazing speed with our optimized infrastructure',
                  gradient: 'from-yellow-500 to-orange-500'
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: 'Enterprise Security',
                  desc: 'Bank-level encryption keeps your data safe and secure',
                  gradient: 'from-green-500 to-emerald-500'
                },
                {
                  icon: <Rocket className="w-8 h-8" />,
                  title: 'Scale Instantly',
                  desc: 'Grow without limits with our auto-scaling technology',
                  gradient: 'from-blue-500 to-cyan-500'
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: 'Real-time Analytics',
                  desc: 'Make data-driven decisions with live insights',
                  gradient: 'from-purple-500 to-pink-500'
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: 'Team Collaboration',
                  desc: 'Work together seamlessly with built-in collaboration tools',
                  gradient: 'from-red-500 to-rose-500'
                },
                {
                  icon: <Sparkles className="w-8 h-8" />,
                  title: 'AI-Powered',
                  desc: 'Leverage artificial intelligence to automate repetitive tasks',
                  gradient: 'from-indigo-500 to-purple-500'
                }
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="group relative p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.desc}</p>
                  
                  {/* Glow effect on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-32 px-6 bg-gradient-to-b from-purple-900/10 to-transparent">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold mb-6">Trusted by Industry Leaders</h2>
              <p className="text-xl text-gray-400">Join thousands of successful companies</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Sarah Chen',
                  role: 'CEO at TechCorp',
                  text: 'This platform completely transformed how we operate. ROI within 3 months!',
                  rating: 5
                },
                {
                  name: 'Michael Rodriguez',
                  role: 'Founder, StartupXYZ',
                  text: 'The best investment we made this year. Our team productivity increased 300%.',
                  rating: 5
                },
                {
                  name: 'Emily Watson',
                  role: 'CTO at InnovateLabs',
                  text: 'Game-changing technology. The AI features alone are worth the price.',
                  rating: 5
                }
              ].map((testimonial, idx) => (
                <div key={idx} className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-800">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 text-lg">"{testimonial.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full" />
                    <div>
                      <div className="font-bold">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Simple Pricing
                </span>
              </h2>
              <p className="text-xl text-gray-400">Choose the perfect plan for your needs</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Starter',
                  price: '$29',
                  period: '/month',
                  features: ['Up to 10 users', '50 GB storage', 'Basic analytics', 'Email support'],
                  highlighted: false
                },
                {
                  name: 'Pro',
                  price: '$99',
                  period: '/month',
                  features: ['Up to 50 users', '500 GB storage', 'Advanced analytics', 'Priority support', 'Custom integrations'],
                  highlighted: true
                },
                {
                  name: 'Enterprise',
                  price: 'Custom',
                  period: '',
                  features: ['Unlimited users', 'Unlimited storage', 'Custom analytics', '24/7 support', 'Dedicated manager'],
                  highlighted: false
                }
              ].map((plan, idx) => (
                <div
                  key={idx}
                  className={`relative p-8 rounded-2xl border ${
                    plan.highlighted
                      ? 'bg-gradient-to-br from-purple-600/20 to-blue-600/20 border-purple-500 scale-105'
                      : 'bg-gradient-to-br from-gray-900 to-gray-800 border-gray-800'
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-purple-500/20 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-purple-400 rounded-full" />
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-xl font-bold transition-all ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-105'
                      : 'bg-gray-800 hover:bg-gray-700'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 px-6">
          <div className="max-w-4xl mx-auto text-center relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-3xl" />
            <div className="relative p-16 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-3xl border border-gray-800">
              <h2 className="text-5xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-gray-400 mb-8">
                Join 10,000+ companies already using our platform
              </p>
              <button className="px-12 py-5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-bold text-xl hover:scale-105 transition-transform hover:shadow-2xl hover:shadow-purple-500/50">
                Start Your Free Trial
              </button>
              <p className="text-sm text-gray-500 mt-6">No credit card required • 14-day free trial</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-900 py-12 px-6">
          <div className="max-w-7xl mx-auto text-center text-gray-500">
            <p>© 2024 YourBrand. All rights reserved.</p>
          </div>
        </footer>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl mx-6">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-12 right-0 p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="aspect-video bg-gray-900 rounded-2xl flex items-center justify-center">
              <Play className="w-20 h-20 text-gray-600" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}