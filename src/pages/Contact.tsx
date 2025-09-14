import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

interface ContactProps {
  language: 'ro' | 'en';
}

const Contact = ({ language }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const content = {
    ro: {
      title: 'Contactează-ne',
      subtitle: 'Gata să transformăm viziunea brandului tău în realitate? Să discutăm despre proiectul tău.',
      form: {
        title: 'Trimite-ne un mesaj',
        name: 'Nume complet',
        email: 'Adresa de email',
        phone: 'Numărul de telefon',
        company: 'Compania (opțional)',
        message: 'Mesajul tău',
        submit: 'Trimite Mesajul',
        submitting: 'Se trimite...',
        success: 'Mesajul a fost trimis cu succes!',
        successDesc: 'Îți vom răspunde în cel mai scurt timp posibil.',
      },
      info: {
        title: 'Informații de Contact',
        address: {
          title: 'Adresa',
          value: 'Str. Exemplu nr. 123\nBucurești, România',
        },
        phone: {
          title: 'Telefon',
          value: '+40 721 234 567',
        },
        email: {
          title: 'Email',
          value: 'contact@digitalsense.ro',
        },
        hours: {
          title: 'Program de Lucru',
          value: 'Luni - Vineri: 9:00 - 18:00\nSâmbătă: 10:00 - 14:00',
        },
      },
      map: {
        title: 'Locația Noastră',
      },
    },
    en: {
      title: 'Contact Us',
      subtitle: 'Ready to transform your brand vision into reality? Let\'s discuss your project.',
      form: {
        title: 'Send us a message',
        name: 'Full name',
        email: 'Email address',
        phone: 'Phone number',
        company: 'Company (optional)',
        message: 'Your message',
        submit: 'Send Message',
        submitting: 'Sending...',
        success: 'Message sent successfully!',
        successDesc: 'We will get back to you as soon as possible.',
      },
      info: {
        title: 'Contact Information',
        address: {
          title: 'Address',
          value: '123 Example Street\nBucharest, Romania',
        },
        phone: {
          title: 'Phone',
          value: '+40 721 234 567',
        },
        email: {
          title: 'Email',
          value: 'contact@digitalsense.com',
        },
        hours: {
          title: 'Working Hours',
          value: 'Monday - Friday: 9:00 - 18:00\nSaturday: 10:00 - 14:00',
        },
      },
      map: {
        title: 'Our Location',
      },
    },
  };

  const currentContent = content[language];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: currentContent.form.success,
      description: currentContent.form.successDesc,
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
    });
    
    setIsSubmitting(false);
  };

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

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="animate-fade-in-up">
                <CardHeader>
                  <CardTitle className="text-2xl">{currentContent.form.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">{currentContent.form.name}</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="transition-all focus:shadow-focus"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">{currentContent.form.email}</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="transition-all focus:shadow-focus"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">{currentContent.form.phone}</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="transition-all focus:shadow-focus"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">{currentContent.form.company}</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="transition-all focus:shadow-focus"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">{currentContent.form.message}</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="transition-all focus:shadow-focus resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      variant="hero" 
                      size="lg" 
                      disabled={isSubmitting}
                      className="w-full md:w-auto"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
                          {currentContent.form.submitting}
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          {currentContent.form.submit}
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <CardHeader>
                  <CardTitle className="text-xl">{currentContent.info.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground mb-1">
                        {currentContent.info.address.title}
                      </h3>
                      <p className="text-foreground-secondary whitespace-pre-line">
                        {currentContent.info.address.value}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground mb-1">
                        {currentContent.info.phone.title}
                      </h3>
                      <a 
                        href={`tel:${currentContent.info.phone.value}`}
                        className="text-foreground-secondary hover:text-primary transition-colors"
                      >
                        {currentContent.info.phone.value}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground mb-1">
                        {currentContent.info.email.title}
                      </h3>
                      <a 
                        href={`mailto:${currentContent.info.email.value}`}
                        className="text-foreground-secondary hover:text-primary transition-colors"
                      >
                        {currentContent.info.email.value}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground mb-1">
                        {currentContent.info.hours.title}
                      </h3>
                      <p className="text-foreground-secondary whitespace-pre-line">
                        {currentContent.info.hours.value}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-background-secondary">
        <div className="container-wide">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl font-semibold mb-4 text-foreground">
              {currentContent.map.title}
            </h2>
          </div>
          
          <div className="animate-scale-in">
            <Card className="overflow-hidden">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="text-foreground-secondary">
                    Interactive map would be embedded here
                  </p>
                  <p className="text-sm text-foreground-secondary mt-2">
                    Bucharest, Romania
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;