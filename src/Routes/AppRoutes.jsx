import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import AllTools from "../Pages/AllTools"; 
import MergePDF from "../Pages/MergePDF";
import SplitPDF from "../Pages/SplitPDF";
import CompressPDF from "../Pages/CompressPDF";
import EditPDF from "../Pages/EditPDF";
import SignPDF from "../Pages/SignPDF";
import PDFConverter from "../Pages/PDFConverter";
import ImagesToPDF from "../Pages/ImagesToPDF";
import PDFToImages from "../Pages/PDFToImages";
import RearrangePDFPages from "../Pages/RearrangePDFPages";
import ProtectPDF from "../Pages/ProtectPDF";
import UnlockPDF from "../Pages/UnlockPDF";
import AddWatermark from "../Pages/AddWatermark";
import PDFOverlay from "../Pages/PDFOverlay";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/merge-pdf" element={<MergePDF />} />
      <Route path="/all-tools" element={<AllTools />} />
      <Route path="/split-pdf" element={<SplitPDF />} />
      <Route path="/compress-pdf" element={<CompressPDF />} />
      <Route path="/edit-pdf" element={<EditPDF />} />
      <Route path="/sign-pdf" element={<SignPDF />} />
      <Route path="/pdf-converter" element={<PDFConverter />} />
      <Route path="/images-to-pdf" element={<ImagesToPDF />} />
      <Route path="/pdf-to-images" element={<PDFToImages />} />
      <Route path="/rearrange-pdf-pages" element={<RearrangePDFPages />} />
      <Route path="/protect-pdf" element={<ProtectPDF />} />
      <Route path="/unlock-pdf" element={<UnlockPDF />} />
      <Route path="/add-watermark" element={<AddWatermark />} />
      <Route path="/pdf-overlay" element={<PDFOverlay />} />
    </Routes>
  );
}

export default AppRoutes;
