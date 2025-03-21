
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.1),transparent)] pointer-events-none"></div>
      
      <div className="section-container">
        <div className="glass-panel rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl relative overflow-hidden max-w-6xl mx-auto animate-scale-in">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-gradient-to-br from-tmz-blue to-blue-600 opacity-10 rounded-full blur-3xl animate-pulse-slow"></div>
          
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center relative">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Pronto para <span className="text-tmz-blue">aumentar</span> seus lucros?
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Vamos discutir como nossas soluções podem transformar sua empresa e impulsionar seus resultados.
              </p>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-tmz-blue bg-opacity-10 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-tmz-blue" />
                  </div>
                  <span className="ml-3 text-gray-700">Análise gratuita das suas necessidades</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-tmz-blue bg-opacity-10 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-tmz-blue" />
                  </div>
                  <span className="ml-3 text-gray-700">Proposta personalizada com ROI estimado</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-tmz-blue bg-opacity-10 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-tmz-blue" />
                  </div>
                  <span className="ml-3 text-gray-700">Implementação rápida e suporte contínuo</span>
                </li>
              </ul>
              
              <Button 
                asChild 
                className="bg-tmz-blue hover:bg-tmz-lightBlue text-white rounded-full text-lg px-8 py-6 transition-all duration-300 shadow-[0_0_20px_rgba(14,165,233,0.3)]"
              >
                <a href="mailto:contato@tmzsoftwares.com">Solicitar Contato</a>
              </Button>
            </div>
            
            <div className="lg:pl-10">
              <form className="space-y-4">
                <div className="glass-panel rounded-xl p-4 shadow-sm border border-gray-100">
                  <label htmlFor="name" className="text-sm text-gray-500 mb-1 block">Nome</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Seu nome completo" 
                    className="w-full bg-transparent outline-none text-gray-800"
                  />
                </div>
                
                <div className="glass-panel rounded-xl p-4 shadow-sm border border-gray-100">
                  <label htmlFor="email" className="text-sm text-gray-500 mb-1 block">E-mail</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="seu@email.com" 
                    className="w-full bg-transparent outline-none text-gray-800"
                  />
                </div>
                
                <div className="glass-panel rounded-xl p-4 shadow-sm border border-gray-100">
                  <label htmlFor="company" className="text-sm text-gray-500 mb-1 block">Empresa</label>
                  <input 
                    type="text" 
                    id="company" 
                    placeholder="Nome da sua empresa" 
                    className="w-full bg-transparent outline-none text-gray-800"
                  />
                </div>
                
                <div className="glass-panel rounded-xl p-4 shadow-sm border border-gray-100">
                  <label htmlFor="message" className="text-sm text-gray-500 mb-1 block">Mensagem</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    placeholder="Conte-nos sobre seu projeto ou necessidade" 
                    className="w-full bg-transparent outline-none text-gray-800 resize-none"
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-tmz-blue hover:bg-tmz-lightBlue text-white rounded-xl py-6 transition-all duration-300"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
