import DashChapters from "./dash-chapters";
import DashPdfViewer from "./dash-pdf-viewer";
import AiChat from "./ai-chat";
import QuizCard from "../quiz-card";

export default function DashHero({selectedLevel,selectedFolder,pdfs,handlePdfSelect,selectedPdf}:any){
 
  return (
    <div className="grid grid-cols-12 gap-4 w-screen h-screen ">
      {selectedLevel && (
        <div className="col-span-2 flex flex-col gap-3 ">
          <div className="">
          <DashChapters
            selectedFolder={selectedFolder}
            selectedLevel={selectedLevel}
            pdfs={pdfs}
            handlePdfSelect={handlePdfSelect}
            selectedPdf={selectedPdf}
          />
          </div>
          {selectedPdf && (<div className="">
          <QuizCard selectedPdf={selectedPdf}/>
          </div>)}
        </div>
       )}

        {selectedPdf && (
          <div className="col-span-7">
            <DashPdfViewer selectedPdf={selectedPdf} />
          
          </div>
          
        )}
        {selectedPdf && (
          <div className="  grid col-span-3">
          <AiChat />
          </div>
          
        )}
        
    </div>


  );
};
