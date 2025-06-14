
import { Heart, MessageCircle, Share, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Post {
  id: number;
  author: string;
  community: string;
  timeAgo: string;
  title: string;
  content: string;
  tags: string[];
  likes: number;
  comments: number;
  avatar: string;
}

interface PostCardProps {
  post: Post;
}

export const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="bg-card rounded-lg border border-border p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-sm">{post.avatar}</span>
          </div>
          <div>
            <p className="font-medium text-foreground">{post.author}</p>
            <p className="text-sm text-muted-foreground">
              in {post.community} • {post.timeAgo}
            </p>
          </div>
        </div>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="w-4 h-4" />
        </Button>
      </div>

      <h3 className="text-lg font-semibold text-foreground mb-3">{post.title}</h3>
      <p className="text-muted-foreground mb-4 leading-relaxed">{post.content}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag, index) => (
          <span
            key={index}
            className="text-sm bg-accent text-accent-foreground px-2 py-1 rounded-md hover:bg-accent/80 transition-colors cursor-pointer"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-red-500">
            <Heart className="w-4 h-4 mr-1" />
            {post.likes}
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-blue-500">
            <MessageCircle className="w-4 h-4 mr-1" />
            {post.comments}
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-green-500">
            <Share className="w-4 h-4 mr-1" />
            Share
          </Button>
        </div>
      </div>
    </div>
  );
};
