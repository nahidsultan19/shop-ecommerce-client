import React from 'react';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-[#22475C] text-white">
            <div className='max-w-md'>
                <h2>FRESH</h2>
                <p>FRESH.V is an e-commerce platform coupled with a chain of brick-and-mortar stores for safe and pure foods in USA.</p>
                <p>At FRESH.V, we believe grocery shopping is more than an errand. That’s why it’s our pledge to always go above and beyond. Here, we think like the customer, not about the customer.</p>
                <div className="grid grid-flow-col gap-4">
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                </div>
            </div>
            <div>
                <span className="footer-title">Our Services</span>
                <a className="link link-hover">Ship to Home</a>
                <a className="link link-hover">Pharmacy</a>
                <a className="link link-hover">Custom Cakes & Catering</a>
                <a className="link link-hover">Dietitian/Nutritionist</a>
                <a className="link link-hover">FRESH.V  Commercial Real Estate</a>
                <a className="link link-hover">Gift Cards</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">Find a Store</a>
                <a className="link link-hover">About Us</a>
                <a className="link link-hover">Community</a>
                <a className="link link-hover">Newsroom</a>
                <a className="link link-hover">Corporate Responsibility</a>
                <a className="link link-hover">Store Openings</a>
                <a className="link link-hover">Suppliers</a>
                <a className="link link-hover">Our Brands</a>
            </div>
            <div>
                <span className="footer-title">Customer Survices</span>
                <a className="link link-hover">Contact Us</a>
                <a className="link link-hover">Feedback</a>
                <a className="link link-hover">Help & FAQs</a>
                <a className="link link-hover">Coupon Policy</a>
                <a className="link link-hover">Product Recalls</a>
                <a className="link link-hover">Refund Policy</a>
                <a className="link link-hover">All Recipes & Cooking</a>
            </div>
        </footer>
    );
};

export default Footer;