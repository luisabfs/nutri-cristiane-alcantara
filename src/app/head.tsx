export default function Head() {
  return (
    <>
      {/* Pinterest specific meta tags - not available in Metadata API */}
      <meta name="pinterest-rich-pin" content="true" />
      <meta name="pinterest:image" content="https://nutri-cristiane-alcantara.vercel.app/pinterest-cover.jpg" />
      <meta name="pinterest:description" content="Saúde integral com o Método Sozo. Descubra como resgatar sua saúde de forma leve e possível." />
      
      {/* Additional OpenGraph tags for better compatibility */}
      <meta property="og:image:secure_url" content="https://nutri-cristiane-alcantara.vercel.app/og-cover.png" />
      <meta property="og:image:type" content="image/png" />
      
      {/* Additional Twitter tags for better compatibility */}
      <meta name="twitter:image:alt" content="Cristiane Alcântara - Nutricionista Funcional | Método Sozo" />
      
      {/* Additional SEO tags */}
      <meta name="theme-color" content="#8B5CF6" />
      <meta name="msapplication-TileColor" content="#8B5CF6" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Cristiane Alcântara" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://nutri-cristiane-alcantara.vercel.app" />
      
      {/* Favicon and icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </>
  );
} 