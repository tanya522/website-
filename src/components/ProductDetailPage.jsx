import React, { useState } from "react";

const ProductDetailPage = () => {
  const [selectedSize, setSelectedSize] = useState("Large");
  const [quantity, setQuantity] = useState(1);

  const reviews = [
    { name: "Samantha D.", date: "August 14, 2023", review: "I absolutely love this t-shirt!..." },
    { name: "Alex M.", date: "August 15, 2023", review: "The t-shirt exceeded my expectations!..." },
    { name: "Ethan R.", date: "August 16, 2023", review: "This t-shirt is a must-have for anyone..." },
  ];

  const recommendations = [
    { title: "Minimal Long Sleeve", img: "/img/Frame 32 (2).png", rating: "4.2", price: "$140", original: "$180", discount: "-20%" },
    { title: "Urban Polo Shirt", img: "/img/Frame 33 (2).png", rating: "4.6", price: "$95", original: "$120", discount: "-21%" },
    { title: "Classic Hoodie", img: "/img/Frame 34 (2).png", rating: "4.4", price: "$150", original: "$210", discount: "-28%" },
    { title: "Essential Graphic Tee", img: "/img/Frame 38 (2).png", rating: "4.8", price: "$110", original: "$145", discount: "-24%" },
    { title: "T-shirt", img: "/img/image 6.png", rating: "4.8", price: "$120", original: "$145", discount: "-24%" }
  ];

  const imageThumbs = ["image 6.png", "image 5.png", "image 2.png", "image 1.png"];

  return (
    
        <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#1A2B1C',
        color: '#fff',
        fontFamily: 'sans-serif',
        margin: 0,
      }}
    >
      <div style={{ backgroundColor: "#000", fontSize: "0.75rem", padding: "0.5rem", textAlign: "center" }}>
        Sign up and get 20% off to your first order.{" "}
        <a href="#" style={{ color: "#fff", fontWeight: "bold", textDecoration: "underline" }}>Sign Up Now</a>
      </div>

      {/* Header */}
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 2rem", backgroundColor: "#1a1a1a", borderBottom: "1px solid #374151" }}>
        <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>SHOP.CO</div>
        <nav style={{ display: "flex", gap: "1.5rem", fontSize: "0.9rem" }}>
          {["Shop", "On Sale", "New Arrivals", "Brands"].map((link, i) => (
            <a key={i} href="#" style={{ color: "white", textDecoration: "none" }}>{link}</a>
          ))}
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <div style={{ backgroundColor: "white", borderRadius: "9999px", padding: "0.4rem 0.75rem", display: "flex", alignItems: "center", width: "250px" }}>
            <input type="text" placeholder="Search for products…" style={{ border: "none", outline: "none", fontSize: "0.875rem", background: "transparent", flex: 1 }} />
            <span role="img" aria-label="search">🔍</span>
          </div>
          <span role="img" aria-label="user" style={{ fontSize: "1.2rem" }}>👤</span>
          <span role="img" aria-label="cart" style={{ fontSize: "1.2rem" }}>🛒</span>
        </div>
      </header>

      {/* Breadcrumb */}
      <div style={{ fontSize: "0.875rem", color: "#aaa", padding: "1rem 2rem" }}>Home / Shop / Men / T-shirts</div>

      {/* Product Preview Section */}
      <div style={{ display: "flex", flexWrap: "wrap", padding: "2rem", gap: "2rem" }}>
        {/* Thumbnails */}
        <div style={{ flex: "1" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {imageThumbs.map((img, i) => (
              <img key={i} src={`/img/${img}`} alt={`Thumb ${i}`} style={{ width: "80px", borderRadius: "0.5rem" }} />
            ))}
          </div>
        </div>

        {/* Main Image */}
        <div style={{ flex: "2" }}>
          <img src="/img/image 5.png" alt="Main product" style={{ width: "100%", borderRadius: "1rem" }} />
        </div>

        {/* Product Details */}
        <div style={{ flex: "3", color: "#eee" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>Designer's Comfort Tee</h2>
          <p style={{ fontSize: "1rem", margin: "0.5rem 0" }}>⭐⭐⭐⭐☆ (4.5)</p>
          <p style={{ fontSize: "1.25rem", fontWeight: "bold" }}>$120 <span style={{ textDecoration: "line-through", color: "#888", fontSize: "1rem", marginLeft: "0.5rem" }}>$150</span></p>
          <p style={{ margin: "1rem 0" }}>This t-shirt is crafted for creative professionals who value comfort and aesthetics. Experience the blend of quality and design in one shirt.</p>

          {/* Size Selector */}
          <div>
            <label>Size:</label>
            <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem" }}>
              {["Small", "Medium", "Large", "XL"].map(size => (
                <button key={size} onClick={() => setSelectedSize(size)} style={{
                  padding: "0.5rem 1rem", borderRadius: "9999px", border: selectedSize === size ? "2px solid #fff" : "1px solid #aaa",
                  backgroundColor: "transparent", color: "#fff", cursor: "pointer"
                }}>{size}</button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div style={{ marginTop: "1rem" }}>
            <label>Quantity:</label>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "0.5rem" }}>
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} style={{ padding: "0.4rem 1rem", backgroundColor: "#444", border: "none", color: "#fff" }}>−</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} style={{ padding: "0.4rem 1rem", backgroundColor: "#444", border: "none", color: "#fff" }}>＋</button>
            </div>
          </div>

          <button style={{ marginTop: "1.5rem", padding: "0.75rem 2rem", borderRadius: "9999px", backgroundColor: "#fff", color: "#000", fontWeight: "bold", border: "none" }}>
            Add to Cart
          </button>
        </div>
      </div>
      {/* Reviews */}
<div style={{ padding: "2rem", backgroundColor: "#101612", color: "#fff" }}>
  <h3 style={{
    fontSize: "1.7rem",
    marginBottom: "1.5rem",
    borderBottom: "2px solid #2D3E30",
    paddingBottom: "0.5rem",
    fontWeight: "600"
  }}>
    ⭐ Customer Reviews
  </h3>

  <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
    {reviews.map((r, i) => (
      <div
        key={i}
        style={{
          backgroundColor: "#1F2F20",
          padding: "1.2rem 1.5rem",
          borderRadius: "0.75rem",
          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-4px)";
          e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.35)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 2px 6px rgba(0, 0, 0, 0.2)";
        }}
      >
        <p style={{ fontWeight: "600", marginBottom: "0.3rem" }}>
          {r.name}
          <span style={{ fontWeight: "normal", fontSize: "0.85rem", color: "#aaa", marginLeft: "0.5rem" }}>
            • {r.date}
          </span>
        </p>
        <p style={{ fontSize: "0.95rem", color: "#ddd", lineHeight: "1.4" }}>
          {r.review}
        </p>
      </div>
    ))}
  </div>
</div>



      {/* Recommendations */}
      <div style={{ padding: "2rem" }}>
        <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>You might also like</h3>
        <div style={{ display: "flex", gap: "6rem", flexWrap: "wrap" }}>
          {recommendations.map((rec, i) => (
            <div key={i} style={{ backgroundColor: "#2D3E30", padding: "1rem", borderRadius: "0.5rem", width: "200px" }}>
              <img src={rec.img} alt={rec.title} style={{ width: "100%", borderRadius: "0.5rem" }} />
              <h4 style={{ margin: "0.5rem 0" }}>{rec.title}</h4>
              <p style={{ fontSize: "0.9rem", color: "#aaa" }}>⭐ {rec.rating}</p>
              <p><strong>{rec.price}</strong> <span style={{ textDecoration: "line-through", color: "#888", fontSize: "0.8rem" }}>{rec.original}</span> <span style={{ color: "#0f0" }}>{rec.discount}</span></p>
            </div>
          ))}
        </div>
      </div>

      {/* NEWSLETTER */}
<section style={{ padding: '2.5rem 1.5rem', backgroundColor: '#101612', textAlign: 'center' }}>
  <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', marginBottom: '1.3rem' }}>
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

{/* FOOTER */}
<footer style={{ marginTop: 'auto',padding: '3rem 1.5rem', backgroundColor: '#101612', fontSize: '0.9rem', color: '#9ca3af' }}>
  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '2rem' }}>
    {/* Left Side - Logo & Desc */}
    <div style={{ flex: '1 1 240px' }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>SHOP.CO</div>
      <p style={{ marginTop: '0.75rem' }}>
        We have clothes that suits your style and <br />
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

    {/* Right Side - Links */}
    <div
      style={{
        flex: '2',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
        gap: '2rem',
      }}
    >
      {/* 4 Link Sections */}
      <div>
        <p style={{ color: 'white', fontWeight: '600', marginBottom: '0.75rem' }}>COMPANY</p>
        <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.8' }}>
          <li>About</li>
          <li>Features</li>
          <li>Works</li>
          <li>Career</li>
        </ul>
      </div>
      <div>
        <p style={{ color: 'white', fontWeight: '600', marginBottom: '0.75rem' }}>HELP</p>
        <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.8' }}>
          <li>Customer Support</li>
          <li>Delivery Details</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div>
        <p style={{ color: 'white', fontWeight: '600', marginBottom: '0.75rem' }}>FAQ</p>
        <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.8' }}>
          <li>Account</li>
          <li>Manage Deliveries</li>
          <li>Orders</li>
          <li>Payments</li>
        </ul>
      </div>
      <div>
        <p style={{ color: 'white', fontWeight: '600', marginBottom: '0.75rem' }}>RESOURCES</p>
        <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.8' }}>
          <li>Free eBooks</li>
          <li>Development Tutorial</li>
          <li>How to - Blog</li>
          <li>Youtube Playlist</li>
        </ul>
      </div>
    </div>
  </div>

  {/* Bottom Row */}
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '2rem',
      borderTop: '1px solid #1f2937',
      paddingTop: '1.5rem',
      color: '#6b7280',
    }}
  >
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
};



export default ProductDetailPage;
