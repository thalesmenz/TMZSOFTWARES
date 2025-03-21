import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />

      {/* Botão de WhatsApp */}
      <a
        href="https://wa.me/5519991099949" // Substitua por seu número no formato internacional (ex: +5511999999999)
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
        aria-label="Contato via WhatsApp"
      >
        <svg
          className="w-8 h-8 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.135.557 4.21 1.61 6.03L0 24l6.06-1.59A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.74 0-3.42-.45-4.89-1.29l-.34-.2-3.58.94.95-3.53-.2-.34A10 10 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.19-6.49c-.29-.15-1.74-.86-2-1s-.39-.2-.56.15-.66.86-.81 1.04c-.14.18-.29.2-.58.07-.29-.15-1.22-.45-2.32-1.44-.86-.78-1.44-1.74-1.61-2.03s-.02-.44.13-.58c.13-.13.29-.34.43-.51.15-.17.2-.29.29-.49.1-.2.05-.39-.02-.54-.07-.15-.58-1.39-.8-1.9s-.43-.44-.58-.44h-.49c-.17 0-.36.05-.54.24s-.68.66-.68 1.61.7 1.86.84 2 1.22 1.88 1.86 2.64c.07.09 1.27 1.93 3.07 2.61.42.17.75.29 1.07.37.44.12.84.1 1.15.06.35-.05 1.07-.44 1.22-.81.15-.36.15-.66.1-.81z" />
        </svg>
      </a>
    </div>
  );
};

export default Index;
