import { Card, CardContent } from "@/components/ui/card";
import type React from "react";

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <Card className="w-[400px] h-[600px] bg-gray-300">
      <CardContent>{children}</CardContent>
    </Card>
  );
}
