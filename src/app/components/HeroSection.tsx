'use client';

import Image from 'next/image';

export default function HeroSection() {
  const handleAgendarConsulta = () => {
    window.open('https://wa.me/5579991175352?text=Olá! Gostaria de agendar uma consulta com a Cristiane Alcântara.', '_blank');
  };

  return (
    <section className="min-h-[calc(100vh-60px)] lg:min-h-screen relative overflow-hidden mt-12 lg:flex lg:items-center lg:pt-0 bg-gradient-to-br from-purple-50 via-lilac-50 to-yellow-50">
      <div className="w-full relative z-10 h-full">
        {/* Layout Mobile: Imagem no topo */}
        <div className="lg:hidden flex flex-col h-full">
          {/* Imagem no topo - largura total sem padding */}
          <div className="relative w-full h-[300px] min-h-[250px] max-h-[350px] min-[400px]:h-[400px] overflow-hidden rounded-b-3xl">
            <Image 
              src="/hero_bg.jpg" 
              alt="Cristiane Alcântara - Nutricionista Funcional" 
              fill
              className="object-cover object-center"
              style={{ objectPosition: 'center 40%' }}
            />
            {/* Gradiente suave para integrar com o fundo */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#f8f4ff]/40"></div>
            {/* Gradiente inferior sutil para fundir com o fundo da hero */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/95 via-white/70 to-transparent"></div>
            {/* Gradiente adicional para transição mais suave */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-purple-50/80 via-lilac-50/60 to-transparent"></div>
          </div>

          {/* Conteúdo reorganizado */}
          <div className="text-center space-y-4 min-[400px]:space-y-6 px-4 bg-gradient-to-br from-purple-50 via-lilac-50 to-yellow-50 flex-1">
            {/* Título principal */}
            <div className="mb-4 min-[400px]:mb-6">
              <h1 className="text-2xl min-[400px]:text-4xl md:text-5xl font-bold text-gray-800 mb-4 min-[400px]:mb-6 leading-tight">
                <div>Saúde Integral com</div>
                <div>o <span className="text-purple-600">Método</span> <span className="text-purple-600 font-bold">Sozo</span></div>
              </h1>
            </div>

            {/* Nome e título profissional */}
            <h2 className="text-sm min-[400px]:text-base md:text-xl font-semibold text-gray-700 mb-4 min-[400px]:mb-6">
              Cristiane Alcântara · Nutricionista Funcional
            </h2>

            {/* Botão centralizado */}
            <div className="mb-6 min-[400px]:mb-8">
              <button
                onClick={handleAgendarConsulta}
                className="bg-gradient-purple-rose text-white font-semibold py-3 px-6 min-[400px]:py-4 min-[400px]:px-8 rounded-full text-sm min-[400px]:text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Agende sua consulta
              </button>
            </div>

            {/* Temas trabalhados - menos destaque */}
            <div className="space-y-3 min-[400px]:space-y-4">
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-3 min-[400px]:mb-4">
                Resgate sua saúde de forma leve e possível 🍃
              </p>
              <div className="flex flex-wrap gap-1 min-[400px]:gap-2 justify-center text-gray-600">
                <div className="flex items-center justify-center space-x-1">
                  <span className="text-lg min-[400px]:text-xl">·</span>
                  <span className="text-xs min-[400px]:text-sm font-medium">Reeducação Alimentar</span>
                </div>
                <div className="flex items-center justify-center space-x-1">
                  <span className="text-lg min-[400px]:text-xl">·</span>
                  <span className="text-xs min-[400px]:text-sm font-medium">Estratégias Personalizadas</span>
                </div>
                <div className="flex items-center justify-center space-x-1">
                  <span className="text-lg min-[400px]:text-xl">·</span>
                  <span className="text-xs min-[400px]:text-sm font-medium">Constância e Equilíbrio</span>
                </div>
                <div className="flex items-center justify-center space-x-1">
                  <span className="text-lg min-[400px]:text-xl">·</span>
                  <span className="text-xs min-[400px]:text-sm font-medium">Vitalidade e Bem-estar</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Layout Desktop: Grid original - mantido intacto */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-0 items-stretch">
          {/* Coluna da Foto - Ocupando toda a altura */}
          <div className="order-2 lg:order-1 relative h-screen">
            <div className="relative h-full">
              {/* Foto principal ocupando toda a altura */}
              <div className="relative h-full">
                <div className="w-full h-full overflow-hidden">
                  <Image 
                    src="/hero_bg.jpg" 
                    alt="Cristiane Alcântara - Nutricionista Funcional" 
                    fill
                    className="object-cover object-center"
                    style={{ objectPosition: 'center 70%' }}
                  />
                  {/* Gradiente principal para transição */}
                  {/* <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#d8dde8]-50/95 via-[yellow]-10/60 to-transparent"></div> */}
                  <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-yellow-50/95 via-yellow-50/60 to-transparent"></div>
                  <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-[#d8dde8]/10 via-[#d8dde8]/60 to-transparent"></div>
                  {/* Gradiente adicional acima do amarelo */}
                  {/* Gradiente médio para transição suave */}
                  <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-lilac-50/85 via-lilac-10/70 to-transparent"></div>
                  {/* Gradiente sutil para eliminar a linha */}
                  <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-purple-50/75 to-transparent"></div>
                  {/* Gradiente final para transição perfeita */}
                  <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-purple-50/60 to-transparent"></div>
                </div>
              </div>
              
              {/* Elemento decorativo sutil */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-lilac-500/10 rounded-full blur-sm"></div>
            </div>
          </div>

          {/* Coluna do Texto */}
          <div className="order-1 lg:order-2 text-center flex flex-col justify-center px-8 lg:px-12 bg-gradient-to-br from-purple-50 via-lilac-50 to-yellow-50 h-screen">
            <div className="mb-6">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                <div>Saúde integral com</div>
                <div>o <span className="text-purple-600">Método</span> <span className="text-purple-600 font-bold">Sozo</span></div>
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
                  <span className="text-sm font-medium">Vitalidade e Bem-estar</span>
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