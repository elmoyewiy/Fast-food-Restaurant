"use client";
import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ArrowRight,
  Star,
  Send,
  User,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  ChevronLeft,
  ChevronRight,
  Utensils,
  Clock,
  Award,
} from "lucide-react";

const FoodyRestaurant = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("morning");
  const [heroIndex, setHeroIndex] = useState(0);

  const menuItems = {
    morning: [
      {
        name: "Breakfast Burger",
        desc: "Egg, bacon, cheese on toasted bun",
        price: "$8.99",
        image:
          "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
      },
      {
        name: "Pancake Stack",
        desc: "Fluffy pancakes with maple syrup",
        price: "$6.99",
        image:
          "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop",
      },
      {
        name: "Morning Wrap",
        desc: "Scrambled eggs, sausage, peppers",
        price: "$7.49",
        image:
          "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop",
      },
    ],
    lunch: [
      {
        name: "Classic Burger",
        desc: "Beef patty, lettuce, tomato, special sauce",
        price: "$12.99",
        image:
          "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
      },
      {
        name: "Chicken Sandwich",
        desc: "Crispy chicken, pickles, mayo",
        price: "$10.99",
        image:
          "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&h=300&fit=crop",
      },
      {
        name: "Caesar Salad",
        desc: "Romaine, parmesan, croutons, dressing",
        price: "$9.49",
        image:
          "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop",
      },
    ],
    evening: [
      {
        name: "Double Cheeseburger",
        desc: "Two beef patties, double cheese",
        price: "$14.99",
        image:
          "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop",
      },
      {
        name: "Pizza Slice",
        desc: "Pepperoni, mozzarella, marinara",
        price: "$4.99",
        image:
          "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop",
      },
      {
        name: "Loaded Fries",
        desc: "Crispy fries, cheese, bacon bits",
        price: "$7.99",
        image:
          "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop",
      },
    ],
    dinner: [
      {
        name: "Deluxe Burger Meal",
        desc: "Burger, fries, and drink combo",
        price: "$16.99",
        image:
          "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=300&fit=crop",
      },
      {
        name: "Family Pizza",
        desc: "Large pizza with 3 toppings",
        price: "$24.99",
        image:
          "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop",
      },
      {
        name: "Chicken Tenders",
        desc: "Crispy tenders with dipping sauce",
        price: "$11.99",
        image:
          "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop",
      },
    ],
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Best burgers in town! The quality is consistently amazing and service is super fast.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    {
      name: "Michael Chen",
      text: "Love the fresh ingredients and the variety. My family orders from Foody every week!",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
    {
      name: "Emily Davis",
      text: "Fast delivery, hot food, and delicious every time. Highly recommend the pizza!",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
  ];

  const heroImages = [
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=600&fit=crop",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center">
              <Utensils className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent">
              Foody
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              About Us
            </a>
            <a
              href="#menu"
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              Menu
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              Blogs
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              Contact
            </a>
          </div>

          <button className="hidden md:block px-6 py-3 bg-gradient-to-r from-red-600 to-yellow-500 text-white rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105">
            Reserve a Table
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <a
                href="#about"
                className="text-gray-700 hover:text-red-600 transition-colors font-medium"
              >
                About Us
              </a>
              <a
                href="#menu"
                className="text-gray-700 hover:text-red-600 transition-colors font-medium"
              >
                Menu
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-red-600 transition-colors font-medium"
              >
                Blogs
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-red-600 transition-colors font-medium"
              >
                Contact
              </a>
              <button className="px-6 py-3 bg-gradient-to-r from-red-600 to-yellow-500 text-white rounded-full font-semibold">
                Reserve a Table
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Fresh & Fast Food
                <br />
                <span className="bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent">
                  Always Delicious
                </span>
              </h1>
              <p className="text-gray-600 text-lg">
                Experience the perfect blend of quality ingredients, amazing
                flavors, and lightning-fast service. Your satisfaction is our
                priority.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-yellow-500 text-white rounded-full font-semibold hover:shadow-xl transition-all transform hover:scale-105 flex items-center gap-2">
                Order Now <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="relative h-96 md:h-[500px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <img
                    src={heroImages[heroIndex]}
                    alt="Delicious burger"
                    className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-full shadow-2xl transition-opacity duration-500"
                  />
                  <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full flex items-center justify-center shadow-lg animate-spin-slow">
                    <div className="bg-white w-28 h-28 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-center">
                        Order Your
                        <br />
                        Food
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={() =>
                  setHeroIndex(
                    (prev) => (prev - 1 + heroImages.length) % heroImages.length
                  )
                }
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-red-600" />
              </button>
              <button
                onClick={() =>
                  setHeroIndex((prev) => (prev + 1) % heroImages.length)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-red-600" />
              </button>

              <img
                src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=200&h=200&fit=crop"
                alt="Side dish"
                className="absolute top-4 left-4 w-24 h-24 rounded-full shadow-lg object-cover hidden md:block"
              />
              <img
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&h=200&fit=crop"
                alt="Side dish"
                className="absolute bottom-4 right-4 w-24 h-24 rounded-full shadow-lg object-cover hidden md:block"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Food Menu Section */}
      <section id="menu" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Menu
            </h2>
            <p className="text-gray-600 text-lg">
              Delicious food for every time of day
            </p>
          </div>

          <div className="max-w-5xl mx-auto bg-gray-900 rounded-3xl p-6 md:p-8 shadow-2xl">
            <div className="flex flex-wrap gap-4 mb-8 justify-center">
              {["morning", "lunch", "evening", "dinner"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-full font-semibold capitalize transition-all transform hover:scale-105 ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-red-600 to-yellow-500 text-white shadow-lg"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {menuItems[activeTab].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gray-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-white font-bold text-xl mb-2">
                      {item.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">{item.desc}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-red-500">
                        {item.price}
                      </span>
                      <button className="w-10 h-10 bg-gradient-to-r from-red-600 to-yellow-500 rounded-full flex items-center justify-center hover:shadow-lg transition-all">
                        <ArrowRight className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* High Quality Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&h=400&fit=crop"
                alt="Sandwich"
                className="rounded-3xl shadow-xl object-cover h-64 hover:transform hover:scale-105 transition-all"
              />
              <img
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=400&fit=crop"
                alt="Pizza"
                className="rounded-3xl shadow-xl object-cover h-64 mt-8 hover:transform hover:scale-105 transition-all"
              />
              <img
                src="https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=400&fit=crop"
                alt="Salad"
                className="rounded-3xl shadow-xl object-cover h-64 -mt-8 hover:transform hover:scale-105 transition-all"
              />
              <img
                src="https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=400&fit=crop"
                alt="Fries"
                className="rounded-3xl shadow-xl object-cover h-64 hover:transform hover:scale-105 transition-all"
              />
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8 text-red-600" />
                <span className="text-red-600 font-semibold">
                  WHY CHOOSE US
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                High Quality
                <br />
                <span className="bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent">
                  Fast Food
                </span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                We believe in serving only the finest ingredients prepared fresh
                daily. Our chefs craft each meal with passion and precision,
                ensuring every bite delivers exceptional taste and quality. From
                farm to table, we maintain the highest standards.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-red-600" />
                  </div>
                  <span className="text-gray-700 font-medium">
                    Lightning Fast Delivery
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-yellow-600" />
                  </div>
                  <span className="text-gray-700 font-medium">
                    Premium Fresh Ingredients
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-orange-600" />
                  </div>
                  <span className="text-gray-700 font-medium">
                    Award Winning Chefs
                  </span>
                </li>
              </ul>
              <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-yellow-500 text-white rounded-full font-semibold hover:shadow-xl transition-all transform hover:scale-105 flex items-center gap-2">
                More About Us <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Customer Feedback
            </h2>
            <p className="text-gray-600 text-lg">
              What our happy customers say about us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-500 text-yellow-500"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">Verified Customer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-red-50 to-yellow-50 rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Subscribe to Our
                  <br />
                  <span className="bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent">
                    Newsletter
                  </span>
                </h2>
                <p className="text-gray-600">
                  Get exclusive deals, menu updates, and special offers
                  delivered straight to your inbox!
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-4 rounded-full border-2 border-gray-200 focus:border-red-500 focus:outline-none"
                  />
                  <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-yellow-500 text-white rounded-full font-semibold hover:shadow-xl transition-all transform hover:scale-105 flex items-center gap-2">
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="hidden md:block">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&h=500&fit=crop"
                  alt="Delivery person"
                  className="w-full h-80 object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center">
                  <Utensils className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">Foody</span>
              </div>
              <p className="text-gray-400 mb-4">
                Serving delicious fast food with quality ingredients since 2020.
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#menu"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Our Menu
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Favorite Items</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Classic Burger
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Pepperoni Pizza
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Chicken Tenders
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Loaded Fries
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-red-500 mt-1" />
                  <span className="text-gray-400">
                    123 Food Street, Tasty City, TC 12345
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-red-500" />
                  <span className="text-gray-400">+234 (81) 390-060492</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-red-500" />
                  <span className="text-gray-400">boyeadisa@gmil.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>
              &copy; 2024 Foody Restaurant. All rights reserved. Made with ❤️
              for food lovers.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default FoodyRestaurant;
