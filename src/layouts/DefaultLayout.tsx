import Header from "@/components/organisms/Header";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";

interface Children {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: Children) {
  return (
    <div>
      <Header />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
