/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ChevronRight, 
  ChevronDown, 
  Plus, 
  Minus,
  Truck,
  ShieldCheck,
  Clock,
  Settings,
  Headphones,
  Zap,
  MessageCircle,
  Instagram
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm gap-2">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Phone size={14} />
            <span>Call us now: 093136 91209</span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Mail size={14} />
          <span>vimalradiosales@gmail.com</span>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="px-4 md:px-8 py-2 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img 
            src="input_file_0.png" 
            alt="Vimal Electronics Logo" 
            className="h-12 md:h-16 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl font-bold text-primary leading-tight">
              VIMAL ELECTRONICS
            </h1>
            <p className="text-[10px] font-semibold tracking-widest text-slate-500 uppercase">Electronics | Mobiles | Kitchen</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium text-slate-700">
          <a href="#" className="hover:text-primary transition-colors">Home</a>
          <a href="#about" className="hover:text-primary transition-colors">About Us</a>
          <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          <a href="tel:09313691209" className="bg-primary text-white px-6 py-2 rounded-full hover:bg-red-700 transition-all flex items-center gap-2 shadow-md">
            <Phone size={16} /> 093136 91209
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4 font-medium">
              <a href="#" onClick={() => setIsOpen(false)}>Home</a>
              <a href="#about" onClick={() => setIsOpen(false)}>About Us</a>
              <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
              <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: "input_file_7.png",
      title: "Vimal Electronics",
      subtitle: "Trusted since 1986. Your one-stop shop for all electronics in Vastral, Ahmedabad.",
      details: ["35+ Years of Trust", "Authorized Dealer", "Best After-Sales Support"]
    },
    {
      image: "input_file_1.png",
      title: "Smart Entertainment",
      subtitle: "Experience the future with our latest range of 4K Smart TVs and Sound Systems.",
      details: ["QLED & OLED Displays", "Dolby Atmos Sound", "Top Brands: Samsung, Sony, LG"]
    },
    {
      image: "input_file_2.png",
      title: "Premium Refrigeration",
      subtitle: "Keep your food fresh with energy-efficient refrigerators from world-class brands.",
      details: ["Convertible Technology", "Energy Star Rated", "Double & Side-by-Side Doors"]
    },
    {
      image: "input_file_3.png",
      title: "Kitchen Essentials",
      subtitle: "Upgrade your kitchen with high-performance mixers, grinders, and ovens.",
      details: ["Heavy Duty Motors", "Stainless Steel Jars", "Modern Designs"]
    },
    {
      image: "input_file_4.png",
      title: "Home Comfort",
      subtitle: "Stay cool and comfortable with our wide range of fans and air coolers.",
      details: ["High Air Delivery", "Silent Operation", "Decorative Designs"]
    },
    {
      image: "input_file_5.png",
      title: "Water Solutions",
      subtitle: "Pure and safe drinking water with our advanced RO and UV water purifiers.",
      details: ["Multi-stage Purification", "Mineral Addition", "Low Maintenance"]
    },
    {
      image: "input_file_6.png",
      title: "Washing Solutions",
      subtitle: "Gentle on clothes, tough on stains. Explore our washing machine collection.",
      details: ["Front & Top Load", "Inverter Technology", "Quick Wash Features"]
    },
    {
      image: "https://picsum.photos/seed/mobiles/1920/1080",
      title: "Latest Mobiles",
      subtitle: "Stay connected with the newest smartphones from top brands at the lowest prices.",
      details: ["5G Ready", "Exchange Offers", "Lowest EMI Range"]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-slide
  React.useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[450px] md:h-[650px] overflow-hidden bg-slate-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <img 
            src={slides[currentSlide].image} 
            alt={slides[currentSlide].title} 
            className="w-full h-full object-cover opacity-70"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent flex items-center px-8 md:px-24">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="max-w-2xl text-white"
            >
              <h2 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">{slides[currentSlide].title}</h2>
              <p className="text-lg md:text-2xl mb-6 opacity-90 leading-relaxed">{slides[currentSlide].subtitle}</p>
              
              <div className="flex flex-wrap gap-3 mb-10">
                {slides[currentSlide].details?.map((detail, idx) => (
                  <span key={idx} className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium border border-white/30">
                    {detail}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <button className="bg-primary hover:bg-red-700 text-white px-8 py-4 rounded font-bold transition-all flex items-center gap-2 text-lg shadow-lg">
                  Shop Now <ChevronRight size={24} />
                </button>
                <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded font-bold transition-all text-lg">
                  Our Services
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center backdrop-blur-sm transition-all z-10"
      >
        <ChevronDown className="rotate-90" size={24} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center backdrop-blur-sm transition-all z-10"
      >
        <ChevronDown className="-rotate-90" size={24} />
      </button>

      {/* Slider Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-2 transition-all rounded-full ${currentSlide === i ? 'w-8 bg-primary' : 'w-2 bg-white/50'}`}
          />
        ))}
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-16 px-8 md:px-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-800">About Us</h2>
          <p className="text-primary font-bold mb-6 uppercase tracking-widest">Topmost & Trusted Electronics Showroom</p>
          <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
            <p>
              Vimal Electronics is a trusted Electronics showroom in Vastral, Ahmedabad, Since 1986 with over 20,000+ happy & satisfied customers. We deal in all Electronics Appliances in the Big Brands.
            </p>
            <p>
              Our diverse range of appliances includes kitchen essentials, entertainment systems, smart home solutions, and more, ensuring convenience and efficiency in every home. Whether you're looking for the latest smart TVs, energy-efficient refrigerators, or high-performance washing machines, Vimal Electronics has you covered.
            </p>
            <p>
              With a customer-first approach, we prioritize affordability, durability, and top-tier service. Our team of experts is dedicated to helping you find the perfect appliances to suit your needs.
            </p>
            <p className="font-bold text-slate-800">
              Choose Vimal Electronics — where technology meets comfort!
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/seed/showroom/800/1000" 
              alt="Vimal Electronics Showroom" 
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative elements for desktop */}
          <div className="absolute -bottom-8 -right-8 bg-primary text-white p-8 rounded-2xl shadow-2xl z-20">
            <div className="text-5xl font-bold mb-1">35+</div>
            <div className="text-sm font-semibold uppercase tracking-widest opacity-90">Years of<br/>Excellence</div>
          </div>
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-slate-100 rounded-2xl -z-10"></div>
          <div className="absolute top-1/2 -right-12 w-24 h-24 bg-primary/10 rounded-full blur-2xl -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const [activeTab, setActiveTab] = useState<number | null>(0);

  const reasons = [
    {
      title: "Wide Range of Products",
      content: "From smart TVs and refrigerators to kitchen appliances and home essentials, we offer a diverse selection to meet every need."
    },
    {
      title: "Quality & Reliability",
      content: "We source only the best brands and products to ensure long-lasting performance and reliability for our customers."
    },
    {
      title: "Affordable Pricing",
      content: "Get premium electronics at competitive prices. We believe in providing value for money without compromising on quality."
    },
    {
      title: "Customer-Centric Approach",
      content: "Our customers are at the heart of everything we do. We provide personalized recommendations and support."
    },
    {
      title: "After-Sales Support",
      content: "Our relationship doesn't end at the sale. We offer comprehensive after-sales service and maintenance."
    },
    {
      title: "Facilities & Amenities",
      content: "We offer Free Wi-Fi, wheelchair-accessible entrance and parking, gender-neutral toilets, and an LGBTQ+ friendly environment."
    }
  ];

  return (
    <section className="py-16 bg-primary text-white px-8 md:px-24 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us?</h2>
        <p className="mb-12 opacity-90">At Vimal Electronics, we take pride in being a trusted name in electronic home appliances. Here's why our customers continue to choose us:</p>
        
        <div className="grid lg:grid-cols-2 gap-x-12 gap-y-4">
          {reasons.map((reason, index) => (
            <div key={index} className="border-b border-white/20 pb-4">
              <button 
                className="w-full flex justify-between items-center text-left font-semibold text-xl py-2 hover:opacity-80 transition-opacity"
                onClick={() => setActiveTab(activeTab === index ? null : index)}
              >
                <span className="flex items-center gap-3">
                  <span className="text-sm opacity-50 font-mono">0{index + 1}</span>
                  {reason.title}
                </span>
                {activeTab === index ? <Minus size={20} /> : <Plus size={20} />}
              </button>
              <AnimatePresence>
                {activeTab === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="py-4 opacity-90 leading-relaxed text-lg">{reason.content}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const ServicesGraphic = () => {
  return (
    <section id="services" className="py-20 px-8 md:px-24 bg-slate-50 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          {/* Circular Graphic Mockup */}
          <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] rounded-full border-8 border-white shadow-2xl flex items-center justify-center bg-white">
            <div className="absolute inset-0 rounded-full border-[40px] border-slate-100"></div>
            
            {/* Center Logo */}
            <div className="z-10 bg-white p-4 rounded-full shadow-lg text-center">
              <div className="text-primary font-bold text-xl italic">V</div>
              <div className="text-[8px] font-bold">VIMAL</div>
            </div>

            {/* Segments (Simplified representation) */}
            <div className="absolute inset-0 flex items-center justify-center">
              {[
                { label: "Wide Range", color: "bg-emerald-400", pos: "top-0 left-1/4" },
                { label: "Quality", color: "bg-orange-400", pos: "top-0 right-1/4" },
                { label: "Affordable", color: "bg-orange-500", pos: "right-0 top-1/3" },
                { label: "Customer Centric", color: "bg-pink-500", pos: "right-0 bottom-1/3" },
                { label: "Innovation", color: "bg-purple-500", pos: "bottom-0 right-1/4" },
                { label: "Easy Returns", color: "bg-blue-500", pos: "bottom-0 left-1/4" },
                { label: "After-Sales", color: "bg-cyan-500", pos: "left-0 bottom-1/3" },
                { label: "Technical Assistance", color: "bg-teal-500", pos: "left-0 top-1/3" },
              ].map((item, i) => (
                <div key={i} className={`absolute ${item.pos} w-24 text-center`}>
                   <div className={`h-1 w-full ${item.color} mb-1`}></div>
                   <span className="text-[10px] font-bold uppercase text-slate-600">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-slate-800">Our Services & Support</h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            At Vimal Electronics, we go beyond just selling electronic home appliances—we provide comprehensive services and support to ensure a seamless experience for our customers.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 p-2 rounded text-primary"><Headphones size={20} /></div>
              <div>
                <h4 className="font-bold text-slate-800">24/7 Support</h4>
                <p className="text-sm text-slate-500">Expert assistance anytime.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 p-2 rounded text-primary"><Settings size={20} /></div>
              <div>
                <h4 className="font-bold text-slate-800">Installation</h4>
                <p className="text-sm text-slate-500">Professional setup services.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 p-2 rounded text-primary"><ShieldCheck size={20} /></div>
              <div>
                <h4 className="font-bold text-slate-800">Warranty</h4>
                <p className="text-sm text-slate-500">Secure product protection.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 p-2 rounded text-primary"><Zap size={20} /></div>
              <div>
                <h4 className="font-bold text-slate-800">Fast Repair</h4>
                <p className="text-sm text-slate-500">Quick turnaround times.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  return (
    <section className="py-20 px-8 md:px-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-slate-800">How Vimal Electronics Works</h2>
          <p className="text-slate-500 mb-16 max-w-2xl mx-auto">At Vimal Electronics, we follow a simple and efficient process to deliver the best electronic home appliances to our customers. Here's how we work:</p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Clock className="text-primary" size={48} />,
              title: "Fast & Reliable Delivery",
              desc: "Once your order is confirmed, we ensure timely and safe delivery to your doorstep. Installation services are available for select products."
            },
            {
              icon: <Truck className="text-primary" size={48} />,
              title: "Quality Check",
              desc: "Every product undergoes a rigorous quality check before being dispatched to ensure it meets our high standards."
            },
            {
              icon: <MessageCircle className="text-primary" size={48} />,
              title: "Expert Consultation",
              desc: "Not sure what to buy? Our experts are available to guide you through our product range to find the perfect fit."
            }
          ].map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="flex justify-center mb-6">{step.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-slate-800">{step.title}</h3>
              <p className="text-slate-500 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  const reviews = [
    {
      name: "Rajesh Patel",
      time: "2 months ago",
      stars: 5,
      text: "Best electronics shop in Ahmedabad. I have been buying from Vimal Electronics for over 20 years. Their after-sales service is excellent and prices are very affordable.",
      img: "https://picsum.photos/seed/user1/100/100"
    },
    {
      name: "Sneha Sharma",
      time: "1 month ago",
      stars: 5,
      text: "Good collection of kitchen appliances. The staff is very polite and helpful. They guided me perfectly for my new refrigerator. Fast installation too!",
      img: "https://picsum.photos/seed/user2/100/100"
    },
    {
      name: "Amit Shah",
      time: "3 weeks ago",
      stars: 5,
      text: "Trusted shop with honest pricing. They offer 0% finance options which made it easy for me to buy a smart TV. Highly recommended for anyone in Vastral.",
      img: "https://picsum.photos/seed/user3/100/100"
    },
    {
      name: "Priya Mehta",
      time: "5 days ago",
      stars: 5,
      text: "Excellent service and best offers. The owner is very helpful and provides professional guidance. Doorstep delivery was very quick.",
      img: "https://picsum.photos/seed/user4/100/100"
    }
  ];

  return (
    <section className="py-20 px-8 md:px-24 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-slate-800">Customer Reviews</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-slate-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <img src={review.img} alt={review.name} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">{review.name}</h4>
                  <p className="text-[10px] text-slate-400">{review.time}</p>
                </div>
              </div>
              <div className="flex text-orange-400 mb-3">
                {[...Array(review.stars)].map((_, i) => (
                  <Zap key={i} size={12} fill="currentColor" />
                ))}
              </div>
              <p className="text-slate-600 text-xs leading-relaxed italic">"{review.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const InquiryForm = () => {
  return (
    <section className="py-20 bg-primary text-white px-8 md:px-24 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6">Inquiry Form</h2>
          <p className="text-xl mb-8 opacity-90">Whether you have a question about services, pricing, need a demo, or anything else, our team is ready to answer all your questions.</p>
          
          <form className="space-y-4">
            <input 
              type="text" 
              placeholder="Full Name" 
              className="w-full p-4 rounded bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full p-4 rounded bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input 
              type="tel" 
              placeholder="Phone Number" 
              className="w-full p-4 rounded bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea 
              placeholder="Your Message" 
              rows={4}
              className="w-full p-4 rounded bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded transition-colors uppercase tracking-widest">
              Send Message
            </button>
          </form>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[400px] md:h-[500px] hidden md:block"
        >
           <img 
            src="https://picsum.photos/seed/appliances/800/1000" 
            alt="Appliances" 
            className="w-full h-full object-cover rounded-lg shadow-2xl"
            referrerPolicy="no-referrer"
           />
           <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded shadow-lg">
              <div className="text-primary font-bold">Premium Quality</div>
              <div className="text-slate-500 text-xs">Guaranteed Performance</div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

const OffersAndPayments = () => {
  return (
    <section className="py-20 px-8 md:px-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-slate-800 flex items-center gap-2">
            <Zap className="text-primary" /> Offers & Benefits
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "0% Finance Options",
              "Best Prices Guaranteed",
              "Lowest EMI from ₹1000*",
              "Special Festive Offers",
              "Cashback on Credit Cards",
              "Free Home Delivery"
            ].map((offer, i) => (
              <div key={i} className="flex items-center gap-2 p-4 bg-slate-50 rounded-lg border border-slate-100">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm font-medium text-slate-700">{offer}</span>
              </div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-slate-800 flex items-center gap-2">
            <ShieldCheck className="text-primary" /> Payment Methods
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Cash", "Cheques", "Debit Cards", "Credit Cards", 
              "Google Pay", "NFC Mobile Payments", "UPI"
            ].map((method, i) => (
              <span key={i} className="px-4 py-2 bg-slate-100 text-slate-600 rounded-full text-sm font-semibold">
                {method}
              </span>
            ))}
          </div>
          <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
            <h4 className="font-bold text-blue-800 mb-2">Parking Available</h4>
            <p className="text-sm text-blue-600">We provide free street parking and on-site parking for our customers' convenience.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ReachUs = () => {
  return (
    <section id="contact" className="py-20 px-8 md:px-24 bg-white overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-4 text-slate-800">Reach Us</h2>
        <p className="text-slate-500 mb-12">You can reach us by Call, email or visit our store at Ahmedabad</p>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary text-white p-3 rounded-full"><Phone size={24} /></div>
              <div>
                <h4 className="font-bold text-slate-800 text-lg">Phone</h4>
                <p className="text-slate-600">093136 91209</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary text-white p-3 rounded-full"><Clock size={24} /></div>
              <div>
                <h4 className="font-bold text-slate-800 text-lg">Business Hours</h4>
                <p className="text-slate-600">Monday to Sunday: 9:00 AM – 6:00 PM</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary text-white p-3 rounded-full"><MapPin size={24} /></div>
              <div>
                <h4 className="font-bold text-slate-800 text-lg">Address</h4>
                <p className="text-slate-600">
                  2J3R+WJW, Vastral Road, Ajay Society 6,<br />
                  Amraiwadi, Ahmedabad, Gujarat 380026, India
                </p>
                <p className="text-xs text-slate-400 mt-1 italic">Plus Code: 2J3R+WJW Ahmedabad, Gujarat</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary text-white p-3 rounded-full"><Mail size={24} /></div>
              <div>
                <h4 className="font-bold text-slate-800 text-lg">Email</h4>
                <p className="text-slate-600">vimalradiosales@gmail.com</p>
              </div>
            </div>
          </div>
          
          <div className="h-[400px] rounded-xl overflow-hidden shadow-lg border border-slate-100">
            {/* Mock Map */}
            <div className="w-full h-full bg-slate-100 relative flex items-center justify-center">
              <img 
                src="https://picsum.photos/seed/map/800/600" 
                alt="Map Location" 
                className="w-full h-full object-cover opacity-50"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bg-white p-4 rounded shadow-xl border border-slate-200 max-w-[200px] text-center">
                <div className="font-bold text-primary mb-1">Vimal Electronics</div>
                <div className="text-[10px] text-slate-500">Ajay Society 6, Vastral Road, Ahmedabad</div>
                <a 
                  href="https://www.google.com/maps/search/Vimal+Electronics+Vastral+Road+Ajay+Society+6+Ahmedabad" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 text-[10px] font-bold mt-2 block hover:underline"
                >
                  View larger map
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 px-8 md:px-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-2xl font-bold mb-4 italic">VIMAL ELECTRONICS</h2>
          <p className="opacity-80 text-sm leading-relaxed">
            Your trusted partner for electronic home appliances in Ahmedabad. Quality products and exceptional service since inception.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 text-lg">Popular Tags</h4>
          <ul className="space-y-3 opacity-80 text-sm">
            <li><a href="#" className="hover:underline">Kitchen Essentials</a></li>
            <li><a href="#" className="hover:underline">Entertainment Systems</a></li>
            <li><a href="#" className="hover:underline">Smart Home Solutions</a></li>
            <li><a href="#" className="hover:underline">Home Essentials</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 text-lg">Quick Links</h4>
          <ul className="space-y-3 opacity-80 text-sm">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About Us</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 text-lg">Social Media</h4>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <a 
                href="mailto:vimalradiosales@gmail.com" 
                className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center hover:bg-white hover:text-primary transition-all"
                title="Email Us"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://wa.me/919313691209" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center hover:bg-white hover:text-primary transition-all"
                title="WhatsApp Us"
              >
                <MessageCircle size={20} />
              </a>
              <a 
                href="https://www.instagram.com/vimalelectronics" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center hover:bg-white hover:text-primary transition-all"
                title="Follow us on Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
            <p className="text-xs opacity-70">Connect with us for the latest updates and offers!</p>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-70">
        <p>Copyright © 2026 Vimal Electronics. All Rights Reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:underline">Terms & Condition</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

const FloatingActions = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-[100]">
      <motion.a 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/919313691209" 
        target="_blank"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center"
      >
        <MessageCircle size={32} />
      </motion.a>
      <motion.a 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="tel:09313691209" 
        className="w-14 h-14 bg-[#F27D26] text-white rounded-full shadow-2xl flex items-center justify-center"
      >
        <Phone size={28} />
      </motion.a>
    </div>
  );
};

export default function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <WhyChooseUs />
        <ServicesGraphic />
        <HowItWorks />
        <OffersAndPayments />
        <Reviews />
        <InquiryForm />
        <ReachUs />
      </main>
      <Footer />
      <FloatingActions />

      {/* Back to Top Button - Desktop Only */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-32 right-6 z-50 bg-primary text-white p-4 rounded-full shadow-2xl hover:bg-red-700 transition-all hidden md:flex items-center justify-center"
          >
            <ChevronDown className="rotate-180" size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
