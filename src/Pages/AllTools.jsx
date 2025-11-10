import React from "react";
import { useNavigate } from "react-router-dom";
function AllTools() {
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
    <div className="all-tools-page">
      <h1>All PDF Tools</h1>
      <div className="tool-grid">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="tool-card"
            onClick={() => navigate(tool.path)}
          >
            <p>{tool.name}</p>
          </div>
        ))}
      </div>
      <button className="creator-btn" onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  );
}

export default AllTools;
