import Header from "@/components/organisms/Header";
import Navbar from "@/components/organisms/Navbar";

interface Children {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: Children) {
  return (
    <div>
      <Header />
      <Navbar />
      {children}
    </div>
  );
}
