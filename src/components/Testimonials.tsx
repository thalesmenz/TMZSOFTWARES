
import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Quote, Star, User, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ScrollArea } from '@/components/ui/scroll-area';

interface TestimonialProps {
  content: string;
  author: string;
  position: string;
  company: string;
  industry?: string;
  rating?: number;
  isActive: boolean;
}

const Testimonial = ({ content, author, position, company, industry, rating = 5, isActive }: TestimonialProps) => (
  <div className={cn(
    "glass-panel rounded-2xl p-8 md:p-10 transition-all duration-700 opacity-0 absolute inset-0",
    isActive && "opacity-100"
  )}>
    <div className="flex flex-col h-full">
      <div className="mb-6 flex items-start justify-between">
        <Quote className="h-10 w-10 text-tmz-blue opacity-30" />
        <div className="flex">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
          ))}
        </div>
      </div>
      
      <ScrollArea className="flex-grow mb-8">
        <p className="text-lg md:text-xl text-gray-700">{content}</p>
      </ScrollArea>
      
      <div className="pt-4 border-t border-gray-100">
        <div className="flex items-center">
          <div className="bg-tmz-blue/10 p-2 rounded-full mr-4">
            <User className="h-6 w-6 text-tmz-blue" />
          </div>
          <div>
            <p className="font-semibold text-lg">{author}</p>
            <div className="flex items-center text-gray-600">
              <span>{position}</span>
              <div className="w-1 h-1 bg-gray-400 rounded-full mx-2"></div>
              <span className="flex items-center">
                <Building className="h-3 w-3 inline mr-1" />
                {company}
              </span>
            </div>
            {industry && (
              <p className="text-sm text-gray-500 mt-1">{industry}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });
  
  const testimonials = [
    {
      content: "A TMZ Softwares transformou completamente nossa operação comercial. O sistema desenvolvido foi tão intuitivo que nossa equipe se adaptou em tempo recorde. O processo de vendas que antes levava 3 dias para ser concluído agora é finalizado em horas, resultando em um aumento de 47% nas vendas logo no primeiro trimestre após a implementação.",
      author: "Ricardo Mendes",
      position: "Diretor Comercial",
      company: "Comércio Expresso",
      industry: "Varejo",
      rating: 5
    },
    {
      content: "Nossa empresa gastava uma fortuna com processos manuais e ineficientes. A solução personalizada da TMZ automatizou 85% das tarefas administrativas, permitindo que redirecionássemos nossa equipe para atividades estratégicas. O resultado foi uma economia de mais de R$200 mil por ano, com ROI completo em menos de 4 meses. Impressionante!",
      author: "Carla Vieira",
      position: "CFO",
      company: "Indústria Nacional",
      industry: "Manufatura",
      rating: 5
    },
    {
      content: "Tentamos três outras empresas antes da TMZ, mas nenhuma conseguiu entregar um aplicativo que realmente atendesse às necessidades do nosso negócio. A abordagem da TMZ foi completamente diferente – eles realmente se aprofundaram em como podíamos monetizar nosso serviço. O aplicativo nos permitiu alcançar um novo segmento de mercado e aumentar nossa receita em 32% em apenas 6 meses.",
      author: "Paulo Roberto",
      position: "CEO",
      company: "Delivery Prime",
      industry: "Logística",
      rating: 5
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  useEffect(() => {
    if (testimonialsRef.current) {
      setHeight(testimonialsRef.current.scrollHeight);
    }
    
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-tmz-gray relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.05),transparent)] pointer-events-none"></div>
      
      <div className="section-container">
        <div 
          ref={ref}
          className={cn(
            "text-center max-w-3xl mx-auto mb-16 transition-all duration-700 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="badge bg-tmz-blue bg-opacity-10 text-tmz-blue mb-4">
            Casos de Sucesso
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            O que nossos <span className="text-tmz-blue">clientes</span> conquistaram
          </h2>
          <p className="text-lg text-gray-600">
            Conheça os resultados reais e mensuráveis que nossas soluções trouxeram para empresas como a sua.
          </p>
        </div>
        
        <div 
          className={cn(
            "max-w-4xl mx-auto transition-all duration-1000 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
          style={{ transitionDelay: "200ms" }}
        >
          <div 
            ref={testimonialsRef} 
            className="relative"
            style={{ height: `${Math.max(height, 350)}px` }}
          >
            {testimonials.map((testimonial, index) => (
              <Testimonial
                key={index}
                content={testimonial.content}
                author={testimonial.author}
                position={testimonial.position}
                company={testimonial.company}
                industry={testimonial.industry}
                rating={testimonial.rating}
                isActive={index === activeIndex}
              />
            ))}
          </div>
          
          <div className="flex justify-center mt-10 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full hover:bg-tmz-blue/10 hover:text-tmz-blue"
              aria-label="Testimonial anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all",
                    index === activeIndex ? "bg-tmz-blue scale-100" : "bg-gray-300 scale-75 hover:bg-gray-400"
                  )}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full hover:bg-tmz-blue/10 hover:text-tmz-blue"
              aria-label="Próximo testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
