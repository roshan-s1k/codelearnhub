"use server";

import { useUser } from "@clerk/nextjs";
import { Pinecone } from "@pinecone-database/pinecone";

const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY as string });
const index = pc.index(process.env.PINECONE_INDEX as string);

const deleteData = async () => {
  try {
    const { user } = useUser();

    await index.namespace(user?.emailAddresses[0].emailAddress as string).deleteAll();

    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
};

export { deleteData };
