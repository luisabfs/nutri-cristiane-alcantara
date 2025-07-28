'use client';

export default function BenefitsSection() {
  const benefits = [
    {
      icon: "⚡",
      title: "Mais Energia",
      description: "Recupere sua vitalidade e disposição para enfrentar o dia com mais motivação"
    },
    // {
    //   icon: "😴",
    //   title: "Sono Reparador",
    //   description: "Durma melhor e acorde mais descansada, com qualidade de sono restauradora"
    // },
    {
      icon: "🩺",
      title: "Redução de Desconfortos",
      description: "Diminua sintomas como inchaço, gases, azia e outros desconfortos digestivos"
    },
    {
      icon: "🌀",
      title: "Intestino Regulado",
      description: "Equilibre sua microbiota intestinal e melhore o funcionamento digestivo"
    },
    // {
    //   icon: "💪",
    //   title: "Autoestima Elevada",
    //   description: "Sinta-se mais confiante e satisfeita com seu corpo e sua saúde"
    // },
    // {
    //   icon: "✨",
    //   title: "Bem-estar Espiritual",
    //   description: "Conecte-se com sua essência e encontre equilíbrio emocional e espiritual"
    // }
  ];

  return (
    <section id="beneficios" className="py-20 pb-12 bg-gradient-to-br from-purple-50 via-lilac-50 to-yellow-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Benefícios para Você
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-lilac-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Com o Método Sozo, você experimentará transformações reais em sua vida, 
            conquistando uma saúde verdadeiramente integral.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="text-center mb-6">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Transformação Real
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Esses benefícios são conquistados de forma gradual e sustentável, 
              respeitando seu ritmo e individualidade. O Método Sozo trabalha 
              de forma multidimensional para que você sinta as mudanças em todos os 
              aspectos da sua vida.
            </p>
            <div className="flex justify-center space-x-4 text-sm text-gray-500">
              <span>📈 Avanços percebidos no dia a dia</span>
              <span>🔄 Mudanças sustentáveis</span>
              <span>💜 Abordagem personalizada</span>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => window.open('https://wa.me/5579991175352?text=Olá! Gostaria de agendar uma consulta com a Cristiane Alcântara.', '_blank')}
            className="bg-gradient-purple-rose text-white font-semibold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Agendar Consulta
          </button>
        </div>
      </div>
    </section>
  );
} 