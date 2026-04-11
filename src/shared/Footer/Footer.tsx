import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaCcVisa, FaCcMastercard, FaCcPaypal } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* কোম্পানি ইনফো */}
          <div>
            <h2 className="text-white text-xl font-bold mb-4">MY-SHOP</h2>
            <p className="text-sm leading-relaxed">
              আপনার নিত্যদিনের প্রয়োজনীয় সব অরিজিনাল পণ্য সাশ্রয়ী মূল্যে পৌঁছে দিতে আমরা প্রতিশ্রুতিবদ্ধ। আমাদের সাথেই থাকুন।
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-blue-500 transition-colors"><FaFacebook size={24} /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><FaTwitter size={24} /></a>
              <a href="#" className="hover:text-pink-500 transition-colors"><FaInstagram size={24} /></a>
              <a href="#" className="hover:text-blue-700 transition-colors"><FaLinkedin size={24} /></a>
            </div>
          </div>

          {/* কুইক লিংকস */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/shop" className="hover:text-white transition-colors">Shop All</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Latest News</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* কাস্টমার সার্ভিস */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">Shipping Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Return & Refund</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* নিউজলেটার সাবস্ক্রিপশন */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Newsletter</h3>
            <p className="text-sm mb-4">নতুন অফার এবং ডিসকাউন্ট পেতে সাবস্ক্রাইব করুন।</p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-gray-800 text-white px-4 py-2 rounded focus:outline-none border border-gray-700 focus:border-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* নিচের অংশ - কপিরাইট ও পেমেন্ট */}
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} MY-SHOP. All rights reserved.
          </p>
          <div className="flex space-x-4 text-gray-400">
            <FaCcVisa size={30} title="Visa" />
            <FaCcMastercard size={30} title="Mastercard" />
            <FaCcPaypal size={30} title="Paypal" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;