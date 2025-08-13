import React, { useEffect } from "react";

const CartPage = () => {
  const cartItems = [
    {
      img: "/img/Frame 33 (1).png",
      title: "T-Shirt Oversized",
      size: "M",
      color: "Black",
      price: 120,
    },
    {
      img: "/img/Frame 33 (2).png",
      title: "Denim Jacket",
      size: "L",
      color: "Blue",
      price: 160,
    },
    {
      img: "/img/image 5.png",
      title: "Denim Jacket",
      size: "L",
      color: "Blue",
      price: 160,
    },
    {
      img: "/img/Frame 34 (2).png",
      title: "Denim Jacket",
      size: "L",
      color: "Blue",
      price: 160,
    },
  ];

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in-up");
    elements.forEach((el, index) => {
      el.style.animationDelay = `${index * 0.2}s`;
      el.classList.add("animate");
    });
  }, []);

  return (
    <div style={{ backgroundColor: "#1c251e", color: "white", fontFamily: "sans-serif" }}>
      <style>
        {`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .fade-in-up { opacity: 0; }
          .fade-in-up.animate { animation: fadeInUp 0.6s ease-out forwards; }

          .hover-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .hover-card:hover {
            transform: scale(1.05);
            box-shadow: 0 8px 24px rgba(255, 198, 51, 0.2);
          }
          .hover-img {
            transition: transform 0.3s ease;
            cursor: pointer;
          }
          .hover-img:hover {
            transform: scale(1.1);
          }
          .hover-btn {
            transition: background-color 0.3s ease;
          }
          .hover-btn:hover {
            background-color: #444;
          }
        `}
      </style>

      {/* Top Bar */}
      <div style={{ backgroundColor: "black", padding: "0.5rem", textAlign: "center", fontSize: "0.75rem" }}>
        Sign up and get 20% off your first order. <a href="#" style={{ color: "#fff", fontWeight: "bold", textDecoration: "underline" }}>Sign Up Now</a>
      </div>

      {/* Header */}
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 2rem", backgroundColor: "#1a1a1a", borderBottom: "1px solid #374151" }}>
        <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>SHOP.CO</div>
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
          <span role="img" aria-label="user" style={{ fontSize: "1.2rem" }}>👤</span>
          <span role="img" aria-label="cart" style={{ fontSize: "1.2rem" }}>🛒</span>
        </div>
      </header>

      {/* Breadcrumb */}
      <div style={{ padding: "1rem 2rem", fontSize: "14px", color: "#ccc" }}>Home &gt; Cart</div>

      {/* Cart Section */}
      <div style={{ display: "flex", justifyContent: "space-between", padding: "2rem", flexWrap: "wrap" }}>
        {/* Cart Items */}
        <div className="fade-in-up" style={{ flex: 1, minWidth: "300px", marginRight: "2rem" }}>
          <h2 style={{ color: "#FFC633", marginBottom: "1.5rem" }}>YOUR CART</h2>
          {cartItems.map((item, index) => (
            <div key={index} className="fade-in-up hover-card" style={{
              display: "flex",
              backgroundColor: "#111",
              borderRadius: "1rem",
              marginBottom: "1rem",
              padding: "1rem",
              alignItems: "center"
            }}>
              <img src={item.img} alt={item.title} className="hover-img" style={{
                width: "80px", height: "80px", borderRadius: "1rem", marginRight: "1rem"
              }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: "bold" }}>{item.title}</div>
                <div style={{ fontSize: "14px" }}>Size: {item.size}</div>
                <div style={{ fontSize: "14px" }}>Color: {item.color}</div>
                <div style={{ marginTop: "0.5rem", fontWeight: "bold" }}>${item.price}</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <button className="hover-btn" style={{ background: "#333", color: "white", borderRadius: "50%", padding: "0.3rem 0.7rem" }}>-</button>
                <span>1</span>
                <button className="hover-btn" style={{ background: "#333", color: "white", borderRadius: "50%", padding: "0.3rem 0.7rem" }}>+</button>
              </div>
              <div style={{ color: "red", marginLeft: "1rem", fontSize: "18px", cursor: "pointer" }}>🗑️</div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="fade-in-up hover-card" style={{
          backgroundColor: "#111",
          borderRadius: "1rem",
          padding: "2rem",
          flex: "0.5",
          minWidth: "280px",
          marginBottom: "7rem",
          marginTop: "2rem"
        }}>
          <h3 style={{ color: "#FFC633", marginBottom: "1.5rem" }}>Order Summary</h3>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
            <span>Subtotal</span><span>$600</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem", color: "#ff3d3d" }}>
            <span>Discount (-20%)</span><span>-$120</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
            <span>Delivery Fee</span><span>$10</span>
          </div>
          <hr style={{ margin: "2rem 0", borderColor: "#333" }} />
          <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold", fontSize: "18px", marginBottom: "1rem" }}>
            <span>Total</span><span>$490</span>
          </div>
          <input placeholder="Add promo code" style={{
            marginTop: "1rem",
            padding: "0.7rem 1rem",
            borderRadius: "1rem",
            width: "100%",
            border: "none",
            marginBottom: "1rem"
          }} />
          <button className="hover-btn" style={{
            padding: "1rem",
            borderRadius: "1rem",
            background: "black",
            color: "white",
            width: "100%",
            cursor: "pointer"
          }}>Go to Checkout →</button>
        </div>
      </div>


      {/* Footer */}
      <div style={{ backgroundColor: "black", color: "white", padding: "4rem 2rem 2rem", marginTop: "4rem" }}>
        {/* Newsletter */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 style={{ fontWeight: "bold", color: "white", fontSize: "1.5rem" }}>
            STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
          </h2>
          <div style={{ marginTop: "1.5rem", display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <input
              type="email"
              placeholder="Enter your email address"
              style={{
                padding: "0.8rem 1.5rem",
                borderRadius: "9999px",
                border: "none",
                outline: "none",
                width: "300px",
                fontSize: "1rem",
              }}
            />
            <button
              style={{
                backgroundColor: "white",
                color: "black",
                padding: "0.8rem 1.5rem",
                borderRadius: "9999px",
                fontWeight: "600",
                fontSize: "1rem",
                border: "none",
                cursor: "pointer",
              }}
            >
              Subscribe to Newsletter
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "2rem" }}>
            {/* Company Info */}
            <div style={{ flex: "1 1 240px" }}>
              <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>SHOP.CO</div>
              <p style={{ marginTop: "0.75rem" }}>
                We have clothes that suits your style and <br />
                which you're proud to wear. From <br />
                women to men.
              </p>
            </div>

            {/* Footer Navigation */}
            {[
              { title: "COMPANY", links: ["About", "Features", "Works", "Career"] },
              { title: "HELP", links: ["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"] },
              { title: "FAQ", links: ["Account", "Manage Deliveries", "Orders", "Payments"] },
              { title: "RESOURCES", links: ["Free eBooks", "Development Tutorial", "How to - Blog", "Youtube Playlist"] },
            ].map((section, i) => (
              <div key={i}>
                <p style={{ fontWeight: "600", marginBottom: "0.75rem" }}>{section.title}</p>
                <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8" }}>
                  {section.links.map((link, j) => (
                    <li key={j}>{link}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Payment Info */}
          <div style={{
            marginTop: "2.5rem",
            borderTop: "1px solid #ffffff",
            paddingTop: "2.5rem",
            color: "#d1d5db",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
            <p>Shop.co © 2000–2025, All Rights Reserved</p>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              <img src="/img/Badge.png" alt="Visa" height={25} />
              <img src="/img/Badge (1).png" alt="Mastercard" height={25} />
              <img src="/img/Badge (2).png" alt="ApplePay" height={25} />
              <img src="/img/Badge (3).png" alt="Paypal" height={25} />
              <img src="/img/Badge (4).png" alt="Google Pay" height={25} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
