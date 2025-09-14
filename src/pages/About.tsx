import { Users, Target, Lightbulb, Heart, Award, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import TestCounter from '@/components/TestCounter';

interface AboutProps {
  language: 'ro' | 'en';
}

const About = ({ language }: AboutProps) => {
  const content = {
    ro: {
      title: 'Despre Digitalsense',
      subtitle: 'Suntem o echipă pasionată de specialiști în marketing digital, dedicați să transformăm viziunea brandurilor în rezultate concrete.',
      mission: {
        title: 'Misiunea Noastră',
        description: 'Să împuternicim afacerile să prospere în era digitală prin strategii inovatoare de marketing, tehnologie avansată și o abordare centată pe rezultate.',
      },
      vision: {
        title: 'Viziunea Noastră',
        description: 'Să devenim partenerul de încredere pentru brandurile care vor să își transforme prezența online și să obțină o creștere sustenabilă în mediul digital.',
      },
      values: {
        title: 'Valorile Noastre',
        items: [
          {
            icon: Target,
            title: 'Orientare către Rezultate',
            description: 'Fiecare strategie pe care o dezvoltăm este bazată pe obiective clare și măsurabile.',
          },
          {
            icon: Lightbulb,
            title: 'Inovație Continuă',
            description: 'Adoptăm cele mai noi tehnologii și tendințe pentru a oferi soluții de ultimă generație.',
          },
          {
            icon: Heart,
            title: 'Pasiune pentru Excelență',
            description: 'Ne dedicăm să depășim așteptările clienților în fiecare proiect pe care îl abordăm.',
          },
        ],
      },
      team: {
        title: 'Echipa Noastră',
        subtitle: 'Profesioniști dedicați cu experiență vastă în marketing digital',
        members: [
          {
            name: 'Ana Popescu',
            role: 'CEO & Co-fondator',
            description: '10+ ani experiență în marketing digital și strategii de brand.',
          },
          {
            name: 'Mihai Ionescu',
            role: 'Director Tehnic',
            description: 'Expert în SEO și dezvoltare web cu background în tehnologii AI.',
          },
          {
            name: 'Elena Radulescu',
            role: 'Social Media Manager',
            description: 'Specialist în social media marketing și creație de conținut.',
          },
          {
            name: 'David Chen',
            role: 'AI Marketing Specialist',
            description: 'Pionier în implementarea soluțiilor AI pentru marketing automation.',
          },
        ],
      },
      stats: {
        title: 'Realizările Noastre',
        items: [
          { number: '150+', label: 'Clienți Mulțumiți' },
          { number: '500+', label: 'Proiecte Finalizate' },
          { number: '300%', label: 'Creștere Medie ROI' },
          { number: '5+', label: 'Ani de Experiență' },
        ],
      },
      cta: {
        title: 'Să Lucrăm Împreună',
        subtitle: 'Gata să transformi afacerea ta? Contactează-ne și să discutăm despre viitorul brandului tău.',
        button: 'Începe Colaborarea',
      },
    },
    en: {
      title: 'About Digitalsense',
      subtitle: 'We are a passionate team of digital marketing specialists, dedicated to transforming brand visions into concrete results.',
      mission: {
        title: 'Our Mission',
        description: 'To empower businesses to thrive in the digital age through innovative marketing strategies, advanced technology, and a results-focused approach.',
      },
      vision: {
        title: 'Our Vision',
        description: 'To become the trusted partner for brands that want to transform their online presence and achieve sustainable growth in the digital landscape.',
      },
      values: {
        title: 'Our Values',
        items: [
          {
            icon: Target,
            title: 'Results-Oriented',
            description: 'Every strategy we develop is based on clear and measurable objectives.',
          },
          {
            icon: Lightbulb,
            title: 'Continuous Innovation',
            description: 'We adopt the latest technologies and trends to provide cutting-edge solutions.',
          },
          {
            icon: Heart,
            title: 'Passion for Excellence',
            description: 'We are dedicated to exceeding client expectations in every project we undertake.',
          },
        ],
      },
      team: {
        title: 'Our Team',
        subtitle: 'Dedicated professionals with vast experience in digital marketing',
        members: [
          {
            name: 'Ana Popescu',
            role: 'CEO & Co-founder',
            description: '10+ years of experience in digital marketing and brand strategies.',
          },
          {
            name: 'Mihai Ionescu',
            role: 'Technical Director',
            description: 'SEO expert and web development with AI technology background.',
          },
          {
            name: 'Elena Radulescu',
            role: 'Social Media Manager',
            description: 'Specialist in social media marketing and content creation.',
          },
          {
            name: 'David Chen',
            role: 'AI Marketing Specialist',
            description: 'Pioneer in implementing AI solutions for marketing automation.',
          },
        ],
      },
      stats: {
        title: 'Our Achievements',
        items: [
          { number: '150+', label: 'Happy Clients' },
          { number: '500+', label: 'Completed Projects' },
          { number: '300%', label: 'Average ROI Growth' },
          { number: '5+', label: 'Years of Experience' },
        ],
      },
      cta: {
        title: 'Let\'s Work Together',
        subtitle: 'Ready to transform your business? Contact us and let\'s discuss the future of your brand.',
        button: 'Start Collaboration',
      },
    },
  };

  const currentContent = content[language];

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

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="animate-fade-in-up">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-primary-foreground" />
                </div>
                <h2 className="text-xl font-semibold mb-4 text-foreground">
                  {currentContent.mission.title}
                </h2>
                <p className="text-foreground-secondary leading-relaxed">
                  {currentContent.mission.description}
                </p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mb-6">
                  <TrendingUp className="h-8 w-8 text-accent-foreground" />
                </div>
                <h2 className="text-xl font-semibold mb-4 text-foreground">
                  {currentContent.vision.title}
                </h2>
                <p className="text-foreground-secondary leading-relaxed">
                  {currentContent.vision.description}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background-secondary">
        <div className="container-wide">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="mb-4 text-balance text-2xl">{currentContent.values.title}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentContent.values.items.map((value, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-4 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-foreground-secondary leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container-wide">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="mb-4 text-balance text-2xl">{currentContent.stats.title}</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {currentContent.stats.items.map((stat, index) => (
              <div 
                key={index} 
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl font-bold text-primary mb-2">
                  <TestCounter value={parseInt(stat.number)} />
                </div>
                <p className="text-foreground-secondary font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted">
        <div className="container-wide">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="mb-4 text-balance text-2xl">{currentContent.team.title}</h2>
            <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
              {currentContent.team.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentContent.team.members.map((member, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-foreground-secondary leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;