import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-900 text-white">
      {/* <Navbar /> */}
      <div className="pt-20">{children}</div> {/* Offset for fixed nav */}
      <Footer />
    </div>
  );
}
