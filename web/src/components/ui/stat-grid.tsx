interface StatItem {
  id: string;
  value: string;
  label: string;
}

interface StatGridProps {
  items: StatItem[];
}

export function StatGrid({ items }: StatGridProps) {
  return (
    <div className="wc-card-grid wc-card-grid--three">
      {items.map((item) => (
        <div key={item.id} className="wc-stat">
          <p className="wc-stat__value">{item.value}</p>
          <p className="wc-stat__label">{item.label}</p>
        </div>
      ))}
    </div>
  );
}

