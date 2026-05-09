import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AuditForm from "@/components/AuditForm";
import Charts from "@/components/Charts";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AuditForm />
      <Charts />
      <Footer />
    </main>
  );
}