import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const CTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  // Configuração do EmailJS - você precisará criar uma conta em emailjs.com
  const SERVICE_ID = "service_rloxi3z"; // Obtenha isso no EmailJS dashboard
  const TEMPLATE_ID = "template_9v3p8vh"; // Obtenha isso no EmailJS dashboard
  const PUBLIC_KEY = "4P81dxwPTVSacaMar"; // Obtenha isso no EmailJS dashboard

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          message: formData.message,
          to_email: "thalesmenzner@gmail.com",
        },
        PUBLIC_KEY
      )
      .then((response) => {
        setSubmitStatus("Mensagem enviada com sucesso!");
        setFormData({ name: "", email: "", company: "", message: "" });
        setIsSubmitting(false);
      })
      .catch((error) => {
        setSubmitStatus("Erro ao enviar mensagem. Tente novamente.");
        setIsSubmitting(false);
        console.error("Erro:", error);
      });
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.1),transparent)] pointer-events-none"></div>

      <div className="section-container">
        <div className="glass-panel rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl relative overflow-hidden max-w-6xl mx-auto animate-scale-in">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-gradient-to-br from-tmz-blue to-blue-600 opacity-10 rounded-full blur-3xl animate-pulse-slow"></div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center relative">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Pronto para <span className="text-tmz-blue">aumentar</span> seus
                lucros?
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Vamos discutir como nossas soluções podem transformar sua
                empresa e impulsionar seus resultados.
              </p>

              <ul className="space-y-4 mb-10">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-tmz-blue bg-opacity-10 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-tmz-blue" />
                  </div>
                  <span className="ml-3 text-gray-700">
                    Análise gratuita das suas necessidades
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-tmz-blue bg-opacity-10 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-tmz-blue" />
                  </div>
                  <span className="ml-3 text-gray-700">
                    Proposta personalizada com ROI estimado
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-tmz-blue bg-opacity-10 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-tmz-blue" />
                  </div>
                  <span className="ml-3 text-gray-700">
                    Implementação rápida e suporte contínuo
                  </span>
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
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="glass-panel rounded-xl p-4 shadow-sm border border-gray-100">
                  <label
                    htmlFor="name"
                    className="text-sm text-gray-500 mb-1 block"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    className="w-full bg-transparent outline-none text-gray-800"
                    required
                  />
                </div>

                <div className="glass-panel rounded-xl p-4 shadow-sm border border-gray-100">
                  <label
                    htmlFor="email"
                    className="text-sm text-gray-500 mb-1 block"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="w-full bg-transparent outline-none text-gray-800"
                    required
                  />
                </div>

                <div className="glass-panel rounded-xl p-4 shadow-sm border border-gray-100">
                  <label
                    htmlFor="company"
                    className="text-sm text-gray-500 mb-1 block"
                  >
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Nome da sua empresa"
                    className="w-full bg-transparent outline-none text-gray-800"
                    required
                  />
                </div>

                <div className="glass-panel rounded-xl p-4 shadow-sm border border-gray-100">
                  <label
                    htmlFor="message"
                    className="text-sm text-gray-500 mb-1 block"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Conte-nos sobre seu projeto ou necessidade"
                    className="w-full bg-transparent outline-none text-gray-800 resize-none"
                    required
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-tmz-blue hover:bg-tmz-lightBlue text-white rounded-xl py-6 transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                </Button>

                {submitStatus && (
                  <p
                    className={`text-center mt-2 ${
                      submitStatus.includes("Erro")
                        ? "text-red-500"
                        : "text-green-500"
                    }`}
                  >
                    {submitStatus}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
