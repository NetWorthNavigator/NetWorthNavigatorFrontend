import { Inter } from "next/font/google";
import "/app/globals.css";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/navigation/Footer";


const inter = Inter({ subsets: ['latin'] });

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={inter.className}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

