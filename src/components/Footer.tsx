
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="bg-tmz-gray py-12 md:py-16 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(14,165,233,0.05),transparent)] pointer-events-none"></div>
      
      <div className="section-container">
        <div className="flex justify-between items-start flex-col md:flex-row gap-8">
          <div className="max-w-sm">
            <a href="/" className="text-2xl font-bold text-tmz-darkGray mb-4 inline-block">
              TMZ<span className="text-tmz-blue">SOFTWARES</span>
            </a>
            <p className="text-gray-600 mb-6">
              Desenvolvemos soluções de software que ajudam nossos clientes a aumentar a eficiência, reduzir custos e maximizar os lucros.
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong> contato@tmzsoftwares.com<br />
              <strong>Telefone:</strong> (11) 9999-9999
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-16">
            <div>
              <h3 className="font-semibold text-lg mb-4">Empresa</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-tmz-blue transition-colors">Sobre nós</a></li>
                <li><a href="#" className="text-gray-600 hover:text-tmz-blue transition-colors">Nosso time</a></li>
                <li><a href="#" className="text-gray-600 hover:text-tmz-blue transition-colors">Carreiras</a></li>
                <li><a href="#" className="text-gray-600 hover:text-tmz-blue transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Serviços</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-tmz-blue transition-colors">Desenvolvimento Web</a></li>
                <li><a href="#" className="text-gray-600 hover:text-tmz-blue transition-colors">Aplicativos Móveis</a></li>
                <li><a href="#" className="text-gray-600 hover:text-tmz-blue transition-colors">Consultoria</a></li>
                <li><a href="#" className="text-gray-600 hover:text-tmz-blue transition-colors">Inteligência Artificial</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Legal</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-tmz-blue transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="text-gray-600 hover:text-tmz-blue transition-colors">Privacidade</a></li>
                <li><a href="#" className="text-gray-600 hover:text-tmz-blue transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="h-px bg-gray-200 my-8"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} TMZ Softwares. Todos os direitos reservados.
          </p>
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={scrollToTop}
            aria-label="Voltar ao topo"
            className="rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm mt-4 md:mt-0"
          >
            <ArrowUp className="h-5 w-5 text-gray-500" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
