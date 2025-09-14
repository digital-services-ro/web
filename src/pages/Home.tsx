import { ArrowRight, CheckCircle, Star, Users, TrendingUp, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-image.jpg';
import socialMediaIcon from '@/assets/social-media-icon.jpg';
import seoIcon from '@/assets/seo-icon.jpg';
import aiMarketingIcon from '@/assets/ai-marketing-icon.jpg';
import Counter from '@/components/Counter';
import TestCounter from '@/components/TestCounter';
import PixelCard from '@/components/PixelCard';
import LogoLoop from '@/components/LogoLoop';

interface HomeProps {
  language: 'ro' | 'en';
}

const Home = ({ language }: HomeProps) => {
  // Array of partner logos - replace with actual logo URLs
  const logosArray = [
    'https://redogroup.com/wp-content/uploads/2024/02/logo.svg',
    'https://lightsmart.ro/image/cache/catalog/Logo%20Producatori/Logo-Arelux-870x457.png',
    'https://redogroup.com/wp-content/uploads/2024/02/logo.svg',
    'https://lightsmart.ro/image/cache/catalog/Logo%20Producatori/Logo-Arelux-870x457.png',
    'https://redogroup.com/wp-content/uploads/2024/02/logo.svg',
    'https://lightsmart.ro/image/cache/catalog/Logo%20Producatori/Logo-Arelux-870x457.png',
    'https://redogroup.com/wp-content/uploads/2024/02/logo.svg',
    'https://lightsmart.ro/image/cache/catalog/Logo%20Producatori/Logo-Arelux-870x457.png',
  ];

  const content = {
    ro: {
      hero: {
        title: 'Marketing Inteligent.',
        subtitle: 'Rezultate Reale.',
        description: 'Transformăm prezența ta online cu strategii bazate pe date în Social Media, SEO și Marketing AI.',
        cta: 'Explorează Serviciile',
        ctaSecondary: 'Contactează-ne',
      },
      services: {
        title: 'Serviciile Noastre',
        subtitle: 'Soluții complete de marketing digital pentru afacerea ta',
        socialMedia: {
          title: 'Social Media Marketing',
          description: 'Construim și gestionăm prezența ta pe rețelele sociale pentru a maximiza angajamentul și conversiile.',
        },
        seo: {
          title: 'Optimizare SEO',
          description: 'Îmbunătățim vizibilitatea ta în motoarele de căutare pentru a atrage mai mulți clienți potențiali.',
        },
        ai: {
          title: 'Marketing AI',
          description: 'Folosim inteligența artificială pentru a automatiza și optimiza campaniile tale de marketing.',
        },
      },
      stats: {
        title: 'Rezultate Care Vorbesc',
        clients: 'Clienți Mulțumiți',
        growth: 'Creștere Medie',
        campaigns: 'Campanii de Succes',
      },
      socialProof: {
        title: 'Partenerii Noștri de Încredere',
        subtitle: 'Colaborăm cu branduri de top pentru a le transforma viziunea în realitate.',
      },
      cta: {
        title: 'Gata să Îți Transformi Afacerea?',
        subtitle: 'Să discutăm despre cum putem ajuta brandul tău să crească în mediul digital.',
        button: 'Solicită Consultație Gratuită',
      },
    },
    en: {
      hero: {
        title: 'Intelligent Marketing.',
        subtitle: 'Real Results.',
        description: 'Transform your online presence with data-driven strategies in Social Media, SEO & AI Marketing.',
        cta: 'Explore Our Services',
        ctaSecondary: 'Get in Touch',
      },
      services: {
        title: 'Our Services',
        subtitle: 'Complete digital marketing solutions for your business',
        socialMedia: {
          title: 'Social Media Marketing',
          description: 'We build and manage your social media presence to maximize engagement and conversions.',
        },
        seo: {
          title: 'SEO Optimization',
          description: 'We improve your search engine visibility to attract more qualified leads.',
        },
        ai: {
          title: 'AI Marketing',
          description: 'We leverage artificial intelligence to automate and optimize your marketing campaigns.',
        },
      },
      stats: {
        title: 'Results That Speak',
        clients: 'Happy Clients',
        growth: 'Average Growth',
        campaigns: 'Successful Campaigns',
      },
      socialProof: {
        title: 'Our Trusted Partners',
        subtitle: 'We collaborate with top brands to transform their vision into reality.',
      },
      cta: {
        title: 'Ready to Transform Your Business?',
        subtitle: 'Let\'s discuss how we can help your brand grow in the digital landscape.',
        button: 'Request Free Consultation',
      },
    },
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        </div>
        
        <div className="relative z-10 container-wide">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="mb-6 text-balance">
              <span className="gradient-text">{currentContent.hero.title}</span>
              <br />
              <span className="text-foreground">{currentContent.hero.subtitle}</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
              {currentContent.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                variant="hero" 
                size="xl" 
                asChild
                className="w-full sm:w-auto"
              >
                <Link to={language === 'ro' ? '/servicii' : '/services'}>
                  {currentContent.hero.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="ghostGold" 
                size="xl"
                asChild
                className="w-full bg-background-secondary sm:w-auto"
              >
                <Link to="/contact">
                  {currentContent.hero.ctaSecondary}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background-secondary">
        <div className="container-wide">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="mb-4 text-balance">{currentContent.stats.title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-scale-in">
              <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2 flex items-center justify-center">
                <TestCounter value={150} />
                <span className="ml-1">+</span>
              </div>
              <p className="text-foreground-secondary">{currentContent.stats.clients}</p>
            </div>
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-accent-foreground" />
              </div>
              <div className="text-4xl font-bold text-accent mb-2 flex items-center justify-center">
                <TestCounter value={300} color="hsl(var(--accent))" />
                <span className="ml-1">%</span>
              </div>
              <p className="text-foreground-secondary">{currentContent.stats.growth}</p>
            </div>
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2 flex items-center justify-center">
                <TestCounter value={500} />
                <span className="ml-1">+</span>
              </div>
              <p className="text-foreground-secondary">{currentContent.stats.campaigns}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container-wide">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="mb-4 text-balance">{currentContent.services.title}</h2>
            <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
              {currentContent.services.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PixelCard
              variant="yellow"
              title={currentContent.services.socialMedia.title}
              description={currentContent.services.socialMedia.description}
              imageSrc={socialMediaIcon}
              imageAlt="Social Media Marketing"
              footerText="Strategy & Content"
            />

            <PixelCard
              variant="green"
              title={currentContent.services.seo.title}
              description={currentContent.services.seo.description}
              imageSrc={seoIcon}
              imageAlt="SEO Optimization"
              footerText="Technical & Content SEO"
            />

            <PixelCard
              variant="purple"
              title={currentContent.services.ai.title}
              description={currentContent.services.ai.description}
              imageSrc={aiMarketingIcon}
              imageAlt="AI Marketing"
              footerText="Automation & Analytics"
            />
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-muted w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up max-w-7xl mx-auto">
            <h2 className="mb-4 text-balance">{currentContent.socialProof.title}</h2>
            <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
              {currentContent.socialProof.subtitle}
            </p>
          </div>
          
          <div className="w-full overflow-hidden">
            <LogoLoop
              logos={logosArray}
              speed={120}
              direction="left"
              logoHeight={48}
              gap={40}
              pauseOnHover
              scaleOnHover={false}
              fadeOut
              fadeOutColor="hsl(var(--muted))"
              ariaLabel="Our partners"
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container-wide text-center">
          <div className="max-w-3xl mx-auto animate-fade-in-up">
            <h2 className="mb-4 text-balance text-primary-foreground">
              {currentContent.cta.title}
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 leading-relaxed">
              {currentContent.cta.subtitle}
            </p>
            <Button 
              variant="secondary" 
              size="xl" 
              asChild
              className="shadow-elegant hover:shadow-focus"
            >
              <Link to="/contact">
                {currentContent.cta.button}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;