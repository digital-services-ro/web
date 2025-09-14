import { CheckCircle, ArrowRight, Users, TrendingUp, Search, Brain, Share2, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import socialMediaIcon from '@/assets/social-media-icon.jpg';
import seoIcon from '@/assets/seo-icon.jpg';
import aiMarketingIcon from '@/assets/ai-marketing-icon.jpg';

interface ServicesProps {
  language: 'ro' | 'en';
}

const Services = ({ language }: ServicesProps) => {
  const content = {
    ro: {
      title: 'Serviciile Noastre',
      subtitle: 'Soluții complete de marketing digital adaptate nevoilor afacerii tale',
      socialMedia: {
        title: 'Social Media Marketing',
        description: 'Construim și gestionăm prezența ta pe rețelele sociale pentru a maximiza angajamentul și conversiile. Strategiile noastre personalizate sunt create pentru a reflecta vocea brandului tău.',
        features: [
          'Strategie de conținut personalizată',
          'Gestionare comunitate 24/7',
          'Campanii publicitare targetate',
          'Analiză și raportare detaliată',
          'Influencer marketing',
          'Creație video și grafică',
        ],
        process: {
          title: 'Procesul Nostru',
          steps: [
            'Audit și analiză competitori',
            'Dezvoltare strategie de brand',
            'Creație conținut și calendar',
            'Implementare și monitorizare',
          ],
        },
      },
      seo: {
        title: 'Optimizare SEO',
        description: 'Îmbunătățim vizibilitatea ta în motoarele de căutare pentru a atrage mai mulți clienți potențiali calificați. Folosim cele mai noi tehnici și instrumente pentru rezultate durabile.',
        features: [
          'Audit SEO complet',
          'Optimizare tehnică on-page',
          'Strategie de cuvinte cheie',
          'Link building de calitate',
          'SEO local și Google My Business',
          'Monitorizare și raportare',
        ],
        process: {
          title: 'Procesul Nostru',
          steps: [
            'Audit și analiză site',
            'Cercetare cuvinte cheie',
            'Optimizare tehnică',
            'Monitorizare și îmbunătățire',
          ],
        },
      },
      ai: {
        title: 'Marketing AI',
        description: 'Folosim inteligența artificială pentru a automatiza și optimiza campaniile tale de marketing. Soluțiile noastre AI te ajută să iei decizii mai bune bazate pe date.',
        features: [
          'Automatizare campanii',
          'Personalizare conținut',
          'Analiză predictivă',
          'Chatbots inteligenți',
          'Optimizare conversii',
          'Targeting avansat',
        ],
        process: {
          title: 'Procesul Nostru',
          steps: [
            'Analiză date existente',
            'Implementare soluții AI',
            'Training și optimizare',
            'Monitorizare și scalare',
          ],
        },
      },
      cta: {
        title: 'Gata să Începem?',
        subtitle: 'Contactează-ne pentru o consultație gratuită și să discutăm cum putem ajuta afacerea ta să crească.',
        button: 'Contactează-ne Acum',
      },
    },
    en: {
      title: 'Our Services',
      subtitle: 'Complete digital marketing solutions tailored to your business needs',
      socialMedia: {
        title: 'Social Media Marketing',
        description: 'We build and manage your social media presence to maximize engagement and conversions. Our personalized strategies are crafted to reflect your brand voice.',
        features: [
          'Custom content strategy',
          '24/7 community management',
          'Targeted advertising campaigns',
          'Detailed analytics and reporting',
          'Influencer marketing',
          'Video and graphic creation',
        ],
        process: {
          title: 'Our Process',
          steps: [
            'Audit & competitor analysis',
            'Brand strategy development',
            'Content creation & calendar',
            'Implementation & monitoring',
          ],
        },
      },
      seo: {
        title: 'SEO Optimization',
        description: 'We improve your search engine visibility to attract more qualified leads. Using the latest techniques and tools for sustainable results.',
        features: [
          'Complete SEO audit',
          'Technical on-page optimization',
          'Keyword strategy',
          'Quality link building',
          'Local SEO & Google My Business',
          'Monitoring and reporting',
        ],
        process: {
          title: 'Our Process',
          steps: [
            'Site audit & analysis',
            'Keyword research',
            'Technical optimization',
            'Monitoring & improvement',
          ],
        },
      },
      ai: {
        title: 'AI Marketing',
        description: 'We leverage artificial intelligence to automate and optimize your marketing campaigns. Our AI solutions help you make better data-driven decisions.',
        features: [
          'Campaign automation',
          'Content personalization',
          'Predictive analytics',
          'Intelligent chatbots',
          'Conversion optimization',
          'Advanced targeting',
        ],
        process: {
          title: 'Our Process',
          steps: [
            'Existing data analysis',
            'AI solution implementation',
            'Training & optimization',
            'Monitoring & scaling',
          ],
        },
      },
      cta: {
        title: 'Ready to Get Started?',
        subtitle: 'Contact us for a free consultation and let\'s discuss how we can help your business grow.',
        button: 'Contact Us Now',
      },
    },
  };

  const currentContent = content[language];

  const services = [
    {
      icon: socialMediaIcon,
      iconComponent: Share2,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      data: currentContent.socialMedia,
    },
    {
      icon: seoIcon,
      iconComponent: Search,
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      data: currentContent.seo,
    },
    {
      icon: aiMarketingIcon,
      iconComponent: Brain,
      color: 'text-brand-purple-accent',
      bgColor: 'bg-brand-purple-accent/10',
      data: currentContent.ai,
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container-wide text-center">
          <h1 className="mb-6 animate-fade-in-up text-balance text-3xl">
            {currentContent.title}
          </h1>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto leading-relaxed">
            {currentContent.subtitle}
          </p>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20">
        <div className="container-wide">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="animate-fade-in-up">
                    <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                      <service.iconComponent className={`h-8 w-8 ${service.color}`} />
                    </div>
                    
                    <h2 className="mb-6 text-balance text-2xl">{service.data.title}</h2>
                    <p className="text-lg text-foreground-secondary mb-8 leading-relaxed">
                      {service.data.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      {service.data.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className={`h-5 w-5 ${service.color} flex-shrink-0`} />
                          <span className="text-foreground-secondary">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Card className="mb-8">
                      <CardHeader>
                        <CardTitle className="text-base">{service.data.process.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {service.data.process.steps.map((step, stepIndex) => (
                            <div key={stepIndex} className="flex items-center space-x-3">
                              <div className={`w-8 h-8 ${service.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                                <span className={`text-sm font-semibold ${service.color}`}>
                                  {stepIndex + 1}
                                </span>
                              </div>
                              <span className="text-foreground-secondary">{step}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative animate-scale-in">
                    <div className="aspect-square rounded-3xl overflow-hidden shadow-elegant">
                      <img 
                        src={service.icon} 
                        alt={service.data.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-hero rounded-2xl flex items-center justify-center animate-float">
                      <BarChart3 className="h-12 w-12 text-primary-foreground" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container-wide text-center">
          <div className="max-w-3xl mx-auto animate-fade-in-up">
            <h2 className="mb-4 text-balance text-2xl text-primary-foreground">
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

export default Services;