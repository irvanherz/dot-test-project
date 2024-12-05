import { LayoutStd } from "@/components/layout-std";
import { PostCard } from "./post-card";

export function Home() {
  const posts = [1, 2, 2, 3, 32, 432];
  return (
    <LayoutStd>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map((post: any) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </LayoutStd>
  );
}
