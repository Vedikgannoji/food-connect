
import { useState } from 'react';
import { ContactInfo as ContactInfoType } from '@/lib/types';
import AnimatedCard from '@/components/ui/AnimatedCard';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Copy, Check } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface ContactInfoProps {
  contact: ContactInfoType;
  index: number;
}

export default function ContactInfo({ contact, index }: ContactInfoProps) {
  const [copied, setCopied] = useState<string | null>(null);
  const { toast } = useToast();

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(type);
      
      toast({
        title: "Copied to clipboard",
        description: `${text} has been copied to your clipboard.`,
      });
      
      setTimeout(() => setCopied(null), 2000);
    });
  };

  // Determine icon based on the type of contact
  const getIcon = () => {
    switch (contact.type) {
      case 'shelter':
        return '🏠';
      case 'helpline':
        return '☎️';
      case 'vet':
        return '🩺';
      default:
        return '📍';
    }
  };

  return (
    <AnimatedCard delay={index * 100} className="h-full">
      <div className="p-6 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <div className="text-3xl">{getIcon()}</div>
          <div className="text-xs px-2 py-1 rounded-full bg-muted">
            {contact.type === 'shelter' ? 'Animal Shelter' : 
             contact.type === 'helpline' ? 'Helpline' : 'Veterinary Clinic'}
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-3">{contact.name}</h3>
        
        <div className="space-y-3 mb-4 flex-grow">
          <div className="flex items-start">
            <MapPin size={16} className="mr-2 mt-1 text-muted-foreground" />
            <span className="text-muted-foreground">{contact.address}</span>
          </div>
          
          <div className="flex items-center group">
            <Phone size={16} className="mr-2 text-muted-foreground" />
            <span className="text-muted-foreground">{contact.phone}</span>
            <Button
              variant="ghost"
              size="icon"
              className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => copyToClipboard(contact.phone, 'phone')}
            >
              {copied === 'phone' ? (
                <Check size={14} className="text-secondary" />
              ) : (
                <Copy size={14} />
              )}
            </Button>
          </div>
          
          <div className="flex items-center group">
            <Mail size={16} className="mr-2 text-muted-foreground" />
            <span className="text-muted-foreground">{contact.email}</span>
            <Button
              variant="ghost"
              size="icon"
              className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => copyToClipboard(contact.email, 'email')}
            >
              {copied === 'email' ? (
                <Check size={14} className="text-secondary" />
              ) : (
                <Copy size={14} />
              )}
            </Button>
          </div>
        </div>
        
        <div className="mt-auto pt-4 border-t border-border">
          <Button variant="outline" className="w-full rounded-full" size="sm">
            <Phone size={14} className="mr-2" /> Call Now
          </Button>
        </div>
      </div>
    </AnimatedCard>
  );
}
