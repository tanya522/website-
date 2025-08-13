import React, { useEffect, useState } from "react";

const BrowseByDressStyle = () => {
  const [animateStyle, setAnimateStyle] = useState(false);

  useEffect(() => {
    setAnimateStyle(true);
  }, []);

  const boxBaseStyle = {
    backgroundColor: "#fff",
    borderRadius: "0.7rem",
    textAlign: "center",
    padding: "0.3rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    cursor: "pointer",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    opacity: animateStyle ? 1 : 0,
    transform: animateStyle ? "scale(1)" : "scale(0.95)",
  };

  const dressStyles = [
    { src: "/img/Frame 61.png", alt: "" },
    { src: "/img/Frame 62.png", alt: "Formal" },
    { src: "/img/Frame 64.png", alt: "Party" },
    { src: "/img/Frame 63.png", alt: "Gym" },
  ];

  return (
    <section
      style={{
        padding: "2.5rem 1.5rem",
        backgroundColor: "#1A2B1C",
        color: "white",
        borderRadius: "0.75rem",
        margin: "1.5rem",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "1.5rem",
          fontWeight: "bold",
          marginBottom: "2rem",
        }}
      >
        BROWSE BY DRESS STYLE
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridTemplateRows: "repeat(2, 360px)",
          gap: "1.5rem",
        }}
      >
        {dressStyles.map(({ src, alt }, index) => (
          <div
            key={index}
            style={boxBaseStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <img
              src={src}
              alt={alt}
              style={{
                height: alt === "Casual" || alt === "Formal" ? "350px" : "300px",
                width: "100%",
                objectFit: "contain",
              }}
            />
            <p
              style={{
                fontWeight: "600",
                marginTop: alt === "Gym" ? "0.4rem" : "0.5rem",
              }}
            >
              {alt}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Homepage = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const brands = ["VERSACE", "ZARA", "GUCCI", "PRADA", "Calvin Klein"];

  const newArrivals = [
    {
      title: "T-shirt with Taping Detail",
      price: "$120",
      originalPrice: "",
      discount: "",
      rating: 4.5,
      img: "/img/Frame 32.png",
    },
    {
      title: "Washed Denim Shorts",
      price: "$240",
      originalPrice: "$260",
      discount: "-20%",
      rating: 4.0,
      img: "/img/Frame 38 (1).png",
    },
    {
      title: "Checked Flannel",
      price: "$180",
      originalPrice: "",
      discount: "",
      rating: 4.5,
      img: "/img/Frame 34.png",
    },
    {
      title: "Orange Striped Tee",
      price: "$130",
      originalPrice: "$160",
      discount: "-28%",
      rating: 4.0,
      img: "/img/Frame 38.png",
    },
  ];

  const topSelling = [
    {
      title: "Vertical Striped Shirt",
      price: "$212",
      originalPrice: "$232",
      discount: "-28%",
      img: "/img/Frame 32 (1).png",
    },
    {
      title: "Casual Green Hoodie",
      price: "$180",
      originalPrice: "",
      discount: "",
      img: "/img/Frame 33.png",
    },
    {
      title: "Orange Graphic T-shirt",
      price: "$140",
      originalPrice: "",
      discount: "",
      img: "/img/Frame 38.png",
    },
    {
      title: "Loose Fit Denim Shorts",
      price: "$165",
      originalPrice: "",
      discount: "",
      img: "/img/Frame 34 (1).png",
    },
    {
      title: "Fitted Ebony Jeans",
      price: "$200",
      originalPrice: "",
      discount: "",
      img: "/img/Frame 38 (1).png",
    },
  ];

  const testimonials = [
    {
      name: "Anjali Sharma",
      review: "Absolutely love the quality and fast shipping. Highly recommended!",
    },
    {
      name: "Ravi Mehta",
      review: "Great customer support and stylish collections.",
    },
    {
      name: "Simran Kaur",
      review: "The website is so smooth to navigate. Found exactly what I wanted.",
    },
  ];

  return (
    <div
      style={{ backgroundColor: "#1c251e", color: "white", fontFamily: "sans-serif" }}
    >
      {/* Global keyframes */}
      <style>
        {`
          @keyframes fadeSlide {
            0% {
              opacity: 0;
              transform: translateY(40px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fadeSlideUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .fade-slide-up {
            opacity: 0;
            animation-fill-mode: forwards;
            animation-name: fadeSlideUp;
            animation-duration: 0.6s;
            animation-timing-function: ease;
          }
        `}
      </style>

      {/* Top Offer Bar */}
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          fontSize: "0.75rem",
          padding: "0.5rem",
          textAlign: "center",
        }}
      >
        Sign up and get 20% off to your first order.{" "}
        <a
          href="#"
          style={{ color: "#fff", fontWeight: "bold", textDecoration: "underline" }}
        >
          Sign Up Now
        </a>
      </div>

      {/* Header */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 2rem",
          backgroundColor: "#1a1a1a",
          borderBottom: "1px solid #374151",
        }}
      >
        <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "white" }}>
          SHOP.CO
        </div>
        <nav style={{ display: "flex", gap: "1.5rem", fontSize: "0.9rem" }}>
          {["Shop", "On Sale", "New Arrivals", "Brands"].map((link, i) => (
            <a key={i} href="#" style={{ color: "white", textDecoration: "none" }}>
              {link}
            </a>
          ))}
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "9999px",
              padding: "0.4rem 0.75rem",
              display: "flex",
              alignItems: "center",
              width: "250px",
            }}
          >
            <input
              type="text"
              placeholder="Search for products…"
              style={{
                border: "none",
                outline: "none",
                fontSize: "0.875rem",
                background: "transparent",
                flex: 1,
              }}
            />
            <span role="img" aria-label="search">
              🔍
            </span>
          </div>
          <span role="img" aria-label="user" style={{ fontSize: "1.2rem", color: "white" }}>
            👤
          </span>
          <span role="img" aria-label="cart" style={{ fontSize: "1.2rem", color: "white" }}>
            🛒
          </span>
        </div>
      </header>

      {/* Hero Section with animation */}
<section
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "3rem 2rem",
    flexWrap: "wrap",
    animation: animate ? "fadeSlide 1s ease-out" : "none",
  }}
>
  <div style={{ flex: "1 1 50%" }}>
    <h1
      style={{
        fontSize: "3rem",
        fontWeight: "900",
        color: "#facc15",
        lineHeight: "1.2",
        marginBottom: "1rem",
      }}
    >
      FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
    </h1>
    <p style={{ color: "#d1d5db", marginBottom: "1.5rem" }}>
      Browse through our diverse range of meticulously crafted garments, designed to
      bring out your individuality and cater to your sense of style.
    </p>

    <button
      style={{
        background: "linear-gradient(90deg, #facc15, #fcd34d)",
        color: "#000",
        padding: "0.8rem 2.2rem",
        borderRadius: "999px",
        fontWeight: "700",
        border: "none",
        cursor: "pointer",
        fontSize: "1rem",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        transition: "all 0.3s ease-in-out",
      }}
      onMouseOver={(e) => {
        e.target.style.transform = "scale(1.05)";
        e.target.style.boxShadow = "0 6px 16px rgba(0,0,0,0.25)";
      }}
      onMouseOut={(e) => {
        e.target.style.transform = "scale(1)";
        e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
      }}
    >
      Shop Now
    </button>

    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        color: "white",
        fontSize: "1.2rem",
        gap: "1rem",
        flexWrap: "wrap",
        fontWeight: "900",
        marginTop: "2rem",
      }}
    >
      <div>
        <strong>200+</strong>
        <br />
        <strong>International Brands</strong>
      </div>
      <div>
        <strong>2,000+</strong>
        <br />
        <strong>High-Quality Products</strong>
      </div>
      <div>
        <strong>30,000+</strong>
        <br />
        <strong>Happy Customers</strong>
      </div>
    </div>
  </div>

  <div style={{ flex: "1 1 50%", textAlign: "right" }}>
    <img
      src="/img/Rectangle 2 (3).jpg"
      alt="Hero"
      style={{
        width: "92%",
        height: "500px",
        objectFit: "cover",
        borderRadius: "1rem",
        marginRight: "0",
        boxShadow: "0 10px 25px rgba(0,0,0,0.35)",
        transform: animate ? "scale(1.02)" : "none",
        transition: "transform 0.6s ease-out",
      }}
    />
  </div>
</section>


      {/* Brands */}
      <section
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "2.5rem 1.5rem",
          backgroundColor: "black",
          fontSize: "1.125rem",
          fontWeight: "600",
          minHeight: "140px",
          alignItems: "center",
        }}
      >
        {brands.map((brand, i) => (
          <div key={i}>{brand}</div>
        ))}
      </section>

{/* New Arrivals */}
<section style={{ padding: "2.5rem 1.5rem" }}>
  <h2
    style={{
      textAlign: "center",
      color: "#D9F99D",
      fontSize: "1.5rem",
      fontWeight: "bold",
      marginBottom: "1.5rem",
    }}
  >
    NEW ARRIVALS
  </h2>
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "2rem",
      justifyItems: "center",
    }}
  >
    {newArrivals.map((item, i) => (
      <div
        key={i}
        style={{
          backgroundColor: "#28352c",
          padding: "1.5rem",
          borderRadius: "0.75rem",
          textAlign: "center",
          width: "100%",
          height: "340px",
          opacity: animate ? 1 : 0,
          transform: animate ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
          transitionDelay: `${i * 0.2}s`,
          cursor: "pointer",
          boxShadow: "0 0 8px rgb(250 204 21 / 0.5)",
          transitionProperty: "opacity, transform, box-shadow, transform",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(0) scale(1.05)";
          e.currentTarget.style.boxShadow = "0 0 18px rgb(250 204 21 / 0.9)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0) scale(1)";
          e.currentTarget.style.boxShadow = "0 0 8px rgb(250 204 21 / 0.5)";
        }}
      >
        <div
          style={{
            width: "100%",
            height: "200px",
            borderRadius: "0.375rem",
            overflow: "hidden",
            boxShadow: "0 4px 6px rgba(0,0,0,0.4)",
            marginBottom: "1rem",
          }}
        >
          <img
            src={item.img}
            alt={item.title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <h3
          style={{
            fontWeight: "600",
            fontSize: "1.1rem",
            marginBottom: "0.5rem",
            color: "#facc15",
          }}
        >
          {item.title}
        </h3>
        <p
          style={{
            fontWeight: "700",
            fontSize: "1rem",
            marginBottom: "0.25rem",
          }}
        >
          {item.price}{" "}
          {item.originalPrice && (
            <span
              style={{
                textDecoration: "line-through",
                color: "#a1a1aa",
                fontWeight: "400",
                marginLeft: "0.5rem",
                fontSize: "0.85rem",
              }}
            >
              {item.originalPrice}
            </span>
          )}
        </p>
        {item.discount && (
          <p
            style={{
              color: "#22c55e",
              fontWeight: "600",
              fontSize: "0.85rem",
              marginTop: "-0.3rem",
            }}
          >
            {item.discount}
          </p>
        )}
      </div>
    ))}
  </div>
</section>
 {/* Top Selling */}
      <section style={{ padding: "2.5rem 1.5rem" }}>
        <h2
          style={{
            textAlign: "center",
            color: "#D9F99D",
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: "1.5rem",
          }}
        >
          TOP SELLING
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "4rem",
            justifyItems: "center",
          }}
        >
          {topSelling.map((item, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#28352c",
                padding: "1.5rem",
                borderRadius: "0.75rem",
                textAlign: "center",
                width: "100%",
                height: "300px",
                cursor: "pointer",
                boxShadow: "0 0 8px rgb(250 204 21 / 0.5)",
                transition: "box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 0 18px rgb(250 204 21 / 0.9)";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 0 8px rgb(250 204 21 / 0.5)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "0.5rem",
                  marginBottom: "1rem",
                }}
              />
              <h3
                style={{
                  fontWeight: "600",
                  fontSize: "1.1rem",
                  marginBottom: "0.5rem",
                  color: "#facc15",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontWeight: "700",
                  fontSize: "1rem",
                  marginBottom: "0.25rem",
                }}
              >
                {item.price}{" "}
                {item.originalPrice && (
                  <span
                    style={{
                      textDecoration: "line-through",
                      color: "#a1a1aa",
                      fontWeight: "400",
                      marginLeft: "0.5rem",
                      fontSize: "0.85rem",
                    }}
                  >
                    {item.originalPrice}
                  </span>
                )}
              </p>
              {item.discount && (
                <p
                  style={{
                    color: "#22c55e",
                    fontWeight: "600",
                    fontSize: "0.85rem",
                    marginTop: "-0.3rem",
                  }}
                >
                  {item.discount}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Browse by Dress Style */}
      <BrowseByDressStyle />

{/* Our Happy Customers */}
<section style={{ padding: "2.5rem 1.5rem" }}>
  <h2
    style={{
      textAlign: "center",
      color: "#D9F99D",
      fontSize: "1.25rem",
      fontWeight: "bold",
      marginBottom: "1rem",
    }}
  >
    OUR HAPPY CUSTOMERS
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))",
      gap: "5rem",
    }}
  >
    {testimonials.map((t, i) => (
      <div
        key={i}
        className="fade-slide-up"
        style={{
          backgroundColor: "#28352c",
          padding: "1.5rem",
          borderRadius: "0.75rem",
          minHeight: "220px",
          animationDelay: `${i * 0.2}s`,
          cursor: "pointer",
          boxShadow: "0 0 8px rgb(250 204 21 / 0.5)",
          transition: "box-shadow 0.3s ease, transform 0.3s ease",
          transitionProperty: "box-shadow, transform",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = "0 0 18px rgb(250 204 21 / 0.9)";
          e.currentTarget.style.transform = "scale(1.05)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "0 0 8px rgb(250 204 21 / 0.5)";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        <p style={{ color: "#facc15", fontSize: "1rem", marginBottom: "0.75rem" }}>
          ★★★★★
        </p>
        <p style={{ fontWeight: "600", marginBottom: "0.5rem" }}>{t.name} ✅</p>
        <p style={{ fontSize: "0.9rem", color: "#d1d5db" }}>{t.review}</p>
      </div>
    ))}

    <div
      className="fade-slide-up"
      style={{
        backgroundColor: "#28352c",
        padding: "1.5rem",
        borderRadius: "0.75rem",
        minHeight: "220px",
        animationDelay: `${testimonials.length * 0.2}s`,
        cursor: "pointer",
        boxShadow: "0 0 8px rgb(250 204 21 / 0.5)",
        transition: "box-shadow 0.3s ease, transform 0.3s ease",
        transitionProperty: "box-shadow, transform",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 0 18px rgb(250 204 21 / 0.9)";
        e.currentTarget.style.transform = "scale(1.05)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 0 8px rgb(250 204 21 / 0.5)";
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      <p style={{ color: "#facc15", fontSize: "1rem", marginBottom: "0.75rem" }}>
        ★★★★★
      </p>
      <p style={{ fontWeight: "600", marginBottom: "0.5rem" }}>
        10K+ Happy Shoppers ✅
      </p>
      <p style={{ fontSize: "0.9rem", color: "#d1d5db" }}>
        Trusted by thousands across India. Your style, our passion.
      </p>
    </div>
  </div>
</section>

{/* NEWSLETTER */}
<section style={{ padding: '2.5rem 1.5rem', backgroundColor: '#101612', textAlign: 'center' }}>
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

{/* FOOTER */}
<footer style={{ padding: '3rem 1.5rem', backgroundColor: '#101612', fontSize: '0.9rem', color: '#9ca3af' }}>
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



export default Homepage;