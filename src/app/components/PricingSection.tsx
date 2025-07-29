'use client';

import { trackEvent } from "../helpers/analytics";

export default function PricingSection() {
  const packages = [
    {
      name: "Pacote Básico",
      sessions: 1,
      savings: null,
      features: [
        "1 consulta completa",
        "Plano alimentar personalizado",
        "Suporte por 7 dias"
      ],
      popular: false
    },
    {
      name: "Pacote Completo",
      sessions: 3,
      savings: "💜 Condição especial",
      features: [
        "3 consultas completas",
        "Plano alimentar personalizado",
        "Mini guia digital exclusivo",
        "Suporte contínuo entre consultas",
        "Acompanhamento dos pilares",
        "Reajustes do plano conforme necessário"
      ],
      popular: true
    },
    {
      name: "Pacote Premium",
      sessions: 5,
      savings: "💜 Condição especial",
      features: [
        "5 consultas completas",
        "Plano alimentar personalizado",
        "Mini guia digital exclusivo",
        "Suporte prioritário",
        "Acompanhamento completo dos pilares",
        "Reajustes ilimitados do plano",
        "Material de apoio extra"
      ],
      popular: false
    }
  ];

  const getSessionText = (sessions: number) => {
    return sessions === 1 ? 'sessão' : 'sessões';
  };

  return (
    <section id="pacotes" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Pacotes Disponíveis
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-lilac-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Escolha o pacote ideal para sua jornada de transformação.
            Quanto mais sessões, maior o acompanhamento e melhor o resultado!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${pkg.popular
                  ? 'border-purple-500 bg-gradient-to-br from-purple-50 via-lilac-50 to-yellow-50'
                  : 'border-gray-200'
                }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-purple-rose text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Mais Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {pkg.name}
                </h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-purple-600">
                    {pkg.sessions} {getSessionText(pkg.sessions)}
                  </span>
                </div>
                {pkg.savings && (
                  <div className="flex justify-center items-center mb-4">
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                      {pkg.savings}
                    </span>
                  </div>
                )}
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-gray-800 mb-4">Inclui:</h4>
                {pkg.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <span className="text-purple-500 text-lg">✓</span>
                    <span className="text-gray-600 leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <button
                  onClick={() => {
                    window.open(`https://wa.me/5579991175352?text=Olá! Gostaria de agendar o ${pkg.name} com ${pkg.sessions} ${getSessionText(pkg.sessions)} com a nutricionista Cristiane Alcântara.`, '_blank');
                    trackEvent({
                      action: 'click_program',
                      category: 'PROGRAM',
                      label: `${pkg.name} - Pacotes Disponíveis`,
                    });
                  }}
                  className={`w-full font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 ${pkg.popular
                      ? 'bg-gradient-purple-rose text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                    }`}
                >
                  Escolher {pkg.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-50 via-lilac-50 to-yellow-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              💰 Formas de Pagamento
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Aceito PIX, transferência bancária e parcelamento em até 3x sem juros.
              <br />
              Pagamento realizado após a primeira consulta.
            </p>
            <div className="flex justify-center space-x-4 text-sm text-gray-500">
              <span>💵 PIX</span>
              <span>🏦 Transferência</span>
              <span>💳 Parcelamento</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 