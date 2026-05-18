import { SpotlightDetail } from "@/types/content";
import { Pill } from "@/components/ui/pill";

interface SpotlightCardProps {
  spotlight: SpotlightDetail;
}

export function SpotlightCard({ spotlight }: SpotlightCardProps) {
  return (
    <div className="wc-card">
      <div className="wc-body-xs">{spotlight.eyebrow}</div>
      <div className="wc-section wc-margin-top-lg">
        <div>
          <p className="wc-heading-md">{spotlight.name}</p>
          <p className="wc-body-sm">{spotlight.subtitle}</p>
        </div>
        <div className="wc-card--pill-group">
          {spotlight.tags.map((tag) => (
            <Pill key={tag}>{tag}</Pill>
          ))}
        </div>
        <p className="wc-body-sm">{spotlight.testimonial}</p>
        <div className="wc-body-xs wc-text-muted">{spotlight.testimonialSource}</div>
        <div className="wc-card-grid">
          {spotlight.upcoming.map((slot) => (
            <div key={slot.id} className="wc-card">
              <span className="wc-body-xs wc-text-muted">{slot.label}</span>
              <p className="wc-heading-sm">{slot.title}</p>
              {slot.meta ? (
                <p className="wc-body-sm wc-text-muted wc-margin-top-sm">
                  {slot.meta}
                </p>
              ) : null}
              {slot.description ? (
                <p className="wc-body-sm wc-text-muted wc-margin-top-sm">
                  {slot.description}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
