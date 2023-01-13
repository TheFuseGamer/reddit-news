import { useEffect, useState } from "react";
import "./App.scss";
import Post from "./components/post";
import { getRedditPosts } from "./services/RedditService";
import { RedditPost } from "./types";

function App() {
  const [posts, setPosts] = useState<RedditPost[]>([]);

  useEffect(() => {
    getRedditPosts(["typescript", "csharp", "react"]).then((posts) => {
      setPosts(posts);
    });
  }, []);

  return (
    <div className="App">
      {posts.map((post) => (
        <Post redditPost={post} />
      ))}
    </div>
  );
}

export default App;
