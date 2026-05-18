import { TestimonialQuote } from "@/types/content";

interface TestimonialGridProps {
  quotes: TestimonialQuote[];
}

export function TestimonialGrid({ quotes }: TestimonialGridProps) {
  return (
    <div className="wc-testimonial-grid">
      {quotes.map((quote) => (
        <div key={quote.id} className="wc-testimonial">
          <p className="wc-body-sm">{quote.quote}</p>
          <p className="wc-body-xs wc-margin-top-sm">{quote.promotion}</p>
          <p className="wc-body-xs wc-text-muted">{quote.role}</p>
        </div>
      ))}
    </div>
  );
}

