import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="min-h-dvh flex flex-col items-center justify-between w-full">
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
};

export default layout;
