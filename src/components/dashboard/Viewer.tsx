import deleteData from "@/utils/deleteData";
import { useEffect } from "react";

interface ViewerProps {
  selectedPdf: string | null; // Ensure selectedPdf is either a string or null
}

export function Viewer({ selectedPdf }: ViewerProps) {
  useEffect(() => {
    const fetchPdfData = async () => {
      if (!selectedPdf) {
        console.warn("No PDF selected. Skipping fetch.");
        return;
      }

      console.log("Selected PDF:", selectedPdf);

      // Attempt to delete data
        const response = await deleteData();
        if (response.success) {
          console.log("Data deleted successfully");
        } else {
          console.error("Error occurred while deleting data");
        }

      // Attempt to upload PDF data
      try {
        const res = await fetch("/api/upload", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ selectedPdf }), // Ensure it's properly wrapped
        });

        if (!res.ok) {
          throw new Error(`Failed to upload PDF. Status: ${res.status}`);
        }

        console.log("PDF data uploaded successfully");
      } catch (error) {
        console.error("Failed to send upload request:", error);
      }
    };

    fetchPdfData();
  }, [selectedPdf]);

  return (
    <div className="h-full">
      {selectedPdf ? (
        <iframe
          src={`/data/${selectedPdf}`}
          className="w-full h-full"
          title={selectedPdf}
          frameBorder="0"
          aria-label={selectedPdf}
        ></iframe>
      ) : (
        <p>No PDF selected</p> // Fallback UI when no PDF is selected
      )}
    </div>
  );
}
