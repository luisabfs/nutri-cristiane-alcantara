'use client';

import { trackEvent } from "../helpers/analytics";

export default function ServicesSection() {
  const serviceFeatures = [
    "Anamnese completa e detalhada",
    "Análise bioquímica de exames laboratoriais",
    "Questionário metabólico",
    "Composição corporal e bioimpedância",
    "Plano alimentar personalizado",
    "Acompanhamento dos pilares do Método Sozo",
    "Suporte via WhatsApp",
    "Material de apoio digital exclusivo"
  ];

  return (
    <section id="servico" className="py-20 bg-gradient-to-br from-purple-50 via-lilac-50 to-yellow-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Meu Serviço
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-lilac-500 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="text-center mb-8">
              <p className="text-lg text-gray-600 leading-relaxed">
                Ofereço consultas de orientação nutricional com a abordagem completa do{' '}
                <strong className="text-purple-600">Método Sozo</strong>, considerando todos os aspectos da sua saúde integral.
                Uma abordagem integrativa e personalizada que considera sua individualidade e respeitando sua realidade.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-gray-800 mb-6 text-center text-lg">
                O que está incluído na sua consulta:
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {serviceFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-purple-500 text-lg flex-shrink-0">✓</span>
                    <span className="text-gray-600 leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 text-center">
              <button
                onClick={() => {
                  window.open('https://wa.me/5579991175352?text=Olá! Gostaria de agendar uma consulta de orientação nutricional com a nutricionista Cristiane Alcântara.', '_blank');
                  trackEvent({
                    action: 'click_whatsapp',
                    category: 'CTA',
                    label: 'Botão Agendar Consulta - Serviço',
                  });
                }}
                className="bg-gradient-purple-rose text-white font-semibold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Agendar Consulta
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 