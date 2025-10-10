import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className="bg-[#00192D] text-gray-300 pt-12 pb-6 mt-16">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8">

                    {/* Brand / About */}
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-3">NovaShop</h2>
                        <p className="text-sm leading-6">
                            Your one-stop online marketplace for electronics, fashion, and more.
                            We deliver quality and reliability straight to your doorstep.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-white transition">Shop</a></li>
                            <li><a href="#" className="hover:text-white transition">About Us</a></li>
                            <li><a href="#" className="hover:text-white transition">Blog</a></li>
                            <li><a href="#" className="hover:text-white transition">Contact</a></li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Customer Service</h3>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-white transition">My Account</a></li>
                            <li><a href="#" className="hover:text-white transition">Order Tracking</a></li>
                            <li><a href="#" className="hover:text-white transition">Returns & Refunds</a></li>
                            <li><a href="#" className="hover:text-white transition">FAQs</a></li>
                        </ul>
                    </div>

                    {/* Newsletter & Socials */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Stay Connected</h3>
                        <p className="text-sm mb-4">
                            Subscribe to get updates on new products and special offers.
                        </p>
                        <form className="flex items-center mb-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-3 py-2 text-sm rounded-l-md outline-none border border-gray-600 bg-transparent text-gray-200 placeholder-gray-400 focus:ring-1 focus:ring-[#ec5b53]"
                            />
                            <button
                                type="submit"
                                className="bg-[#ec5b53] hover:bg-[#f16b63] px-4 py-2 rounded-r-md text-sm font-semibold text-white"
                            >
                                Subscribe
                            </button>
                        </form>

                        <div className="flex space-x-4 mt-3">
                            <a href="#" className="hover:text-[#ec5b53] transition"><FaFacebook size={20} /></a>
                            <a href="#" className="hover:text-[#ec5b53] transition"><FaInstagram size={20} /></a>
                            <a href="#" className="hover:text-[#ec5b53] transition"><FaTwitter size={20} /></a>
                            <a href="#" className="hover:text-[#ec5b53] transition"><FaYoutube size={20} /></a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="max-w-7xl mx-auto px-6 mt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <p>© {new Date().getFullYear()} ShopVerse. All rights reserved.</p>
                    <div className="flex space-x-4 mt-3 md:mt-0">
                        <a href="#" className="hover:text-white transition">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition">Terms of Service</a>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer