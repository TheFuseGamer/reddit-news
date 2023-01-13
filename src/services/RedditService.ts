import { RedditPost } from "../types";

/**
 * Get a random selection of posts from the given subreddits.
 *
 * @param subreddits The subreddits to get posts from.
 * @returns A promise that resolves to the posts.
 */
export async function getRedditPosts(
  subreddits: string[]
): Promise<RedditPost[]> {
  const response = await fetch("https://localhost:7049/Reddit/random?n=10", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(subreddits),
  });
  return response.json();
}
