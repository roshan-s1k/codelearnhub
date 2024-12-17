import { NextRequest, NextResponse } from "next/server";
import PDFParser from "pdf2json";
import path from "path"; 
import { promises as fs } from "fs";
import { storeEmbeddings } from "@/utils/storeEmbeddings";
import { currentUser } from "@clerk/nextjs/server";

export async function POST(req: NextRequest) {
  const {selectedPdf}  = await req.json();
  console.log(selectedPdf);
  
  if (!selectedPdf) {
    return NextResponse.json({ error: "File name is required" }, { status: 500 });
  }

  
  const filePath = path.join(process.cwd(), "public/data", selectedPdf);
  console.log(filePath);
  

  try {
    
    const fileBuffer = await fs.readFile(filePath);

    let parsedText = "";

    const pdfParser = new (PDFParser as any)(null, 1);

    
    const parsingPromise = new Promise((resolve, reject) => {
      pdfParser.on("pdfParser_dataError", (errData: any) => {
        console.error(errData.parserError);
        reject(errData.parserError); 
      });

      pdfParser.on("pdfParser_dataReady", () => {
        parsedText = (pdfParser as any).getRawTextContent();
        resolve(parsedText);
      });
    });

  
    await pdfParser.parseBuffer(fileBuffer);
    await parsingPromise; 

    
    const user = await currentUser()
    const namespace = user?.emailAddresses[0].emailAddress as string;

    await storeEmbeddings(parsedText, namespace);

    return NextResponse.json({ parsedText, selectedPdf });
  } catch (error) {
    console.error("Error processing file:", error);
    return NextResponse.json({ error: "Failed to process file" }, { status: 500 });
  }
}
