import React from "react";
import { FaSlidersH } from "react-icons/fa";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

// Products data
const products = [
  { title: "Gradient Graphic T-shirt", price: 145, rating: 3.5, img: "/img/Frame 33 (2).png" },
  { title: "Polo with Tipping Details", price: 180, rating: 4.5, img: "/img/Frame 34 (2).png" },
  { title: "Black Striped T-shirt", price: 120, originalPrice: 150, rating: 5, discount: 30, img: "/img/Frame 34.png" },
  { title: "Skinny Fit Jeans", price: 240, originalPrice: 260, rating: 3.5, discount: 20, img: "/img/Frame 38 (1).png" },
  { title: "Checkered Shirt", price: 180, rating: 4.5, img: "/img/Frame 38 (2).png" },
  { title: "Sleeve Striped T-shirt", price: 130, originalPrice: 160, rating: 4.5, discount: 30, img: "/img/Frame 38.png" },
  { title: "Vertical Striped Shirt", price: 212, originalPrice: 232, rating: 5, discount: 20, img: "/img/Frame 32 (2).png" },
  { title: "Courage Graphic T-shirt", price: 145, rating: 4, img: "/img/Frame 33 (1).png" },
  { title: "Loose Fit Bermuda Shorts", price: 80, rating: 3, img: "/img/Frame 34 (1).png" },
];

// Footer Component
const Footer = () => (
  <div style={{ width: "100%", backgroundColor: "#101612", color: "#9ca3af" }}>
    {/* Newsletter */}
    <section style={{ padding: '2.5rem 1.5rem', textAlign: 'center' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', marginBottom: '1.5rem' }}>
        STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
      </h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
        <input
          type="text"
          placeholder="Enter your email address"
          style={{
            padding: '0.75rem 1rem',
            width: '280px',
            borderRadius: '9999px',
            border: 'none',
            outline: 'none',
            fontSize: '0.9rem',
          }}
        />
        <button
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: 'white',
            color: 'black',
            borderRadius: '9999px',
            fontWeight: '600',
            border: 'none',
            fontSize: '0.9rem',
          }}
        >
          Subscribe to Newsletter
        </button>
      </div>
    </section>

    {/* Main Footer */}
    <footer style={{ padding: '3rem 1.5rem', fontSize: '0.9rem' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '2rem' }}>
        <div style={{ flex: '1 1 240px' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>SHOP.CO</div>
          <p style={{ marginTop: '0.75rem' }}>
            We have clothes that suit your style and <br />
            which you're proud to wear. From <br />
            women to men.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.25rem', fontSize: '1.25rem', color: 'white' }}>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-github"></i>
          </div>
        </div>

        <div style={{ flex: '2', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '2rem' }}>
          {[
            { title: 'COMPANY', links: ['About', 'Features', 'Works', 'Career'] },
            { title: 'HELP', links: ['Customer Support', 'Delivery Details', 'Terms & Conditions', 'Privacy Policy'] },
            { title: 'FAQ', links: ['Account', 'Manage Deliveries', 'Orders', 'Payments'] },
            { title: 'RESOURCES', links: ['Free eBooks', 'Development Tutorial', 'How to - Blog', 'Youtube Playlist'] },
          ].map((section, idx) => (
            <div key={idx}>
              <p style={{ color: 'white', fontWeight: '600', marginBottom: '0.75rem' }}>{section.title}</p>
              <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.8' }}>
                {section.links.map((link, i) => <li key={i}>{link}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem', borderTop: '1px solid #1f2937', paddingTop: '1.5rem', color: '#6b7280' }}>
        <p>Shop.co © 2000–2025, All Rights Reserved</p>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <img src="/img/Badge.png" alt="Visa" height={25} />
          <img src="/img/Badge (4).png" alt="Mastercard" height={25} />
          <img src="/img/Badge (3).png" alt="Paypal" height={25} />
          <img src="/img/Badge (2).png" alt="ApplePay" height={25} />
          <img src="/img/Badge (1).png" alt="Gpay" height={25} />
        </div>
      </div>
    </footer>
  </div>
);

// Category Page
const CategoryPage = () => {
  return (
    <div style={{ backgroundColor: "#1c251e", color: "white", fontFamily: "sans-serif" }}>
      {/* Top Offer Bar */}
      <div style={{ backgroundColor: 'black', color: 'white', fontSize: '0.75rem', padding: '0.5rem', textAlign: 'center' }}>
        Sign up and get 20% off to your first order. <a href="#" style={{ color: '#fff', fontWeight: 'bold', textDecoration: 'underline' }}>Sign Up Now</a>
      </div>

      {/* Header */}
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 2rem", backgroundColor: "#1a1a1a", borderBottom: "1px solid #374151" }}>
        <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "white" }}>SHOP.CO</div>
        <nav style={{ display: "flex", gap: "1.5rem", fontSize: "0.9rem" }}>
          {['Shop', 'On Sale', 'New Arrivals', 'Brands'].map((link, i) => (
            <a key={i} href="#" style={{ color: "white", textDecoration: "none" }}>{link}</a>
          ))}
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <div style={{ backgroundColor: "white", borderRadius: "9999px", padding: "0.4rem 0.75rem", display: "flex", alignItems: "center", width: "250px" }}>
            <input type="text" placeholder="Search for products…" style={{ border: "none", outline: "none", fontSize: "0.875rem", background: "transparent", flex: 1 }} />
            <span role="img" aria-label="search">🔍</span>
          </div>
          <span role="img" aria-label="user" style={{ fontSize: "1.2rem", color: "white" }}>👤</span>
          <span role="img" aria-label="cart" style={{ fontSize: "1.2rem", color: "white" }}>🛒</span>
        </div>
      </header>

      {/* Main Content */}
      <div style={{ display: "flex" }}>
        {/* Sidebar */}
        <div style={{ width: "240px", padding: "1.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem" }}>
            <h2 style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#F6D776" }}>Filters</h2>
            <FaSlidersH style={{ color: "#F6D776" }} />
          </div>
          {["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"].map((item, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
              <span>{item}</span>
              <FiChevronRight />
            </div>
          ))}
          <hr style={{ border: "1px solid #1f2937", margin: "1rem 0" }} />

          {/* Price Filter */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0rem" }}>
              <span style={{ fontWeight: "bold" }}>Price</span>
              <FiChevronDown />
            </div>
            <input type="range" min="50" max="200" style={{ width: "100%" }} />
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem" }}>
              <span>$50</span>
              <span>$200</span>
            </div>
          </div>

          <hr style={{ border: "1px solid #1f2937", margin: "1.5rem 0" }} />

          {/* Colors */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
              <span style={{ fontWeight: "bold", color: "#F6D776" }}>Colors</span>
              <FiChevronDown />
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {["#22c55e", "#ef4444", "#facc15", "#f97316", "#06b6d4", "#3b82f6", "#a855f7", "#ffffff", "#000000"].map((color, index) => (
                <div key={index} style={{ width: "24px", height: "24px", backgroundColor: color, borderRadius: "50%", border: color === "#ffffff" ? "1px solid #ccc" : "none" }} />
              ))}
            </div>
          </div>

          <hr style={{ border: "1px solid #1f2937", margin: "1.5rem 0" }} />

          {/* Size */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
              <span style={{ fontWeight: "bold", color: "#F6D776" }}>Size</span>
              <FiChevronDown />
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {["XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "3X-Large", "4X-Large"].map((size, index) => (
                <button key={index} style={{ padding: "0.4rem 0.8rem", borderRadius: "999px", border: size === "Large" ? "none" : "1px solid #ccc", backgroundColor: size === "Large" ? "black" : "#e5e7eb", color: size === "Large" ? "white" : "black" }}>
                  {size}
                </button>
              ))}
            </div>
          </div>

          <hr style={{ border: "1px solid #1f2937", margin: "1.5rem 0" }} />

          {/* Dress Style */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
              <span style={{ fontWeight: "bold" }}>Dress Style</span>
              <FiChevronRight />
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: "2" }}>
              {["Casual", "Formal", "Party", "Gym"].map((style, i) => (
                <li key={i}>{style}</li>
              ))}
            </ul>
          </div>

          <button style={{ marginTop: "2rem", width: "100%", backgroundColor: "white", color: "black", borderRadius: "999px", padding: "0.75rem 1.5rem", fontWeight: "bold", cursor: "pointer", border: "none" }}>
            Apply Filter
          </button>
        </div>

        {/* Products Grid */}
        <div style={{ flex: 1, padding: "2rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Casual</h2>
            <span style={{ fontSize: "0.9rem", color: "#d1d5db" }}>
              Showing 1–10 of 100 Products Sort by: <span style={{ fontWeight: "bold", color: "white" }}>Most Popular</span>
            </span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }}>
            {products.map((product, index) => (
              <div key={index} style={{ backgroundColor: "#152617", borderRadius: "0.75rem", padding: "1rem" }}>
                <img src={product.img} alt={product.title} style={{ width: "100%", borderRadius: "0.5rem" }} />
                <h3 style={{ marginTop: "1rem", fontWeight: "bold", color: "#F6D776" }}>{product.title}</h3>
                <div style={{ color: "#facc15", fontSize: "0.85rem" }}>
                  {"★".repeat(Math.floor(product.rating)) + "☆".repeat(5 - Math.floor(product.rating))} {product.rating}/5
                </div>
                <div style={{ marginTop: "0.25rem" }}>
                  <span style={{ fontWeight: "bold" }}>${product.price}</span>
                  {product.originalPrice && (
                    <>
                      <span style={{ textDecoration: "line-through", color: "#ccc", marginLeft: "0.5rem" }}>${product.originalPrice}</span>
                      <span style={{ color: "#ef4444", marginLeft: "0.5rem", fontWeight: "bold" }}>-{product.discount}%</span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div style={{ marginTop: "2rem", display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem" }}>
            <button style={{ backgroundColor: "white", color: "black", borderRadius: "8px", padding: "0.5rem 1rem", fontWeight: "bold", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <BsArrowLeft /> Previous
            </button>
            {[1, 2, 3, "...", 8, 9, 10].map((pg, i) => (
              <span key={i} style={{ padding: "0.5rem", color: pg === 1 ? "white" : "gray", fontWeight: pg === 1 ? "bold" : "normal" }}>{pg}</span>
            ))}
            <button style={{ backgroundColor: "white", color: "black", borderRadius: "8px", padding: "0.5rem 1rem", fontWeight: "bold", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              Next <BsArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* Footer correctly placed outside sidebar */}
      <Footer />
    </div>
  );
};

export default CategoryPage;





