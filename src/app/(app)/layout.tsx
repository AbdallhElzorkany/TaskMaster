import React from "react";
import Header from "@/components/Header";
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative bg-gray-100">
      <Header />
      {children}
    </div>
  );
};

export default layout;
