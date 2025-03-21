
import { cn } from '@/lib/utils';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ArrowRight, Check, ChevronRight, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  delay?: number;
}

const ProcessStep = ({ number, title, description, delay = 0 }: ProcessStepProps) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });
  
  return (
    <div 
      ref={ref}
      className={cn(
        "flex transform transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-sky-100 flex-1">
        <div className="absolute -right-4 -top-4 bg-gradient-to-br from-tmz-blue to-tmz-lightBlue w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl transform rotate-12 group-hover:scale-110 transition-transform">
          {number}
        </div>
        
        <div className="pt-8 pb-6 px-6">
          <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-tmz-blue transition-colors flex items-center">
            {title}
            <ArrowRight className="h-4 w-4 ml-2 text-tmz-blue opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </h3>
          <p className="text-gray-600">{description}</p>
        </div>
        
        <div className="h-1.5 w-full bg-gradient-to-r from-tmz-lightBlue to-tmz-blue transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
      </div>
    </div>
  );
};

const MetricCard = ({ icon: Icon, value, label, delay = 0 }) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });
  
  return (
    <div 
      ref={ref}
      className={cn(
        "transform transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 h-full">
        <CardContent className="p-6 flex flex-col items-center">
          <div className="p-3 rounded-full bg-sky-50 text-tmz-blue mb-4">
            <Icon className="h-6 w-6" />
          </div>
          <div className="text-3xl font-bold text-gray-800 mb-1">{value}</div>
          <div className="text-sm text-gray-500 text-center">{label}</div>
        </CardContent>
      </Card>
    </div>
  );
};

const Process = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal({ threshold: 0.1 });
  const { ref: subtitleRef, isVisible: subtitleVisible } = useScrollReveal({ threshold: 0.1 });
  
  return (
    <section id="process" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-sky-50/50 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.03),transparent)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          ref={titleRef}
          className={cn(
            "max-w-3xl mx-auto text-center mb-4 transition-all duration-700 transform",
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-sky-50 text-tmz-blue text-sm font-medium mb-4">
            Nossa Metodologia
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Um processo <span className="text-tmz-blue">inteligente</span> para maximizar seu ROI
          </h2>
        </div>
        
        <div 
          ref={subtitleRef}
          className={cn(
            "max-w-2xl mx-auto text-center mb-16 transition-all duration-700 transform",
            subtitleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
          style={{ transitionDelay: "100ms" }}
        >
          <p className="text-gray-600">
            Nossa abordagem única é construída para entregar valor rapidamente e garantir 
            que cada investimento em tecnologia produza resultados financeiros mensuráveis.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          <ProcessStep 
            number="01"
            title="Análise Estratégica de Negócio"
            description="Entendemos profundamente seu negócio, identificando oportunidades específicas para aumentar sua lucratividade com software personalizado."
            delay={100}
          />
          
          <ProcessStep 
            number="02"
            title="Planejamento de ROI"
            description="Desenvolvemos um plano detalhado com métricas claras para garantir que o software gere retorno sobre investimento mensurável para sua empresa."
            delay={200}
          />
          
          <ProcessStep 
            number="03"
            title="Desenvolvimento Orientado a Valor"
            description="Utilizamos metodologias ágeis com entregas frequentes e priorizamos funcionalidades que trazem maior impacto financeiro ao seu negócio."
            delay={300}
          />
          
          <ProcessStep 
            number="04"
            title="Otimização Contínua de Resultados"
            description="Monitoramos constantemente as métricas de negócio e aprimoramos o software para maximizar seu impacto financeiro e crescimento sustentável."
            delay={400}
          />
        </div>
        
        <div className="relative">
          <div className="absolute inset-x-0 -top-12 h-40 bg-gradient-to-b from-transparent to-white/80 pointer-events-none"></div>
          
          <div className="relative z-10 bg-white rounded-2xl p-8 shadow-xl border border-sky-100">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-gray-800">Impacto Comprovado</h3>
              <div className="mt-2 w-20 h-1 bg-tmz-blue mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <MetricCard 
                icon={TrendingUp} 
                value="210%" 
                label="Retorno Médio sobre Investimento (ROI)"
                delay={100}
              />
              
              <MetricCard 
                icon={Check} 
                value="35%" 
                label="Redução nos Custos Operacionais"
                delay={200}
              />
              
              <MetricCard 
                icon={ChevronRight} 
                value="58%" 
                label="Aumento em Produtividade"
                delay={300}
              />
              
              <MetricCard 
                icon={ChevronRight} 
                value="3x" 
                label="Aceleração no Tempo de Lançamento"
                delay={400}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
