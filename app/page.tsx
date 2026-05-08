import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AuditForm from "@/components/AuditForm";
import ResultCard from "@/components/ResultCard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AuditForm />
      <ResultCard />
      <Footer />
    </main>
  );
}