"use server";
import { currentUser } from "@clerk/nextjs/server";
import { Pinecone } from "@pinecone-database/pinecone";

const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY as string });
const index = pc.index(process.env.PINECONE_INDEX as string);

const deleteData = async () => {
  try {
   const user = await currentUser()
   if (!user?.emailAddresses?.[0]?.emailAddress) {
    throw new Error("User email not found");
  }
   const namespace= user?.emailAddresses[0].emailAddress as string

    await index.namespace(namespace).deleteAll();

    return { success: true };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : "Unknown error"};
  }
};

export default deleteData;
