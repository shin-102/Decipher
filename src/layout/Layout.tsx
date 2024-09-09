import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";


type Props = {
  children?: React.ReactNode ;
};

const Layout: React.FC<Props> = ({children }) => {
  return(
    <body className="bgtexture flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-col gap-28">
        {children}
      </main>
      <Footer /> 
    </body>
  );
}

export default Layout;