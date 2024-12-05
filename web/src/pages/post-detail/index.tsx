import { LayoutStd } from "@/components/layout-std";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function PostDetail() {
  return (
    <LayoutStd>
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
    </LayoutStd>
  );
}
