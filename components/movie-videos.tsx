import { API_URL } from "../app/(fetch)/fetch/server/page";

async function getVideos(id: string) {
  console.log(`Fetching video: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  throw new Error("something borke...");
  // const res = await fetch(`${API_URL}/${id}/videos`);
  // return res.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>;
}
