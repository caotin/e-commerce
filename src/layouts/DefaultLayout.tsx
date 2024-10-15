import Header from "@/components/organisms/Header/page";
import Navbar from "@/components/organisms/Navbar/page";

interface Children {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: Children) {
  return (
    <div>
      <Header />
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
