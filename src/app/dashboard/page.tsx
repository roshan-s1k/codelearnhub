"use client"

import { useState } from "react";
import {pdfFiles} from "@/utils/pdfFiles";
import {Footer} from "@/components/footer";
import {  Header } from "@/components/dashboard/Header";
import {Hero} from "@/components/dashboard/Hero";

export default function Page() {
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [pdfs, setPdfs] = useState([]);
  const [selectedPdf, setSelectedPdf] = useState(null);

  const folders = ["python", "java", "c++"];
  const levels = ["Basic", "Intermediate", "Advanced"];


  const handleFolderClick = (folder:any) => {
    if (selectedFolder === folder) {
      setSelectedFolder(null);
      setSelectedLevel(null);
      setPdfs([]);
      setSelectedPdf(null);
    } else {
      setSelectedFolder(folder);
      setSelectedLevel(null);
      setPdfs([]);
      setSelectedPdf(null);
    }
  };

  const handleLevelClick = (level:any) => {
    if (selectedFolder && pdfFiles[selectedFolder][level]) {
      setSelectedLevel(level);
      setPdfs(pdfFiles[selectedFolder][level]);
      setSelectedPdf(null);
    }
  };

  const handlePdfSelect = (pdf: any) => {
    setSelectedPdf(pdf.path);
  };

  return (
    <main>
      {/* Dashboard Header */}
      <Header
        folders={folders}
        selectedFolder={selectedFolder}
        handleFolderClick={handleFolderClick}
        
        levels={levels}
        selectedLevel={selectedLevel}
        handleLevelClick={handleLevelClick}
      />
      
      <div className="pt-20">
        <Hero
          selectedLevel={selectedLevel} 
          selectedFolder={selectedFolder} 
          pdfs={pdfs} 
          handlePdfSelect={handlePdfSelect} 
          selectedPdf={selectedPdf}
        />
      </div>
      
      <Footer/>
    </main>
  );
}
