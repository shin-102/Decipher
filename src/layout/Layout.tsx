import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children?: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="bgtexture flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-col gap-8 md:gap-28 px-4 md:px-0 md:mx-0">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;