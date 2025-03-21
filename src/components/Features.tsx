
import { DollarSign, TrendingUp, Gauge, LineChart, Server, Smartphone } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => (
  <div className={`glass-panel rounded-2xl p-6 hover-scale ${delay}`}>
    <div className="w-12 h-12 bg-tmz-blue bg-opacity-10 rounded-xl flex items-center justify-center text-tmz-blue mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features = () => {
  return (
    <section id="services" className="py-20 bg-tmz-gray relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(14,165,233,0.05),transparent)] pointer-events-none"></div>
      
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="badge bg-tmz-blue bg-opacity-10 text-tmz-blue mb-4">
            Nossas Soluções
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Software que <span className="text-tmz-blue">maximiza</span> seus resultados
          </h2>
          <p className="text-lg text-gray-600">
            Oferecemos soluções completas que ajudam sua empresa a aumentar a produtividade e gerar mais lucro.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<DollarSign className="h-6 w-6" />}
            title="Redução de Custos"
            description="Automatize processos e reduza custos operacionais com nossas soluções personalizadas."
            delay="animate-fade-in"
          />
          
          <FeatureCard 
            icon={<TrendingUp className="h-6 w-6" />}
            title="Aumento de Vendas"
            description="Sistemas inteligentes que potencializam suas vendas e melhoram a conversão."
            delay="animate-fade-in delay-100"
          />
          
          <FeatureCard 
            icon={<Gauge className="h-6 w-6" />}
            title="Otimização de Processos"
            description="Elimine gargalos e melhore a eficiência com fluxos de trabalho otimizados."
            delay="animate-fade-in delay-200"
          />
          
          <FeatureCard 
            icon={<LineChart className="h-6 w-6" />}
            title="Análise de Dados"
            description="Insights valiosos a partir dos seus dados para tomar melhores decisões de negócio."
            delay="animate-fade-in delay-300"
          />
          
          <FeatureCard 
            icon={<Server className="h-6 w-6" />}
            title="Sistemas Integrados"
            description="Integre todas as áreas da sua empresa em uma única plataforma eficiente."
            delay="animate-fade-in delay-400"
          />
          
          <FeatureCard 
            icon={<Smartphone className="h-6 w-6" />}
            title="Aplicativos Móveis"
            description="Aplicativos nativos e responsivos que engajam seus clientes e expandem seu alcance."
            delay="animate-fade-in delay-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
