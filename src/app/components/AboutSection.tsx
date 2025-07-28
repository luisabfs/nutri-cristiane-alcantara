export default function AboutSection() {
  const pilares = [
    {
      icon: "🥗",
      title: "Alimentação de verdade",
      description: "Nutrição baseada em alimentos naturais e comida de verdade"
    },
    {
      icon: "😴",
      title: "Sono reparador",
      description: "Qualidade do sono para recuperação e regeneração"
    },
    {
      icon: "🧹",
      title: "Redução de toxinas",
      description: "Eliminação de substâncias prejudiciais ao organismo"
    },
    {
      icon: "🏃‍♀️",
      title: "Movimento com propósito",
      description: "Comer bem dá suporte à prática de atividade física, respeitando seu ritmo, limites e rotina"
    },
    {
      icon: "🧠",
      title: "Apoio emocional pela nutrição",
      description: "A alimentação apoia o humor, a saciedade e a energia, contribuindo para uma mente mais estável"
    },
    {
      icon: "🙏",
      title: "Espiritualidade como base",
      description: "Cuidar do corpo com intenção também nutre a fé e desempenha papel fundamental na motivação para mudanças"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Sobre Mim
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-lilac-500 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Olá, sou Cristiane Alcântara
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Sou nutricionista clínica funcional, comprometida em ajudar pessoas a resgatarem sua saúde de forma natural, leve e sustentável.
              Tenho formação em Nutrição e sou pós-graduanda em Nutrição Clínica Funcional.
            </p>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              A partir dessa base, desenvolvi o <strong className="text-purple-600">Método Sozo</strong>, uma abordagem integrativa que considera o corpo, a mente e o espírito como partes inseparáveis do processo de cura.
              Acredito que a verdadeira saúde vai muito além da alimentação.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              É sobre construir um estilo de vida equilibrado, com escolhas que nutrem você por inteiro: física, emocional e espiritual.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 via-lilac-50 to-yellow-50 p-8 rounded-2xl">
            <div className="w-48 h-48 bg-gradient-to-br from-purple-200 to-lilac-200 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
              <img 
                src="/profile_cristiane.png" 
                alt="Cristiane Alcântara - Nutricionista Funcional" 
                className="w-full h-full object-cover scale-110 "
              />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-4 text-center">
              O que é o Método Sozo?
            </h4>
            <p className="text-gray-600 text-center leading-relaxed text-justify">
             É uma abordagem integrativa que promove saúde e bem-estar de forma completa.
             Seu nome, que significa <em>resgate e salvação</em>, traduz a missão de restaurar a saúde física, mental, espiritual e social com base em evidências científicas e princípios de fé.

             Inspirado pela definição de saúde da OMS, o Método Sozo propõe uma transformação sustentável no estilo de vida, indo além da alimentação e acolhendo o ser humano por inteiro.            </p>
          </div>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-8">
            Os Pilares do Método Sozo
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pilares.map((pilar, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-purple-300"
            >
              <div className="text-4xl mb-4">{pilar.icon}</div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                {pilar.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {pilar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 