import React from "react";
import Header from "@/components/Header";
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative h-screen">
      <Header />
      {children}
    </div>
  );
};

export default layout;
