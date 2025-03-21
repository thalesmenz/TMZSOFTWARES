
import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TestimonialProps {
  content: string;
  author: string;
  position: string;
  company: string;
  isActive: boolean;
}

const Testimonial = ({ content, author, position, company, isActive }: TestimonialProps) => (
  <div className={cn(
    "glass-panel rounded-2xl p-8 md:p-10 transition-all duration-700 opacity-0 absolute inset-0",
    isActive && "opacity-100"
  )}>
    <Quote className="h-10 w-10 text-tmz-blue opacity-30 mb-6" />
    <p className="text-lg md:text-xl text-gray-700 mb-8">{content}</p>
    <div>
      <p className="font-semibold text-lg">{author}</p>
      <p className="text-gray-600">{position}, {company}</p>
    </div>
  </div>
);

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  
  const testimonials = [
    {
      content: "A TMZ Softwares transformou completamente nosso processo comercial. O sistema desenvolvido por eles aumentou nossas vendas em 47% no primeiro trimestre após a implementação.",
      author: "Ricardo Mendes",
      position: "Diretor Comercial",
      company: "Comércio Expresso",
    },
    {
      content: "Economizamos mais de R$200 mil por ano após implementar a solução de automação que a TMZ desenvolveu para nós. O investimento se pagou em menos de 4 meses.",
      author: "Carla Vieira",
      position: "CFO",
      company: "Indústria Nacional",
    },
    {
      content: "O aplicativo criado pela TMZ nos permitiu alcançar um novo segmento de mercado e aumentar nossa receita em 32%. A qualidade e a usabilidade são impressionantes.",
      author: "Paulo Roberto",
      position: "CEO",
      company: "Delivery Prime",
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
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-tmz-gray relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.05),transparent)] pointer-events-none"></div>
      
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="badge bg-tmz-blue bg-opacity-10 text-tmz-blue mb-4">
            Depoimentos
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            O que nossos <span className="text-tmz-blue">clientes</span> dizem
          </h2>
          <p className="text-lg text-gray-600">
            Conheça os resultados reais que nossas soluções trouxeram para empresas como a sua.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div 
            ref={testimonialsRef} 
            className="relative"
            style={{ height: `${height}px` }}
          >
            {testimonials.map((testimonial, index) => (
              <Testimonial
                key={index}
                content={testimonial.content}
                author={testimonial.author}
                position={testimonial.position}
                company={testimonial.company}
                isActive={index === activeIndex}
              />
            ))}
          </div>
          
          <div className="flex justify-center mt-10 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
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
                    index === activeIndex ? "bg-tmz-blue scale-100" : "bg-gray-300 scale-75"
                  )}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
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
