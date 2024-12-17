import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';

export const SideBar = ({ selectedFolder, selectedLevel, pdfs, handlePdfSelect }:any) => {
  return (
    selectedLevel && (
      <Card >
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-gray-800">
           {selectedFolder.toUpperCase()}
           <h3 className="font-semibold text-muted-foreground text-lg text-gray-700">
            {selectedLevel} Level
          </h3>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className=" space-y-2 mt-2 max-h-70 overflow-y-auto">
            {pdfs.length === 0 ? (
              <li className="text-gray-500">No PDFs found in this folder.</li>
            ) : (
              pdfs.map((pdf:any) => (
                <li key={pdf.path}>
                  <button
                    onClick={() => handlePdfSelect(pdf)}
                    className="w-full text-left hover:underline transition-all duration-300 text-black font-bold"
                    aria-label={`Select PDF: ${pdf.name}`}
                  >
                    -{pdf.name}
                  </button>
                </li>
              ))
            )}
          </ul>
        </CardContent>
      </Card>
    )
  );
};
