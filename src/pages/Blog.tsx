import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface BlogProps {
  language: 'ro' | 'en';
}

const Blog = ({ language }: BlogProps) => {
  const content = {
    ro: {
      title: 'Blog',
      subtitle: 'Înțelepciune și perspective despre marketing digital',
      comingSoon: 'În Curând...',
      description: 'Ne pregătim să împărtășim cu tine cele mai noi tendințe, strategii și perspective din lumea marketingului digital. Blogul nostru va fi o resursă valoroasă pentru profesioniști și antreprenori.',
      whatToExpect: 'Ce Să Te Aștepți:',
      topics: [
        'Strategii avansate de Social Media Marketing',
        'Ghiduri complete pentru optimizarea SEO',
        'Implementarea AI în campaniile de marketing',
        'Case studies și studii de caz reale',
        'Tendințe și predicții pentru viitor',
        'Sfaturi practice pentru antreprenori',
      ],
      notify: 'Fii primul care află când lansăm',
      notifyDesc: 'Abonează-te la newsletter-ul nostru pentru a fi notificat când publicăm primul articol.',
      subscribe: 'Abonează-te',
    },
    en: {
      title: 'Blog',
      subtitle: 'Insights and perspectives on digital marketing',
      comingSoon: 'Coming Soon...',
      description: 'We are preparing to share with you the latest trends, strategies, and insights from the world of digital marketing. Our blog will be a valuable resource for professionals and entrepreneurs.',
      whatToExpect: 'What to Expect:',
      topics: [
        'Advanced Social Media Marketing strategies',
        'Complete guides for SEO optimization',
        'Implementing AI in marketing campaigns',
        'Real case studies and success stories',
        'Trends and predictions for the future',
        'Practical tips for entrepreneurs',
      ],
      notify: 'Be the first to know when we launch',
      notifyDesc: 'Subscribe to our newsletter to be notified when we publish our first article.',
      subscribe: 'Subscribe',
    },
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container-wide text-center">
          <h1 className="mb-6 animate-fade-in-up text-balance">
            {currentContent.title}
          </h1>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto leading-relaxed">
            {currentContent.subtitle}
          </p>
        </div>
      </section>

      {/* Coming Soon Content */}
      <section className="py-20">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <div className="w-24 h-24 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-8">
                <Calendar className="h-12 w-12 text-primary-foreground" />
              </div>
              <h2 className="text-4xl font-bold mb-6 gradient-text">
                {currentContent.comingSoon}
              </h2>
              <p className="text-lg text-foreground-secondary leading-relaxed max-w-2xl mx-auto">
                {currentContent.description}
              </p>
            </div>

            <Card className="animate-scale-in mb-12">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">
                  {currentContent.whatToExpect}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentContent.topics.map((topic, index) => (
                    <div 
                      key={index} 
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-background-secondary transition-colors"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-foreground-secondary">{topic}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="text-center animate-fade-in-up">
              <Card className="max-w-2xl mx-auto">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    {currentContent.notify}
                  </h3>
                  <p className="text-foreground-secondary mb-6 leading-relaxed">
                    {currentContent.notifyDesc}
                  </p>
                  <Button 
                    variant="hero" 
                    size="lg"
                    className="group"
                  >
                    {currentContent.subscribe}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Preview Cards */}
      <section className="py-20 bg-background-secondary">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card 
                key={i} 
                className="opacity-50 hover:opacity-70 transition-opacity animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                    <Calendar className="h-8 w-8 text-foreground-secondary" />
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-muted rounded w-3/4" />
                    <div className="h-3 bg-muted rounded w-full" />
                    <div className="h-3 bg-muted rounded w-2/3" />
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                    <div className="h-3 bg-muted rounded w-20" />
                    <div className="h-3 bg-muted rounded w-16" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;