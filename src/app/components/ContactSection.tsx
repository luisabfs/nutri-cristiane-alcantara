'use client';

export default function ContactSection() {
  const contactInfo = [
    {
      icon: "💬",
      title: "WhatsApp",
      value: "(79) 99117-5352",
      link: "https://wa.me/5579991175352?text=Olá! Gostaria de falar com a Cristiane Alcântara sobre nutrição funcional.",
      action: "Falar pelo WhatsApp"
    },
    {
      icon: "📧",
      title: "E-mail",
      value: "crisalcantarabc@gmail.com",
      link: "mailto:crisalcantarabc@gmail.com?subject=Consulta sobre Nutrição Funcional",
      action: "Enviar E-mail"
    },
    {
      icon: "📸",
      title: "Instagram",
      value: "@cristianealcantaranutri",
      link: "https://www.instagram.com/cristianealcantaranutri/",
      action: "Me siga no Instagram"
    }
  ];

  return (
    <section id="contato" className="py-20 flex items-center bg-gradient-to-br from-purple-50 via-lilac-50 to-yellow-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Vamos Conversar?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-lilac-500 mx-auto mb-8"></div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Consultas Presenciais e Online
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Flexibilidade para você escolher o melhor formato
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl mb-2">📍 </div>
              <h4 className="font-semibold text-gray-800 mb-2">Atendimento em Aracaju/SE</h4>
              <p className="text-gray-600 text-sm">
                Confirme locais e convênios disponíveis
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">💻</div>
              <h4 className="font-semibold text-gray-800 mb-2">Atendimento Online</h4>
              <p className="text-gray-600 text-sm">
                Consultas por videochamada, onde você estiver
              </p>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => window.open('https://wa.me/5579991175352?text=Olá! Gostaria de agendar uma consulta com a nutricionista Cristiane Alcântara.', '_blank')}
              className="bg-gradient-purple-rose text-white font-semibold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Quero Agendar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 