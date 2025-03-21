
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section className="relative min-h-screen pt-20 flex items-center overflow-hidden bg-gradient-to-b from-white to-tmz-gray">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(14,165,233,0.05),transparent)] pointer-events-none"></div>
      
      <div className="section-container grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="max-w-2xl animate-fade-in-left">
          <div className="badge bg-tmz-blue bg-opacity-10 text-tmz-blue mb-6">
            Software House Especializada
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Transforme suas ideias em <span className="text-tmz-blue">lucro</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 text-balance">
            Desenvolvemos soluções de software que ajudam nossos clientes a aumentar a eficiência, reduzir custos e maximizar os lucros.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              asChild 
              className="bg-tmz-blue hover:bg-tmz-lightBlue text-white rounded-full text-lg px-8 py-6 transition-all duration-300 shadow-[0_0_20px_rgba(14,165,233,0.3)]"
            >
              <a href="#contact">Iniciar Projeto</a>
            </Button>
            <Button 
              variant="outline" 
              onClick={scrollToServices}
              className="rounded-full text-lg px-8 py-6 border-gray-300 hover:bg-gray-100 transition-all duration-300"
            >
              Saiba Mais
            </Button>
          </div>
        </div>
        
        <div className="relative animate-fade-in-right">
          <div className="relative w-full aspect-square max-w-lg mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-tmz-blue to-blue-600 opacity-10 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="relative bg-white glass-panel shadow-xl rounded-2xl overflow-hidden border border-gray-100">
              <div className="p-6">
                <div className="flex space-x-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-4">
                  <div className="h-8 bg-gray-100 rounded-md animate-pulse-slow"></div>
                  <div className="h-32 bg-tmz-blue bg-opacity-10 rounded-md flex items-center justify-center">
                    <div className="text-tmz-blue font-semibold">Soluções que geram resultados</div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-16 bg-gray-100 rounded-md animate-pulse-slow delay-100"></div>
                    <div className="h-16 bg-gray-100 rounded-md animate-pulse-slow delay-200"></div>
                    <div className="h-16 bg-gray-100 rounded-md animate-pulse-slow delay-150"></div>
                    <div className="h-16 bg-gray-100 rounded-md animate-pulse-slow delay-250"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={scrollToServices}
          aria-label="Rolar para baixo"
          className="rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm"
        >
          <ArrowDown className="h-5 w-5 text-gray-500" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
