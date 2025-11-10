import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const tools = [
    { name: "Merge PDF", path: "/merge-pdf" },
    { name: "Split PDF", path: "/split-pdf" },
    { name: "Compress PDF", path: "/compress-pdf" },
    { name: "Edit PDF", path: "/edit-pdf" },
    { name: "Sign PDF", path: "/sign-pdf" },
    { name: "PDF Converter", path: "/pdf-converter" },
    { name: "Images to PDF", path: "/images-to-pdf" },
    { name: "PDF to Images", path: "/pdf-to-images" },
    { name: "Rearrange PDF pages", path: "/rearrange-pdf-pages" },
    { name: "Protect PDF", path: "/protect-pdf" },
    { name: "Unlock PDF", path: "/unlock-pdf" },
    { name: "Add Watermark", path: "/add-watermark" },
    { name: "PDF Overlay", path: "/pdf-overlay" },
  ];

  return (
    <div className="app">

      <header className="header">
        <h1 className="logo">PDF24</h1>
        <nav className="nav-links">
          <a href="#">PDF24 Creator</a>
          <a href="#">PDF24 Tools</a>
          <a href="#">PDF24 Fax</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-left">
          <div className="sign-board">
            <p>PDF24 Creator</p>
            <p>PDF24 Tools</p>
            <p>PDF24 Fax</p>
          </div>
        </div>

        <div className="hero-right">
          <button className="download-btn">DOWNLOAD</button>
          <p className="note">100% Free | 100% Free of spyware</p>
          <p className="sheep">🐑</p>
          <h2 className="sub-heading">
            PDF24 has solutions for all PDF problems
          </h2>
        </div>
      </section>

      <section className="tools">
        <h2>PDF24 Tools</h2>
        <p className="tools-desc">Free and easy to use online PDF tools</p>

        <div className="tool-grid">
          {tools.map((tool, index) => (
            <div
              className="tool-card"
              key={index}
              onClick={() => navigate(tool.path)}
            >
              <p>{tool.name}</p>
            </div>
          ))}
        </div>
        <button className="creator-btn" onClick={() => navigate("/all-tools")}>All Tools</button>

      </section>

      <footer className="footer">
        <div className="social-icons">

          <a href="#" aria-label="Facebook">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1.5em"
              height="1.5em"
              fill="currentColor"
            >
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"></path>
            </svg>
          </a>

          <a href="#" aria-label="Twitter">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="1.5em"
              height="1.5em"
              fill="currentColor"
            >
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48z"></path>
            </svg>
          </a>

          <a href="#" aria-label="LinkedIn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              height="1.4em"
              width="1.4em"
              fill="currentColor"
            >
              <path d="M3.468 1.948C5.303 3.325 7.276 6.118 8 7.616c.725-1.498 2.697-4.29 4.532-5.668C13.855.955 16 .186 16 2.632c0 .489-.28 4.105-.444 4.692-.572 2.04-2.653 2.561-4.504 2.246 3.236.551 4.06 2.375 2.281 4.2-3.376 3.464-4.852-.87-5.23-1.98-.07-.204-.103-.3-.103-.218 0-.081-.033.014-.102.218-.379 1.11-1.855 5.444-5.231 1.98-1.778-1.825-.955-3.65 2.28-4.2-1.85.315-3.932-.205-4.503-2.246C.28 6.737 0 3.12 0 2.632 0 .186 2.145.955 3.468 1.948Z"></path>
            </svg>
          </a>

          <a href="#" aria-label="GitHub">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 -2 24 24"
              fill="currentColor"
            >
              <path d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"></path>
            </svg>
          </a>
        </div>

        <div className="footer-links">
          <a href="#">About Us</a>
          <a href="#">Help Center</a>
          <a href="#">Contact</a>
          <a href="#">Legal Notice</a>
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Privacy Settings</a>
        </div>

        <p className="footer-site">www.pdf26.org</p>
        <p className="footer-copy">© 2025 Geek Software GmbH — WE ❤️ PDF</p>
      </footer>
    </div>
  );
}

export default Home;

