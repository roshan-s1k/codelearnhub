
import { Pinecone } from "@pinecone-database/pinecone";
import { generateEmedding } from "@/utils/generateEmbeddings";

const pineconeIndex = process.env.PINECONE_INDEX as string;

const pc = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY as string,
});

const checkIndex = async (Index: string) => {
  try {
    await pc.describeIndex(Index);
    return true;
  } catch (error) {
    return false;
  }
};

const storeEmbeddings = async (data: string, namespace: string) => {
  const indexExists = await checkIndex(pineconeIndex);

  if (!indexExists) {
    await pc.createIndex({
      name: pineconeIndex,
      dimension: 768,
      metric: "cosine",
      spec: {
        serverless: {
          cloud: "aws",
          region: "us-east-1",
        },
      },
    });
  }

  const embeddings = await generateEmedding(data);

  const index = pc.index(pineconeIndex);

  await index.namespace(namespace).upsert([...embeddings]);
};

export { storeEmbeddings };
