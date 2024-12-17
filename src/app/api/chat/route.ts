import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getData } from "@/utils/queryEmbeddings";
import { currentUser } from "@clerk/nextjs/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const chat = model.startChat({
  history: [],
});

export async function POST(request: NextRequest) {
  const response= await request.json()
  const user = await currentUser()
  const namespace = user?.emailAddresses[0].emailAddress as string;

  const { message } = response;

  const answer = await getData(message, namespace);

  const prompt = `Can you answer the question ${message} based on the following ${answer}`;

  const result = await chat.sendMessage(prompt);

  return NextResponse.json({ result: result.response.text() });
}
