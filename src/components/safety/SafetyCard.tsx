
import { SafetyTip } from '@/lib/types';
import AnimatedCard from '@/components/ui/AnimatedCard';

interface SafetyCardProps {
  tip: SafetyTip;
  index: number;
}

export default function SafetyCard({ tip, index }: SafetyCardProps) {
  return (
    <AnimatedCard delay={index * 100} className="h-full">
      <div className="p-6 flex flex-col h-full">
        <div className="mb-4 text-4xl">{tip.icon}</div>
        <h3 className="text-xl font-semibold mb-3">{tip.title}</h3>
        <p className="text-muted-foreground">{tip.description}</p>
      </div>
    </AnimatedCard>
  );
}
