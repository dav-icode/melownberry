import React, { useState, useEffect } from 'react';
import { ChevronDown, Instagram, MessageCircle, MapPin, Star, Clock, Phone } from 'lucide-react';

const MelonberryApp = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sabores = [
    {
      id: 'morango',
      nome: 'Morango',
      emoji: '🍓',
      descricao: 'O clássico que todo mundo ama! Cremoso, docinho e com o sabor irresistível da fruta mais apaixonante de todas. Um verdadeiro gostinho de infância, feito para quem não abre mão de um sabor tradicional e delicioso.',
      cor: '#F9A8C0',
      corSecundaria: '#EB669B'
    },
    {
      id: 'melona',
      nome: 'Melona',
      emoji: '🍈',
      descricao: 'Direto da Coreia 🇰🇷 para conquistar o seu paladar! Inspirado no famoso sorvete coreano, o nosso Melona tem o sabor suave e marcante do melão, com uma cremosidade única que derrete na boca.',
      cor: '#C2E0C6',
      corSecundaria: '#8FBC8F'
    },
    {
      id: 'mista',
      nome: 'Mista',
      emoji: '💚🩷',
      descricao: 'Dois sabores, uma explosão de prazer! A combinação perfeita entre o morango e o melona em uma única casquinha. Uma mistura equilibrada, refrescante e inesquecível.',
      cor: 'linear-gradient(45deg, #F9A8C0, #C2E0C6)',
      corSecundaria: '#EB669B'
    }
  ];

  const Header = () => (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-lg transition-all duration-300">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <button
              onClick={() => setCurrentPage('sobre')}
              className="text-pink-600 hover:text-pink-800 font-semibold transition-colors duration-200"
            >
              Sobre
            </button>
            <button
              onClick={() => setCurrentPage('sabores')}
              className="text-pink-600 hover:text-pink-800 font-semibold transition-colors duration-200"
            >
              Sabores
            </button>
          </div>
          
          <div className="flex-1 flex justify-center">
            <button
              onClick={() => setCurrentPage('home')}
              className="text-3xl font-bold text-pink-600 hover:scale-105 transition-transform duration-200"
            >
              🍈 Melonberry
            </button>
          </div>
          
          <div className="flex items-center space-x-8">
            <button
              onClick={() => setCurrentPage('galeria')}
              className="text-pink-600 hover:text-pink-800 font-semibold transition-colors duration-200"
            >
              Galeria
            </button>
            <button
              onClick={() => setCurrentPage('contato')}
              className="text-pink-600 hover:text-pink-800 font-semibold transition-colors duration-200"
            >
              Contato
            </button>
          </div>
        </div>
      </nav>
    </header>
  );

  const HomePage = () => (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-green-50 to-pink-100 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-100/20 to-green-100/20"></div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="text-center">
            <div className="mb-8 animate-bounce">
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-pink-200 to-green-200 rounded-full shadow-2xl flex items-center justify-center text-8xl">
                🍦
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-pink-600 mb-6 animate-pulse">
              O sabor que conquista.
            </h1>
            
            <p className="text-xl md:text-2xl text-pink-500 mb-8 max-w-2xl mx-auto">
              Descubra nossos deliciosos sabores de sorvete e aproveite momentos refrescantes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setCurrentPage('sabores')}
                className="bg-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Ver Sabores
              </button>
              <button
                onClick={() => setCurrentPage('contato')}
                className="bg-green-400 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Fale Conosco
              </button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-pink-500" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-pink-600 mb-16">
            Por que escolher a Melonberry?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-pink-600 mb-4">Qualidade Premium</h3>
              <p className="text-gray-600">Ingredientes frescos e naturais para o melhor sabor.</p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-green-600 mb-4">Sempre Fresco</h3>
              <p className="text-gray-600">Sorvetes feitos diariamente para máxima qualidade.</p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-yellow-600 mb-4">Localização Perfeita</h3>
              <p className="text-gray-600">No coração de Boituva, fácil acesso para todos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Siga-nos no Instagram!
          </h2>
          <a
            href="https://instagram.com/melonberrybtv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-pink-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <Instagram className="w-6 h-6" />
            @melonberrybtv
          </a>
        </div>
      </section>
    </div>
  );

  const SaboresPage = () => (
    <div className="min-h-screen pt-24">
      <section className="py-20 bg-gradient-to-br from-pink-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-pink-600 mb-6">Nossos Sabores</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubra a variedade de sabores que oferecemos, cada um com sua própria história e tradição. 
              Nossos sabores são cuidadosamente selecionados para proporcionar uma experiência única e deliciosa.
            </p>
          </div>
          
          <div className="space-y-20">
            {sabores.map((sabor, index) => (
              <div
                key={sabor.id}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
              >
                <div className="flex-1">
                  <div className="w-80 h-80 mx-auto bg-gradient-to-br from-pink-200 to-green-200 rounded-3xl shadow-2xl flex items-center justify-center text-8xl hover:scale-105 transition-transform duration-300">
                    {sabor.emoji}
                  </div>
                </div>
                
                <div className="flex-1 text-center lg:text-left">
                  <h2 className="text-4xl font-bold text-pink-600 mb-6 flex items-center justify-center lg:justify-start gap-3">
                    {sabor.nome} {sabor.emoji}
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {sabor.descricao}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                    <span className="px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-medium">
                      Artesanal
                    </span>
                    <span className="px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium">
                      Natural
                    </span>
                    <span className="px-4 py-2 bg-yellow-100 text-yellow-600 rounded-full text-sm font-medium">
                      Cremoso
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const SobrePage = () => (
    <div className="min-h-screen pt-24">
      <section className="py-20 bg-gradient-to-br from-pink-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-pink-200 to-green-200 rounded-full shadow-lg flex items-center justify-center text-6xl mb-8">
              🍈
            </div>
            <h1 className="text-5xl font-bold text-pink-600 mb-6">Sobre a Melonberry</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              A Melonberry é uma marca dedicada a oferecer sorvetes artesanais de alta qualidade, 
              feitos com ingredientes frescos e naturais. Nossa missão é proporcionar uma experiência única de sabor e prazer a cada colherada.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-pink-600 mb-4 text-center">Qualidade</h3>
              <p className="text-gray-600 text-center">
                Utilizamos apenas os melhores ingredientes para garantir o sabor excepcional dos nossos sorvetes.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-green-600 mb-4 text-center">Inovação</h3>
              <p className="text-gray-600 text-center">
                Estamos sempre buscando novas combinações e sabores para surpreender nossos clientes.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-yellow-600 mb-4 text-center">Sustentabilidade</h3>
              <p className="text-gray-600 text-center">
                Comprometidos com o meio ambiente, adotamos práticas sustentáveis em nossa produção.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-12 rounded-2xl shadow-lg mb-20">
            <h2 className="text-3xl font-bold text-pink-600 mb-6 text-center">Nossa História</h2>
            <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto leading-relaxed">
              A Melonberry nasceu do amor por sorvetes e da vontade de criar algo especial. 
              Desde o início, nossa equipe se dedicou a desenvolver receitas exclusivas que combinam frutas frescas e ingredientes de alta qualidade. 
              Com o tempo, conquistamos o coração dos amantes de sorvete, tornando-nos uma referência no mercado.
            </p>
          </div>
          
          <div className="bg-white p-12 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-pink-600 mb-6 text-center">Nossa Localização</h2>
            <p className="text-lg text-gray-600 text-center mb-8">
              Estamos localizados na cidade de Boituva - SP, mais especificamente na Avenida Joaquim Trujillo, 262 - Jardim Flamboyant.
            </p>
            <div className="bg-gray-200 h-64 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">Mapa do Google Maps será inserido aqui</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const ContatoPage = () => (
    <div className="min-h-screen pt-24">
      <section className="py-20 bg-gradient-to-br from-pink-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-pink-600 mb-6">Contate-nos!</h1>
            <p className="text-xl text-gray-600">
              Se você tiver alguma dúvida, sugestão ou apenas quiser conversar, estamos aqui para ajudar!
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold text-pink-600 mb-6 text-center">Manda um zap pra gente! 😉</h2>
              <div className="text-center">
                <button className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-3">
                  <MessageCircle className="w-6 h-6" />
                  WhatsApp
                </button>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold text-pink-600 mb-6 text-center">Formulário de Contato</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Nome</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="Seu nome"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Sobrenome</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="Seu sobrenome"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">E-mail</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="seu.email@exemplo.com"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Mensagem</label>
                  <textarea
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 h-32 resize-none"
                    placeholder="Escreva sua mensagem aqui..."
                  ></textarea>
                </div>
                
                <button
                  onClick={() => alert('Mensagem enviada com sucesso!')}
                  className="w-full bg-pink-500 text-white py-3 rounded-lg font-semibold hover:bg-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Enviar Mensagem
                </button>
                
                <p className="text-sm text-gray-500 text-center">
                  * Não se preocupe, não vamos enviar spam! Seus dados estão seguros conosco.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const GaleriaPage = () => (
    <div className="min-h-screen pt-24">
      <section className="py-20 bg-gradient-to-br from-pink-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-pink-600 mb-6">Galeria</h1>
            <p className="text-xl text-gray-600">
              Confira algumas fotos dos nossos deliciosos sorvetes!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-gradient-to-br from-pink-200 to-green-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-64 flex items-center justify-center text-4xl">
                🍦
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const WhatsAppFloat = () => (
    <a
      href="#"
      className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-50"
    >
      <MessageCircle className="w-8 h-8 text-white" />
    </a>
  );

  const Footer = () => (
    <footer className="bg-pink-50 border-t border-pink-200 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-600 mb-2">
          &copy; 2025 Melonberry. Todos os direitos reservados.
        </p>
        <p className="text-gray-600">
          Desenvolvido por <strong>
            <a href="https://instagram.com/jottabkz" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
              João Barroso
            </a>
          </strong>
        </p>
      </div>
    </footer>
  );

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'sabores':
        return <SaboresPage />;
      case 'sobre':
        return <SobrePage />;
      case 'contato':
        return <ContatoPage />;
      case 'galeria':
        return <GaleriaPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {renderPage()}
      <WhatsAppFloat />
      <Footer />
    </div>
  );
};

export default MelonberryApp;