import { SideBar } from "./Sidebar";
import {AiChat} from "./AiChat";
import {QuizCard} from "./QuizCard";
import { Viewer } from "./Viewer";


export function Hero({selectedLevel,selectedFolder,pdfs,handlePdfSelect,selectedPdf}:any){
 
  return (
    <div className=" gap-4 w-screen h-screen flex justify-evenly">

      {/* Right Sidebar */}
      {selectedLevel && (
        <div className="flex flex-col gap-3 ">
          <SideBar
            selectedFolder={selectedFolder}
            selectedLevel={selectedLevel}
            pdfs={pdfs}
            handlePdfSelect={handlePdfSelect}
            selectedPdf={selectedPdf}
          />
          {selectedPdf && (
            <div className=" flex flex-col gap-4">
                  <AiChat/>
                  <QuizCard/>
            </div>)}
        </div>  
       )}

      {/* Pdf section right */}
      {selectedPdf ? (
        <div className="w-full px-4">
          <Viewer selectedPdf={selectedPdf} />
        </div>
      ):(
        <div className="w-full">

        </div>
      )
    }
        
    </div>

  );
};
