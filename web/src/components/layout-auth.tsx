import { ReactNode } from "react";

export function LayoutAuth({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {children}
    </div>
  );
}
