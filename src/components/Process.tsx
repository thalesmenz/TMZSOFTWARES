
import { cn } from '@/lib/utils';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Check, ChevronRight } from 'lucide-react';
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
      <Card className="w-full border-0 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row">
            <div className="bg-gradient-to-br from-amber-50 to-orange-100 p-6 md:w-32 flex items-center justify-center">
              <div className="text-4xl font-bold text-amber-500">{number}</div>
            </div>
            <div className="p-6 flex-1">
              <h3 className="text-xl font-semibold mb-2 flex items-center text-gray-800">
                {title}
                <span className="ml-2 text-amber-500">
                  <Check className="h-5 w-5 inline" />
                </span>
              </h3>
              <p className="text-gray-600">{description}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const Process = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal({ threshold: 0.1 });
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal({ threshold: 0.2 });
  
  return (
    <section id="process" className="py-20 relative overflow-hidden bg-gradient-to-b from-white to-amber-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(251,191,36,0.05),transparent)] pointer-events-none"></div>
      
      <div className="section-container">
        <div 
          ref={titleRef}
          className={cn(
            "max-w-3xl mx-auto text-center mb-16 transition-all duration-700 transform",
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="badge bg-amber-500 bg-opacity-10 text-amber-600 mb-4">
            Nossa Metodologia
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Um processo <span className="text-amber-500">simplificado</span> para resultados extraordinários
          </h2>
          <p className="text-lg text-gray-600">
            Nossa abordagem é focada em entregar valor rapidamente, com transparência e qualidade em cada etapa, 
            maximizando o retorno sobre investimento do seu software.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
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
        
        <div 
          ref={statsRef}
          className={cn(
            "mt-16 max-w-3xl mx-auto bg-white rounded-2xl shadow-xl border border-amber-100 p-8 relative transform transition-all duration-700",
            statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-100 to-orange-100 opacity-50 rounded-2xl blur-sm -z-10"></div>
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Resultados Comprovados</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-amber-500 mb-2">
                <ChevronRight className="w-6 h-6 inline-block" />
              </div>
              <div className="text-4xl font-bold text-gray-800 mb-2">35%</div>
              <div className="text-sm text-gray-600">Redução média de custos operacionais</div>
            </div>
            
            <div className="text-center">
              <div className="text-amber-500 mb-2">
                <ChevronRight className="w-6 h-6 inline-block" />
              </div>
              <div className="text-4xl font-bold text-gray-800 mb-2">58%</div>
              <div className="text-sm text-gray-600">Aumento médio de produtividade</div>
            </div>
            
            <div className="text-center">
              <div className="text-amber-500 mb-2">
                <ChevronRight className="w-6 h-6 inline-block" />
              </div>
              <div className="text-4xl font-bold text-gray-800 mb-2">210%</div>
              <div className="text-sm text-gray-600">ROI médio no primeiro ano</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
