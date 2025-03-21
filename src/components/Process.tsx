
import { cn } from '@/lib/utils';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Check, ArrowRight } from 'lucide-react';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  isLast?: boolean;
  delay?: number;
}

const ProcessStep = ({ number, title, description, isLast = false, delay = 0 }: ProcessStepProps) => {
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
      <div className="flex flex-col items-center mr-6">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-tmz-blue text-white font-bold text-xl shadow-md shadow-blue-200">
          {number}
        </div>
        {!isLast && (
          <div className="w-0.5 grow my-4 bg-gradient-to-b from-tmz-blue to-blue-100"></div>
        )}
      </div>
      <div className={cn(
        "glass-panel rounded-2xl p-6 flex-1 transform transition-all duration-500 border border-blue-50 shadow-lg hover:shadow-xl hover:border-blue-100",
        !isLast && "mb-8"
      )}>
        <h3 className="text-xl font-semibold mb-2 flex items-center text-tmz-darkGray">
          {title}
          <span className="ml-2 text-tmz-blue">
            <Check className="h-5 w-5 inline" />
          </span>
        </h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Process = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal({ threshold: 0.1 });
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal({ threshold: 0.2 });
  
  return (
    <section id="process" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(14,165,233,0.05),transparent)] pointer-events-none"></div>
      
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <div 
              ref={titleRef}
              className={cn(
                "transition-all duration-700 transform",
                titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              <div className="badge bg-tmz-blue bg-opacity-10 text-tmz-blue mb-4">
                Nossa Metodologia
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Um processo <span className="text-tmz-blue">simplificado</span> para resultados extraordinários
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Nossa abordagem é focada em entregar valor rapidamente, com transparência e qualidade em cada etapa, 
                maximizando o retorno sobre investimento do seu software.
              </p>
            </div>
            
            <div className="mt-10">
              <ProcessStep 
                number="1"
                title="Análise Estratégica de Negócio"
                description="Entendemos profundamente seu negócio, identificando oportunidades específicas para aumentar sua lucratividade com software personalizado."
                delay={100}
              />
              
              <ProcessStep 
                number="2"
                title="Planejamento de ROI"
                description="Desenvolvemos um plano detalhado com métricas claras para garantir que o software gere retorno sobre investimento mensurável para sua empresa."
                delay={200}
              />
              
              <ProcessStep 
                number="3"
                title="Desenvolvimento Orientado a Valor"
                description="Utilizamos metodologias ágeis com entregas frequentes e priorizamos funcionalidades que trazem maior impacto financeiro ao seu negócio."
                delay={300}
              />
              
              <ProcessStep 
                number="4"
                title="Otimização Contínua de Resultados"
                description="Monitoramos constantemente as métricas de negócio e aprimoramos o software para maximizar seu impacto financeiro e crescimento sustentável."
                isLast
                delay={400}
              />
            </div>
          </div>
          
          <div 
            ref={statsRef}
            className={cn(
              "relative hidden lg:block transform transition-all duration-700",
              statsVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            )}
          >
            <div className="absolute -inset-40 bg-gradient-to-br from-tmz-blue to-blue-600 opacity-5 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="relative aspect-square w-full max-w-md mx-auto">
              <div className="glass-panel rounded-2xl p-8 shadow-lg border border-gray-100 h-full">
                <div className="space-y-6 h-full flex flex-col justify-center">
                  <div className="h-16 bg-tmz-blue bg-opacity-10 rounded-xl flex items-center justify-center">
                    <div className="text-tmz-blue font-semibold flex items-center">
                      <ArrowRight className="mr-2 h-4 w-4" />
                      Redução média de custos operacionais
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="text-6xl font-bold text-tmz-darkGray">35%</span>
                  </div>
                  <div className="h-0.5 w-full bg-gray-100"></div>
                  <div className="h-16 bg-tmz-blue bg-opacity-10 rounded-xl flex items-center justify-center">
                    <div className="text-tmz-blue font-semibold flex items-center">
                      <ArrowRight className="mr-2 h-4 w-4" />
                      Aumento médio de produtividade
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="text-6xl font-bold text-tmz-darkGray">58%</span>
                  </div>
                  <div className="h-0.5 w-full bg-gray-100"></div>
                  <div className="h-16 bg-tmz-blue bg-opacity-10 rounded-xl flex items-center justify-center">
                    <div className="text-tmz-blue font-semibold flex items-center">
                      <ArrowRight className="mr-2 h-4 w-4" />
                      ROI médio no primeiro ano
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="text-6xl font-bold text-tmz-darkGray">210%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
