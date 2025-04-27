import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled ? 'bg-white bg-opacity-80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-tmz-darkGray">
              TMZ<span className="text-tmz-blue">SOFTWARES</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-tmz-blue transition-colors font-medium">
              Serviços
            </a>
            <a href="#process" className="text-gray-700 hover:text-tmz-blue transition-colors font-medium">
              Processo
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-tmz-blue transition-colors font-medium">
              Depoimentos
            </a>
            <a href="/consultoria" className="text-gray-700 hover:text-tmz-blue transition-colors font-medium">
              Consultoria
            </a>
            <Button 
              asChild 
              className="bg-tmz-blue hover:bg-tmz-lightBlue text-white rounded-full px-6 transition-all duration-300"
            >
              <a href="#contact">Fale Conosco</a>
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-panel animate-fade-in py-6">
          <nav className="flex flex-col items-center space-y-6">
            <a 
              href="#services" 
              className="text-gray-700 hover:text-tmz-blue transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Serviços
            </a>
            <a 
              href="#process" 
              className="text-gray-700 hover:text-tmz-blue transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Processo
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-700 hover:text-tmz-blue transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Depoimentos
            </a>
            <a 
              href="/consultoria" 
              className="text-gray-700 hover:text-tmz-blue transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Consultoria
            </a>
            <Button 
              asChild 
              className="bg-tmz-blue hover:bg-tmz-lightBlue text-white rounded-full px-6 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <a href="#contact">Fale Conosco</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
