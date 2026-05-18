interface TimelineItem {
  id: string;
  date: string;
  title: string;
  subtitle?: string;
  description?: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="wc-timeline">
      {items.map((item) => (
        <div key={item.id} className="wc-timeline__item">
          <div className="wc-timeline__card">
            <p className="wc-body-xs">{item.date}</p>
            <p className="wc-heading-sm">{item.title}</p>
            {item.subtitle ? (
              <p className="wc-body-sm wc-text-muted">{item.subtitle}</p>
            ) : null}
            {item.description ? (
              <p className="wc-body-sm wc-margin-top-sm">{item.description}</p>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}

