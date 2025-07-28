'use client';

import Image from 'next/image';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Luísa Barros",
      text: "Durante os 27 dias antes do meu casamento, tive resultados incríveis com um plano totalmente ajustado às minhas necessidades física, emocional e digestiva. Mesmo sendo uma fase estressante, me senti acolhida e com energia até o fim. Cris me ajudou a chegar no meu grande dia me sentindo eu mesma, sem exageros, sem fórmulas mágicas. Foi real, sustentável e feito com muito carinho.",
      rating: 5,
      observation: "Pré-casamento",
      attendance: "online",
      highlight: true
    },
    // {
    //   name: "Danielle Alcântara",
    //   text: "Finalmente encontrei uma nutricionista que entende que saúde vai além da alimentação. O Método Sozo, além de me ajudar a resolver problemas que carregava há anos, me fez entender que saúde é muito mais que dieta.",
    //   rating: 5,
    //   observation: "Emagrecimento",
    //   attendance: "presencial"
    // },
    // {
    //   name: "Elisângela Santos",
    //   text: "Depois de anos sofrendo com a minha relação com a comida, Cristiane me ajudou a identificar e resolver o problema. Hoje me sinto muito melhor e com uma relação muito mais saudável com a comida.",
    //   rating: 5,
    //   observation: "Hipertrofia",
    //   attendance: "presencial"
    // }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className="text-yellow-400 text-lg">
        {i < rating ? "★" : "☆"}
      </span>
    ));
  };

  return (
    <section id="depoimentos" className="py-20 pt-12 pb-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Depoimentos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-lilac-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cada pessoa tem uma história. <br />Aqui estão algumas que marcaram minha jornada como nutricionista.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                testimonial.highlight 
                  ? 'border-purple-300 bg-gradient-to-br from-purple-50 via-lilac-50 to-yellow-50 md:col-span-2' 
                  : 'border-gray-100'
              }`}
            >
              {testimonial.highlight ? (
                // Layout especial para o depoimento em destaque com imagem
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Coluna da imagem */}
                  <div className="order-2 md:order-1">
                    <Image
                      src="/mockup_feedback_luisa.png"
                      alt="Depoimento da Luísa Barros"
                      width={500}
                      height={300}
                      className="w-full h-auto rounded-xl shadow-lg"
                    />
                  </div>
                  
                  {/* Coluna do depoimento */}
                  <div className="order-1 md:order-2">
                    <div className="flex justify-center mb-4">
                      {renderStars(testimonial.rating)}
                    </div>
                    
                    <blockquote className="text-gray-700 mb-6 leading-relaxed italic text-lg">
                      &ldquo;{testimonial.text}&rdquo;
                    </blockquote>
                    
                    <div className="text-center">
                      <p className="font-semibold text-gray-800 text-lg mb-1">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        {testimonial.observation} • {testimonial.attendance === 'online' ? 'Atendimento Online' : 'Atendimento Presencial'}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                // Layout padrão para outros depoimentos
                <>
                  <div className="flex justify-center mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  <blockquote className="text-gray-700 mb-6 leading-relaxed italic text-lg">
                    &ldquo;{testimonial.text}&rdquo;
                  </blockquote>
                  
                  <div className="text-center">
                    <p className="font-semibold text-gray-800 text-lg mb-1">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonial.observation} • {testimonial.attendance === 'online' ? 'Atendimento Online' : 'Atendimento Presencial'}
                    </p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 