import { CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface PixelCardProps {
  variant?: 'yellow' | 'green' | 'purple';
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  footerText?: string;
  className?: string;
}

export default function PixelCard({
  variant = 'yellow',
  title,
  description,
  imageSrc,
  imageAlt,
  footerText,
  className = ''
}: PixelCardProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'yellow':
        return {
          iconBg: 'bg-gradient-to-br from-brand-gold to-brand-primary-gold',
          iconBgHover: 'group-hover:from-brand-light-gold group-hover:to-brand-gold',
          footerColor: 'text-brand-primary-gold',
          iconColor: 'text-brand-primary-gold',
          borderColor: 'border-brand-light-gold/30',
          borderHover: 'group-hover:border-brand-gold/50',
          shadowColor: 'shadow-brand-primary-gold/20',
          shadowHover: 'group-hover:shadow-brand-gold/30'
        };
      case 'green':
        return {
          iconBg: 'bg-gradient-to-br from-brand-olive-green to-brand-lime-green',
          iconBgHover: 'group-hover:from-brand-lime-green group-hover:to-brand-olive-green',
          footerColor: 'text-brand-olive-green',
          iconColor: 'text-brand-olive-green',
          borderColor: 'border-brand-olive-green/30',
          borderHover: 'group-hover:border-brand-lime-green/50',
          shadowColor: 'shadow-brand-olive-green/20',
          shadowHover: 'group-hover:shadow-brand-olive-green/30'
        };
      case 'purple':
        return {
          iconBg: 'bg-gradient-to-br from-brand-medium-purple to-brand-accent-purple',
          iconBgHover: 'group-hover:from-brand-accent-purple group-hover:to-brand-medium-purple',
          footerColor: 'text-brand-accent-purple',
          iconColor: 'text-brand-accent-purple',
          borderColor: 'border-brand-medium-purple/30',
          borderHover: 'group-hover:border-brand-accent-purple/50',
          shadowColor: 'shadow-brand-accent-purple/20',
          shadowHover: 'group-hover:shadow-brand-accent-purple/30'
        };
      default:
        return {
          iconBg: 'bg-gradient-to-br from-brand-gold to-brand-primary-gold',
          iconBgHover: 'group-hover:from-brand-light-gold group-hover:to-brand-gold',
          footerColor: 'text-brand-primary-gold',
          iconColor: 'text-brand-primary-gold',
          borderColor: 'border-brand-light-gold/30',
          borderHover: 'group-hover:border-brand-gold/50',
          shadowColor: 'shadow-brand-primary-gold/20',
          shadowHover: 'group-hover:shadow-brand-gold/30'
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <Card className={`
      group relative overflow-hidden
      transition-all duration-500 ease-out
      hover:-translate-y-3 hover:scale-105
      border-2 ${styles.borderColor} ${styles.borderHover}
      shadow-lg ${styles.shadowColor} ${styles.shadowHover}
      hover:shadow-2xl
      ${className}
    `}>
      {/* Animated background gradient */}
      <div className={`
        absolute inset-0 opacity-0 group-hover:opacity-10
        transition-opacity duration-500
        ${styles.iconBg}
      `} />
      
      {/* Pixelated border effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute top-0 left-0 w-4 h-4 bg-white/20 transform rotate-45 -translate-x-2 -translate-y-2" />
        <div className="absolute top-0 right-0 w-4 h-4 bg-white/20 transform rotate-45 translate-x-2 -translate-y-2" />
        <div className="absolute bottom-0 left-0 w-4 h-4 bg-white/20 transform rotate-45 -translate-x-2 translate-y-2" />
        <div className="absolute bottom-0 right-0 w-4 h-4 bg-white/20 transform rotate-45 translate-x-2 translate-y-2" />
      </div>

      <CardContent className="p-8 text-center relative z-10">
        <div className={`
          w-20 h-20 mx-auto mb-6 rounded-2xl overflow-hidden
          ${styles.iconBg} ${styles.iconBgHover}
          flex items-center justify-center
          transition-all duration-500 ease-out
          group-hover:scale-110 group-hover:rotate-3
          shadow-lg group-hover:shadow-xl
        `}>
          {imageSrc ? (
            <img 
              src={imageSrc} 
              alt={imageAlt || title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="text-white text-2xl transition-transform duration-500 group-hover:scale-110">
              <CheckCircle className="w-8 h-8" />
            </div>
          )}
        </div>
        
        <h3 className="text-xl font-semibold mb-4 text-foreground transition-colors duration-300 group-hover:text-foreground">
          {title}
        </h3>
        
        <p className="text-foreground-secondary leading-relaxed mb-6 transition-colors duration-300 group-hover:text-foreground/80">
          {description}
        </p>
        
        {footerText && (
          <div className="flex items-center justify-center space-x-2 transition-all duration-300 group-hover:scale-105">
            <CheckCircle className={`h-4 w-4 ${styles.iconColor} transition-colors duration-300 group-hover:scale-110`} />
            <span className={`text-sm font-medium ${styles.footerColor} transition-colors duration-300`}>
              {footerText}
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
