import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Post } from "@/types/post";
import { Link } from "react-router-dom";
type PostCardProps = {
  post: Post;
};
export function PostCard({ post }: PostCardProps) {
  return (
    <Link to={`/posts/${post.id}`}>
      <Card x-chunk="dashboard-05-chunk-1">
        <CardHeader className="pb-2">
          <CardTitle className="text-4xl">$1,329</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xs text-muted-foreground">
            +25% from last week
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
