// import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8 sm:py-12 lg:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="mb-6 sm:mb-0">
                        <h2 className="text-lg font-semibold mb-4">About Us</h2>
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis justo vel velit blandit, ac consequat libero feugiat.</p>
                    </div>
                    <div className="mb-6 sm:mb-0">
                        <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
                        <ul className="text-sm">
                            <li><a href="#" className="hover:text-gray-400">Home</a></li>
                            <li><a href="#" className="hover:text-gray-400">Shop</a></li>
                            <li><a href="#" className="hover:text-gray-400">About Us</a></li>
                            <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="mb-6 sm:mb-0">
                        <h2 className="text-lg font-semibold mb-4">Customer Service</h2>
                        <ul className="text-sm">
                            <li><a href="#" className="hover:text-gray-400">Shipping & Delivery</a></li>
                            <li><a href="#" className="hover:text-gray-400">Returns</a></li>
                            <li><a href="#" className="hover:text-gray-400">FAQs</a></li>
                            <li><a href="#" className="hover:text-gray-400">Track Order</a></li>
                        </ul>
                    </div>
                    <div className="mb-6 sm:mb-0">
                        <h2 className="text-lg font-semibold mb-4">Newsletter</h2>
                        <p className="text-sm mb-4">Subscribe to our newsletter for exclusive deals and updates.</p>
                        <div className="flex flex-col sm:flex-row">
                            <input type="email" className="flex-1 py-2 px-4 mb-2 sm:mb-0 sm:mr-2 bg-gray-600 border border-transparent focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent rounded-md text-white" placeholder="Your email address" />
                            <button className="py-2 px-6 bg-gray-700 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 focus:ring-offset-gray-200 rounded-md">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-600 pt-8 mt-8 text-sm text-center">
                    <p>&copy; 2024 Bike Parts Ecommerce. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
