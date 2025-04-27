import { useState } from "react";
import { ArrowRight, Zap, Calculator, TrendingUp, Users, Search, Briefcase, Cpu, LineChart, ShoppingCart, Stethoscope, GraduationCap, Brain, Database, BarChart3, MessageCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const beneficios = [
  {
    icon: <Zap className="text-blue-600 w-8 h-8" />,
    title: "Aumento de Produtividade",
    desc: "Automatize tarefas repetitivas e libere sua equipe para atividades estratégicas"
  },
  {
    icon: <Calculator className="text-blue-600 w-8 h-8" />,
    title: "Redução de Custos",
    desc: "Otimize recursos e elimine desperdícios com análise inteligente de dados"
  },
  {
    icon: <TrendingUp className="text-blue-600 w-8 h-8" />,
    title: "Eficiência Operacional",
    desc: "Processos mais ágeis e precisos com automação baseada em IA"
  },
  {
    icon: <Users className="text-blue-600 w-8 h-8" />,
    title: "ROI Maximizado",
    desc: "Decisões mais assertivas que impactam diretamente seu resultado financeiro"
  }
];

const processo = [
  {
    icon: <Search className="w-10 h-10 text-blue-600 mx-auto" />,
    title: "Análise de Oportunidades",
    desc: "Identificamos áreas com maior potencial de otimização em sua empresa"
  },
  {
    icon: <Briefcase className="w-10 h-10 text-blue-600 mx-auto" />,
    title: "Planejamento Estratégico",
    desc: "Desenvolvemos um plano personalizado para implementação de IA"
  },
  {
    icon: <Cpu className="w-10 h-10 text-blue-600 mx-auto" />,
    title: "Implementação de IA",
    desc: "Integramos soluções de IA adaptadas às suas necessidades específicas"
  },
  {
    icon: <LineChart className="w-10 h-10 text-blue-600 mx-auto" />,
    title: "Otimização Contínua",
    desc: "Monitoramento e ajustes para maximizar resultados constantemente"
  }
];

const setores = [
  {
    icon: <Database className="w-8 h-8 text-blue-600" />,
    title: "Indústria",
    desc: "Otimização de linhas de produção e manutenção preditiva"
  },
  {
    icon: <Briefcase className="w-8 h-8 text-blue-600" />,
    title: "Serviços",
    desc: "Automatização de processos e atendimento ao cliente"
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
    title: "Corporativo",
    desc: "Análise de dados e tomada de decisão estratégica"
  },
  {
    icon: <ShoppingCart className="w-8 h-8 text-blue-600" />,
    title: "Varejo",
    desc: "Previsão de demanda e gestão de estoque inteligente"
  },
  {
    icon: <Stethoscope className="w-8 h-8 text-blue-600" />,
    title: "Saúde",
    desc: "Diagnóstico assistido e gestão hospitalar otimizada"
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
    title: "Educação",
    desc: "Personalização do ensino e gestão acadêmica"
  }
];

const tecnologias = [
  {
    icon: <Brain className="w-8 h-8 text-blue-200 mx-auto" />,
    title: "Machine Learning",
    desc: "Algoritmos que aprendem e evoluem com seus dados"
  },
  {
    icon: <Cpu className="w-8 h-8 text-blue-200 mx-auto" />,
    title: "Deep Learning",
    desc: "Redes neurais avançadas para análises complexas"
  },
  {
    icon: <Database className="w-8 h-8 text-blue-200 mx-auto" />,
    title: "Big Data",
    desc: "Processamento e análise de grandes volumes de dados"
  },
  {
    icon: <LineChart className="w-8 h-8 text-blue-200 mx-auto" />,
    title: "Analytics Preditivo",
    desc: "Previsões precisas baseadas em dados históricos"
  }
];

const cases = [
  {
    text: '"Com a implementação de IA da TMZ, reduzimos nossos custos operacionais em 35% e aumentamos a produtividade em 50%. Um investimento que se pagou em menos de 6 meses."',
    name: "Carlos Silva",
    role: "CEO, TechCorp Solutions"
  },
  {
    text: '"A automação implementada pela TMZ nos permitiu reduzir erros em 90% e aumentar nossa capacidade de atendimento em 3x, sem aumentar o quadro de funcionários."',
    name: "Ana Oliveira",
    role: "COO, Fintech Express"
  },
  {
    text: '"Em apenas 3 meses, as soluções de IA da TMZ nos ajudaram a identificar e eliminar desperdícios que custavam R$200 mil mensais."',
    name: "Roberto Santos",
    role: "Diretor Financeiro, Indústrias BR"
  }
];

const faqs = [
  {
    q: "Como a IA pode reduzir custos na minha empresa?",
    a: "A IA automatiza tarefas, identifica desperdícios e otimiza processos, reduzindo custos operacionais."
  },
  {
    q: "Quanto tempo leva para implementar soluções de IA?",
    a: "O tempo varia conforme o projeto, mas normalmente entre 1 e 3 meses para as primeiras entregas."
  },
  {
    q: "Preciso ter conhecimento técnico em IA?",
    a: "Não. Nossa equipe cuida de toda a implementação e treinamento necessário."
  },
  {
    q: "Qual o retorno sobre investimento (ROI) esperado?",
    a: "A maioria dos clientes percebe ROI positivo em até 6 meses após a implementação."
  }
];

export default function ConsultoriaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    emailCorporativo: "",
    whatsapp: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  // EmailJS config (igual ao CTA principal)
  const SERVICE_ID = "service_rloxi3z";
  const TEMPLATE_ID = "template_9v3p8vh";
  const PUBLIC_KEY = "4P81dxwPTVSacaMar";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "whatsapp") {
      // Máscara para telefone brasileiro (formato: (99) 99999-9999)
      let v = value.replace(/\D/g, "");
      v = v.replace(/^([0-9]{2})([0-9]{5})([0-9]{4}).*/, "($1) $2-$3");
      setFormData((prev) => ({ ...prev, whatsapp: v }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");
    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_email: formData.emailCorporativo,
          whatsapp: formData.whatsapp,
          to_email: "thalesmenzner@gmail.com",
          message: `Contato via página de consultoria:\nE-mail corporativo: ${formData.emailCorporativo}\nWhatsApp: ${formData.whatsapp}`,
        },
        PUBLIC_KEY
      )
      .then(() => {
        setSubmitStatus("Mensagem enviada com sucesso!");
        setFormData({ emailCorporativo: "", whatsapp: "" });
        setIsSubmitting(false);
      })
      .catch(() => {
        setSubmitStatus("Erro ao enviar mensagem. Tente novamente.");
        setIsSubmitting(false);
      });
  };

  return (
    <div className="bg-[#f7faff]">
      {/* HERO */}
      <section className="py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#0a1a3a] leading-tight mb-4">
          Aumente seus Lucros e<br />
          Reduza Custos com <span className="text-[#2563eb]">Inteligência Artificial</span>
        </h1>
        <p className="text-lg md:text-xl text-[#444] max-w-2xl mx-auto mb-10">
          Soluções práticas e personalizadas para otimizar processos, automatizar tarefas e potencializar o crescimento do seu negócio com tecnologia de ponta.
        </p>
        <a
          href="https://wa.me/5519971128086?text=Ol%C3%A1!%20Tenho%20interesse%20em%20uma%20consultoria%20de%20IA%20para%20minha%20empresa."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold px-8 py-3 rounded-lg text-lg flex items-center gap-2 mx-auto w-fit"
        >
          Solicite uma Análise Gratuita <ArrowRight className="w-5 h-5" />
        </a>
      </section>

      {/* BENEFÍCIOS */}
      <section className="py-14">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#0a1a3a]">Benefícios que Transformam seu Negócio</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          {beneficios.map((b, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm p-7 text-center border border-[#e5eaf1]">
              {b.icon}
              <h3 className="font-bold text-xl mt-4 mb-2 text-[#0a1a3a]">{b.title}</h3>
              <p className="text-[#444]">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RESULTADOS MENSURÁVEIS */}
      <section className="py-14 bg-[#eef5ff]">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#0a1a3a]">Resultados Mensuráveis</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow p-8 text-center flex flex-col items-center">
            <span className="mb-4"><svg width="48" height="48" fill="none" stroke="#2563eb" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 17l4-4 4 4"/><path d="M12 13V7"/></svg></span>
            <h3 className="font-bold text-lg mb-2 text-[#0a1a3a]">Economia de Custos</h3>
            <p className="text-[#444]">Redução média de 35% em despesas operacionais</p>
          </div>
          <div className="bg-white rounded-xl shadow p-8 text-center flex flex-col items-center">
            <span className="mb-4"><svg width="48" height="48" fill="none" stroke="#2563eb" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/></svg></span>
            <h3 className="font-bold text-lg mb-2 text-[#0a1a3a]">Crescimento de Receita</h3>
            <p className="text-[#444]">Aumento de 50% na eficiência empresarial</p>
          </div>
          <div className="bg-white rounded-xl shadow p-8 text-center flex flex-col items-center">
            <span className="mb-4"><svg width="48" height="48" fill="none" stroke="#2563eb" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg></span>
            <h3 className="font-bold text-lg mb-2 text-[#0a1a3a]">Precisão Estratégica</h3>
            <p className="text-[#444]">90% de precisão em previsões de negócios</p>
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section className="py-14">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#0a1a3a]">Nosso Processo</h2>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative">
          {processo.map((p, i) => (
            <div key={i} className="flex-1 text-center relative">
              {p.icon}
              <h3 className="font-semibold text-lg mt-4 mb-2 text-[#0a1a3a]">{p.title}</h3>
              <p className="text-[#444] text-sm">{p.desc}</p>
              {i < processo.length - 1 && (
                <div className="hidden md:block absolute top-7 right-0 w-full h-0.5 bg-blue-100 z-0" style={{left: '100%', width: '60px'}} />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SETORES */}
      <section className="py-14">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#0a1a3a]">Soluções para Todos os Setores</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {setores.map((s, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm p-7 text-center border border-[#e5eaf1]">
              {s.icon}
              <h3 className="font-bold text-lg mt-4 mb-2 text-[#0a1a3a]">{s.title}</h3>
              <p className="text-[#444] text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TECNOLOGIAS */}
      <section className="py-14 bg-[#16255b]">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">Tecnologias de Ponta</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          {tecnologias.map((t, i) => (
            <div key={i} className="bg-[#1e3370] rounded-xl p-7 text-center">
              {t.icon}
              <h3 className="font-bold text-lg mt-4 mb-2 text-white">{t.title}</h3>
              <p className="text-blue-100 text-sm">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CASOS DE SUCESSO */}
      <section className="py-14">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#0a1a3a]">Casos de Sucesso</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <div key={i} className="bg-blue-50 rounded-xl p-7 text-[#0a1a3a] shadow-sm">
              <p className="mb-4">{c.text}</p>
              <div className="font-bold">{c.name}</div>
              <div className="text-sm text-[#444]">{c.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#0a1a3a]">Perguntas Frequentes</h2>
        <div className="max-w-2xl mx-auto">
          {faqs.map((f, i) => (
            <div key={i} className="border-b border-[#e5eaf1]">
              <button
                className="w-full text-left py-4 flex justify-between items-center font-medium text-[#0a1a3a] text-lg focus:outline-none"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                {f.q}
                <span className="ml-2">{openFaq === i ? "▲" : "▼"}</span>
              </button>
              {openFaq === i && <div className="pb-4 text-[#444]">{f.a}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-14 bg-[#16255b] text-white text-center">
        <h2 className="text-3xl font-bold mb-3">Pronto para Transformar seu Negócio?</h2>
        <p className="mb-6">Agende uma análise gratuita e descubra como a IA pode impulsionar seus resultados</p>
        <form className="flex flex-col md:flex-row gap-3 justify-center items-center max-w-xl mx-auto" onSubmit={handleSubmit}>
          <input
            type="email"
            name="emailCorporativo"
            value={formData.emailCorporativo}
            onChange={handleChange}
            placeholder="Seu e-mail corporativo"
            className="px-4 py-3 rounded-lg text-[#0a1a3a] w-full md:w-auto focus:outline-none"
            required
          />
          <input
            type="tel"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            placeholder="WhatsApp com DDD"
            className="px-4 py-3 rounded-lg text-[#0a1a3a] w-full md:w-auto focus:outline-none"
            maxLength={15}
            required
          />
          <button type="submit" disabled={isSubmitting} className="bg-white text-[#16255b] font-semibold px-6 py-3 rounded-lg hover:bg-blue-100">
            {isSubmitting ? "Enviando..." : "Falar com Especialista"}
          </button>
        </form>
        {submitStatus && <div className="mt-4 text-lg font-semibold">{submitStatus}</div>}
      </section>
    </div>
  );
}
