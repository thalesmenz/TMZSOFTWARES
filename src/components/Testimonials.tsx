import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Quote, Star, User, Building } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TestimonialProps {
  content: string;
  author: string;
  position: string;
  company: string;
  industry?: string;
  rating?: number;
}

const Testimonial = ({
  content,
  author,
  position,
  company,
  industry,
  rating = 5,
}: TestimonialProps) => (
  <div className="glass-panel rounded-2xl p-6 transition-all duration-700">
    <div className="flex flex-col h-full">
      <div className="mb-4 flex items-start justify-between">
        <Quote className="h-8 w-8 text-tmz-blue opacity-30" />
        <div className="flex">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
          ))}
        </div>
      </div>

      <ScrollArea className="flex-grow mb-6 h-[150px]">
        <p className="text-md text-gray-700">{content}</p>
      </ScrollArea>

      <div className="pt-3 border-t border-gray-100">
        <div className="flex items-center">
          <div className="bg-tmz-blue/10 p-2 rounded-full mr-3">
            <User className="h-5 w-5 text-tmz-blue" />
          </div>
          <div>
            <p className="font-semibold text-md">{author}</p>
            <div className="flex items-center text-gray-600 text-sm">
              <span>{position}</span>
              <div className="w-1 h-1 bg-gray-400 rounded-full mx-2"></div>
              <span className="flex items-center">
                <Building className="h-3 w-3 inline mr-1" />
                {company}
              </span>
            </div>
            {industry && (
              <p className="text-xs text-gray-500 mt-1">{industry}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  const testimonials = [
    {
      content:
        "Estamos extremamente satisfeitos com o serviços prestados pela TMZ SOFTWARES no desenvolvimento do projeto Linkour. Desde o planejamento até a finalização, toda a equipe TMZ demonstrou um comprometimento excepcional em cumprir todas as etapas conforme o cronograma estabelecido. O profissionalismo e a eficiência deles foram fundamentais para o sucesso do projeto. Recomendo fortemente os serviços da TMZ SOFTWARES para quem busca qualidade e pontualidade em desenvolvimento de software.",
      author: "Alexandre moreira",
      position: "CEO",
      company: "Linkour",
      industry: "Hotelaria",
      rating: 5,
    },
    {
      content:
        "Trabalhar com a TMZ SOFTWARES foi uma experiência extraordinária. Compreendeu nossas necessidades e nos ofereceu soluções inovadoras que superaram todas as nossas expectativas. A qualidade do trabalho, combinada com a entrega pontual e o profissionalismo, foi um diferencial significativo para o sucesso do nosso projeto. A TMZ SOFTWARES é um parceiro confiável e essencial para qualquer negócio que busca crescimento através de soluções tecnológicas de ponta.",
      author: "Alan Cerqueira",
      position: "Tech Lead",
      company: "Finanto",
      industry: "financeira",
      rating: 5,
    },
    {
      content:
        "Tentamos três outras empresas antes da TMZ, mas nenhuma conseguiu entregar um aplicativo que realmente atendesse às necessidades do nosso negócio. A abordagem da TMZ foi completamente diferente – eles realmente se aprofundaram em como podíamos monetizar nosso serviço. O aplicativo nos permitiu alcançar um novo segmento de mercado e aumentar nossa receita em 32% em apenas 6 meses.",
      author: "Paulo Roberto",
      position: "CEO",
      company: "Delivery Prime",
      industry: "Logística",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="bg-tmz-gray relative overflow-hidden">
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
            O que nossos <span className="text-tmz-blue">clientes</span>{" "}
            conquistaram
          </h2>
          <p className="text-lg text-gray-600">
            Conheça os resultados reais e mensuráveis que nossas soluções
            trouxeram para empresas como a sua.
          </p>
        </div>

        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto transition-all duration-1000 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
          style={{ transitionDelay: "200ms" }}
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
