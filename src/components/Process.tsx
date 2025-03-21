
import { cn } from '@/lib/utils';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  isLast?: boolean;
}

const ProcessStep = ({ number, title, description, isLast = false }: ProcessStepProps) => (
  <div className="flex">
    <div className="flex flex-col items-center mr-6">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-tmz-blue text-white font-bold text-xl">
        {number}
      </div>
      {!isLast && (
        <div className="w-0.5 grow my-4 bg-gradient-to-b from-tmz-blue to-blue-100"></div>
      )}
    </div>
    <div className={cn(
      "glass-panel rounded-2xl p-6 flex-1 transform transition-all duration-500",
      !isLast && "mb-8"
    )}>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const Process = () => {
  return (
    <section id="process" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(14,165,233,0.05),transparent)] pointer-events-none"></div>
      
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="animate-fade-in-left">
            <div className="badge bg-tmz-blue bg-opacity-10 text-tmz-blue mb-4">
              Nossa Metodologia
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Um processo <span className="text-tmz-blue">simplificado</span> para resultados extraordinários
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Nossa abordagem é focada em entregar valor rapidamente, com transparência e qualidade em cada etapa.
            </p>
            
            <div className="mt-10">
              <ProcessStep 
                number="1"
                title="Análise de Necessidades"
                description="Entendemos profundamente seu negócio e as oportunidades para aumentar sua lucratividade com software."
              />
              
              <ProcessStep 
                number="2"
                title="Planejamento Estratégico"
                description="Criamos um plano detalhado de como o software vai gerar retorno sobre investimento para sua empresa."
              />
              
              <ProcessStep 
                number="3"
                title="Desenvolvimento Ágil"
                description="Desenvolvemos a solução com entregas frequentes para você acompanhar a evolução e fazer ajustes."
              />
              
              <ProcessStep 
                number="4"
                title="Implementação e Otimização"
                description="Lançamos o produto e continuamos otimizando para maximizar os resultados e o retorno financeiro."
                isLast
              />
            </div>
          </div>
          
          <div className="relative hidden lg:block animate-fade-in-right">
            <div className="absolute -inset-40 bg-gradient-to-br from-tmz-blue to-blue-600 opacity-5 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="relative aspect-square w-full max-w-md mx-auto">
              <div className="glass-panel rounded-2xl p-8 shadow-lg border border-gray-100 h-full">
                <div className="space-y-6 h-full flex flex-col justify-center">
                  <div className="h-16 bg-tmz-blue bg-opacity-10 rounded-xl flex items-center justify-center">
                    <div className="text-tmz-blue font-semibold">Redução média de custos</div>
                  </div>
                  <div className="text-center">
                    <span className="text-6xl font-bold text-tmz-darkGray">35%</span>
                  </div>
                  <div className="h-0.5 w-full bg-gray-100"></div>
                  <div className="h-16 bg-tmz-blue bg-opacity-10 rounded-xl flex items-center justify-center">
                    <div className="text-tmz-blue font-semibold">Aumento médio de produtividade</div>
                  </div>
                  <div className="text-center">
                    <span className="text-6xl font-bold text-tmz-darkGray">58%</span>
                  </div>
                  <div className="h-0.5 w-full bg-gray-100"></div>
                  <div className="h-16 bg-tmz-blue bg-opacity-10 rounded-xl flex items-center justify-center">
                    <div className="text-tmz-blue font-semibold">ROI médio no primeiro ano</div>
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
