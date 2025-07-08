import React, { useState } from "react";
import { Menu, X, Github, Linkedin, Instagram, Mail, ChevronDown } from "lucide-react";

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        backdropFilter: "blur(10px)",
        zIndex: 50,
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "4rem",
        }}
      >
        {/* Logo */}
        <div>
          <h1
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              background: "linear-gradient(to right, #2563eb, #9333ea)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            DigitalCraft
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav
          style={{
            display: window.innerWidth >= 768 ? "flex" : "none",
            gap: "2rem",
          }}
        >
          <a
            href="#home"
            style={{
              color: "#374151",
              textDecoration: "none",
              fontWeight: "500",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#2563eb")}
            onMouseLeave={(e) => (e.target.style.color = "#374151")}
          >
            Beranda
          </a>
          <a
            href="#about"
            style={{
              color: "#374151",
              textDecoration: "none",
              fontWeight: "500",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#2563eb")}
            onMouseLeave={(e) => (e.target.style.color = "#374151")}
          >
            Tentang
          </a>
          <a
            href="#portfolio"
            style={{
              color: "#374151",
              textDecoration: "none",
              fontWeight: "500",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#2563eb")}
            onMouseLeave={(e) => (e.target.style.color = "#374151")}
          >
            Portfolio
          </a>
          <a
            href="#contact"
            style={{
              color: "#374151",
              textDecoration: "none",
              fontWeight: "500",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#2563eb")}
            onMouseLeave={(e) => (e.target.style.color = "#374151")}
          >
            Kontak
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          style={{
            display: window.innerWidth < 768 ? "block" : "none",
            background: "none",
            border: "none",
            color: "#374151",
            cursor: "pointer",
          }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          style={{
            display: window.innerWidth < 768 ? "block" : "none",
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(10px)",
            padding: "1rem",
            margin: "0.5rem",
            borderRadius: "0.5rem",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <a
            href="#home"
            style={{
              display: "block",
              padding: "0.5rem 0.75rem",
              color: "#374151",
              textDecoration: "none",
              borderRadius: "0.25rem",
            }}
          >
            Beranda
          </a>
          <a
            href="#about"
            style={{
              display: "block",
              padding: "0.5rem 0.75rem",
              color: "#374151",
              textDecoration: "none",
              borderRadius: "0.25rem",
            }}
          >
            Tentang
          </a>
          <a
            href="#portfolio"
            style={{
              display: "block",
              padding: "0.5rem 0.75rem",
              color: "#374151",
              textDecoration: "none",
              borderRadius: "0.25rem",
            }}
          >
            Portfolio
          </a>
          <a
            href="#contact"
            style={{
              display: "block",
              padding: "0.5rem 0.75rem",
              color: "#374151",
              textDecoration: "none",
              borderRadius: "0.25rem",
            }}
          >
            Kontak
          </a>
        </div>
      )}
    </header>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #faf5ff 100%)",
        paddingTop: "4rem",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1rem",
          textAlign: "center",
        }}
      >
        {/* Hero Image */}
        <div style={{ marginBottom: "2rem" }}>
          <div
            style={{
              position: "relative",
              width: "16rem",
              height: "16rem",
              margin: "0 auto 2rem",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "linear-gradient(135deg, #60a5fa, #a855f7)",
                borderRadius: "50%",
                opacity: 0.2,
                animation: "pulse 2s infinite",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                top: "0.5rem",
                left: "0.5rem",
                right: "0.5rem",
                bottom: "0.5rem",
                background: "linear-gradient(135deg, #3b82f6, #9333ea)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  color: "white",
                  fontSize: "4rem",
                  fontWeight: "bold",
                }}
              >
                DC
              </div>
            </div>
          </div>
        </div>

        {/* Hero Text */}
        <h2
          style={{
            fontSize: window.innerWidth < 768 ? "2.5rem" : "3.5rem",
            fontWeight: "bold",
            color: "#111827",
            marginBottom: "1.5rem",
            lineHeight: "1.2",
          }}
        >
          Selamat Datang di
          <div
            style={{
              background: "linear-gradient(to right, #2563eb, #9333ea)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            DigitalCraft Studio
          </div>
        </h2>

        <p
          style={{
            fontSize: window.innerWidth < 768 ? "1.1rem" : "1.25rem",
            color: "#4b5563",
            marginBottom: "2rem",
            maxWidth: "48rem",
            margin: "0 auto 2rem",
            lineHeight: "1.6",
          }}
        >
          Kami adalah penyedia solusi kreatif digital yang mengubah ide-ide brilian menjadi pengalaman digital yang memukau. Dari desain web modern hingga aplikasi mobile yang inovatif.
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            flexDirection: window.innerWidth < 640 ? "column" : "row",
            gap: "1rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            style={{
              background: "linear-gradient(to right, #2563eb, #9333ea)",
              color: "white",
              padding: "0.75rem 2rem",
              borderRadius: "9999px",
              fontWeight: "600",
              border: "none",
              cursor: "pointer",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.boxShadow = "0 10px 25px rgba(37, 99, 235, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "none";
            }}
          >
            Lihat Portfolio
          </button>
          <button
            style={{
              border: "2px solid #2563eb",
              color: "#2563eb",
              background: "transparent",
              padding: "0.75rem 2rem",
              borderRadius: "9999px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#2563eb";
              e.target.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "#2563eb";
            }}
          >
            Hubungi Kami
          </button>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            marginTop: "4rem",
            animation: "bounce 1s infinite",
          }}
        >
          <ChevronDown style={{ margin: "0 auto", color: "#9ca3af" }} size={32} />
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#111827",
        color: "white",
        padding: "3rem 0",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: window.innerWidth < 768 ? "1fr" : "1fr 1fr 1fr",
            gap: "2rem",
          }}
        >
          {/* Brand Section */}
          <div
            style={{
              textAlign: window.innerWidth < 768 ? "center" : "left",
            }}
          >
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                background: "linear-gradient(to right, #60a5fa, #a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginBottom: "1rem",
              }}
            >
              DigitalCraft
            </h3>
            <p
              style={{
                color: "#9ca3af",
                lineHeight: "1.6",
              }}
            >
              Menciptakan solusi digital yang inovatif dan memukau untuk masa depan yang lebih baik.
            </p>
          </div>

          {/* Quick Links */}
          <div
            style={{
              textAlign: "center",
            }}
          >
            <h4
              style={{
                fontSize: "1.125rem",
                fontWeight: "600",
                marginBottom: "1rem",
              }}
            >
              Quick Links
            </h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <a
                href="#home"
                style={{
                  color: "#9ca3af",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "white")}
                onMouseLeave={(e) => (e.target.style.color = "#9ca3af")}
              >
                Beranda
              </a>
              <a
                href="#about"
                style={{
                  color: "#9ca3af",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "white")}
                onMouseLeave={(e) => (e.target.style.color = "#9ca3af")}
              >
                Tentang
              </a>
              <a
                href="#portfolio"
                style={{
                  color: "#9ca3af",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "white")}
                onMouseLeave={(e) => (e.target.style.color = "#9ca3af")}
              >
                Portfolio
              </a>
              <a
                href="#contact"
                style={{
                  color: "#9ca3af",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "white")}
                onMouseLeave={(e) => (e.target.style.color = "#9ca3af")}
              >
                Kontak
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div
            style={{
              textAlign: window.innerWidth < 768 ? "center" : "right",
            }}
          >
            <h4
              style={{
                fontSize: "1.125rem",
                fontWeight: "600",
                marginBottom: "1rem",
              }}
            >
              Connect With Us
            </h4>
            <div
              style={{
                display: "flex",
                justifyContent: window.innerWidth < 768 ? "center" : "flex-end",
                gap: "1rem",
              }}
            >
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#9ca3af",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "white";
                  e.target.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#9ca3af";
                  e.target.style.transform = "scale(1)";
                }}
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#9ca3af",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "white";
                  e.target.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#9ca3af";
                  e.target.style.transform = "scale(1)";
                }}
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#9ca3af",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "white";
                  e.target.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#9ca3af";
                  e.target.style.transform = "scale(1)";
                }}
              >
                <Github size={24} />
              </a>
              <a
                href="mailto:contact@digitalcraft.com"
                style={{
                  color: "#9ca3af",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "white";
                  e.target.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#9ca3af";
                  e.target.style.transform = "scale(1)";
                }}
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          style={{
            borderTop: "1px solid #374151",
            marginTop: "2rem",
            paddingTop: "2rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#9ca3af",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
            }}
          >
            © 2024 DigitalCraft Studio. Dibuat dengan <span style={{ color: "#ef4444" }}>❤️</span> oleh Tim DigitalCraft.
          </p>
        </div>
      </div>

      {/* Add CSS for animations */}
      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.3;
          }
        }

        @keyframes bounce {
          0%,
          20%,
          53%,
          80%,
          100% {
            transform: translateY(0);
          }
          40%,
          43% {
            transform: translateY(-10px);
          }
          70% {
            transform: translateY(-5px);
          }
          90% {
            transform: translateY(-2px);
          }
        }
      `}</style>
    </footer>
  );
};

// Main App Component
const App = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />
      <HeroSection />
      <Footer />
    </div>
  );
};

export default App;
