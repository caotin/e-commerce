import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";

interface Children {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: Children) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
