'use client';

export default function HeroSection() {
  const handleAgendarConsulta = () => {
    window.open('https://wa.me/5579991175352?text=Olá! Gostaria de agendar uma consulta com a Cristiane Alcântara.', '_blank');
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-50 via-lilac-50 to-yellow-50 relative overflow-hidden mt-12 md:mt-6 lg:flex lg:items-center lg:pt-0">
      <div className="max-w-7xl mx-auto px-0 lg:px-4 w-full relative z-10">
        {/* Layout Mobile: Imagem no topo */}
        <div className="lg:hidden flex flex-col">
          {/* Imagem no topo - largura total sem padding */}
          <div className="relative w-screen h-[400px] overflow-hidden mb-8 rounded-b-3xl -mb-5">
            <img 
              src="/hero_bg.jpg" 
              alt="Cristiane Alcântara - Nutricionista Funcional" 
              className="w-full h-full object-cover object-center"
              style={{ objectPosition: 'center 70%' }}
            />
            {/* Gradiente suave para integrar com o fundo */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#f8f4ff]/40"></div>
            {/* Gradiente inferior sutil para fundir com o fundo da hero */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#fcfaee]/90 via-[#fcfaee]/60 to-transparent"></div>
          </div>

          {/* Conteúdo reorganizado */}
          <div className="text-center space-y-6 px-4">
            {/* Título principal */}
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                Saúde integral com o{' '}
                <span className="text-purple-600">Método</span>{' '}
                <span className="text-purple-600 font-bold">Sozo</span>
              </h1>
            </div>

            {/* Nome e título profissional */}
            <h2 className="text-base md:text-xl font-semibold text-gray-700 mb-6">
              Cristiane Alcântara · Nutricionista Funcional
            </h2>

            {/* Botão centralizado */}
            <div className="mb-8">
              <button
                onClick={handleAgendarConsulta}
                className="bg-gradient-purple-rose text-white font-semibold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Agende sua consulta
              </button>
            </div>

            {/* Temas trabalhados - menos destaque */}
            <div className="space-y-4">
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-4">
                Resgate sua saúde de forma leve e possível 🍃
              </p>
              <div className="flex flex-wrap gap-2 justify-center text-gray-600">
                <div className="flex items-center justify-center space-x-1">
                  <span className="text-xl">·</span>
                  <span className="text-sm font-medium">Reeducação Alimentar</span>
                </div>
                <div className="flex items-center justify-center space-x-1">
                  <span className="text-xl">·</span>
                  <span className="text-sm font-medium">Estratégias Personalizadas</span>
                </div>
                <div className="flex items-center justify-center space-x-1">
                  <span className="text-xl">·</span>
                  <span className="text-sm font-medium">Constância e Equilíbrio</span>
                </div>
                <div className="flex items-center justify-center space-x-1">
                  <span className="text-xl">·</span>
                  <span className="text-sm font-medium">Prevenção de Doenças</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Layout Desktop: Grid original - mantido intacto */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-start lg:pt-8">
          {/* Coluna da Foto - Integrada com o layout */}
          <div className="order-2 lg:order-1 relative">
            <div className="relative lg:ml-[-2rem]">
              {/* Foto principal com fundo estendido */}
              <div className="relative">
                <div className="w-full h-[500px] lg:h-[600px] rounded-3xl lg:rounded-r-none overflow-hidden shadow-2xl lg:shadow-none">
                  <img 
                    src="/hero_bg.jpg" 
                    alt="Cristiane Alcântara - Nutricionista Funcional" 
                    className="w-full h-full object-cover object-center"
                    style={{ objectPosition: 'center 70%' }}
                  />
                  {/* Gradiente suave para integrar com o fundo - cor exata do meio do gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#f8f4ff]/40 lg:to-[#f8f4ff]/60"></div>
                  {/* Gradiente adicional para transição mais suave */}
                  <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#f8f4ff]/80 via-[#f8f4ff]/40 to-transparent"></div>
                </div>
              </div>
              
              {/* Elemento decorativo sutil */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-lilac-500/20 rounded-full blur-sm"></div>
            </div>
          </div>

          {/* Coluna do Texto */}
          <div className="order-1 lg:order-2 text-center flex flex-col justify-center">
            <div className="mb-6">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                Saúde integral com o{' '}
                <span className="text-purple-600">Método</span>{' '}
                <span className="text-purple-600 font-bold">Sozo</span>
              </h1>

              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 mb-6">
                Cristiane Alcântara · Nutricionista Clínica Funcional
              </h2>

              <p className="text-lg md:text-xl lg:text-xl text-gray-600 mb-8 leading-relaxed">
                Resgate sua saúde de forma leve e possível 🍃
              </p>
            </div>

            <button
              onClick={handleAgendarConsulta}
              className="bg-gradient-purple-rose text-white font-semibold py-5 px-10 rounded-full text-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 mb-12 w-fit mx-auto"
            >
              Agende sua consulta
            </button>

            {/* Seção de temas trabalhados */}
            <div className="space-y-4">
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide text-center">
                Temas trabalhados:
              </p>
              <div className="flex flex-wrap justify-center max-w-md mx-auto gap-2 text-gray-600">
                <div className="flex items-center justify-center space-x-1">
                  <span className="text-xl">·</span>
                  <span className="text-sm font-medium">Reeducação Alimentar</span>
                </div>
                <div className="flex items-center justify-center space-x-1">
                  <span className="text-xl">·</span>
                  <span className="text-sm font-medium">Estratégias Personalizadas</span>
                </div>
                <div className="flex items-center justify-center space-x-1">
                  <span className="text-xl">·</span>
                  <span className="text-sm font-medium">Constância e Equilíbrio</span>
                </div>
                <div className="flex items-center justify-center space-x-1">
                  <span className="text-xl">·</span>
                  <span className="text-sm font-medium">Prevenção de Doenças</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200/30 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-lilac-200/20 rounded-full blur-xl"></div>
    </section>
  );
} 