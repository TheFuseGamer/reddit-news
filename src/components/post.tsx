import { RedditPost } from "../types";
import "./post.scss";

interface PostProps {
  redditPost: RedditPost;
}

const Post: React.FC<PostProps> = ({ redditPost }) => {
  return (
    <div className="post">
      
    </div>
  );
};

export default Post;
