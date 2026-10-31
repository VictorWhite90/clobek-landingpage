import { ArrowRight, CalendarCheck, MessageCircle, Phone, Wallet } from "lucide-react";

export type CtaAction = "book" | "inspect" | "enquire" | "call" | "plan";

const PHONE_TEL = "tel:+2348029823593";

function whatsapp(message: string) {
  return `https://wa.me/2348029823593?text=${encodeURIComponent(message)}`;
}

// The four calls to action used across the site. Each section picks the ones
// that fit its content; the first is shown as the primary button.
export default function CtaButtons({
  actions,
  subject = "Clobek Heritage Place",
  tone = "light",
  className = "",
}: {
  actions: CtaAction[];
  subject?: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  const config = {
    book: {
      label: "Book a site visit",
      href: whatsapp(`Hello Clobek Heritage Place, I'd like to book a site visit to see the ${subject}.`),
      icon: ArrowRight,
    },
    inspect: {
      label: "Book an inspection",
      href: whatsapp(`Hello Clobek Heritage Place, I'd like to book an inspection of the ${subject}.`),
      icon: CalendarCheck,
    },
    enquire: {
      label: "Enquire on WhatsApp",
      href: whatsapp(`Hello Clobek Heritage Place, I'm interested in the ${subject}. Please send me more details.`),
      icon: MessageCircle,
    },
    call: { label: "Call now", href: PHONE_TEL, icon: Phone },
    plan: { label: "Payment plan", href: "#payment-plan", icon: Wallet },
  } as const;

  const primary = "btn-solid bg-brand text-white shadow-lg shadow-brand/25";
  const secondary =
    tone === "dark" ? "btn-line border border-white/35 text-white" : "btn-line border border-ink/20 text-ink";

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {actions.map((action, i) => {
        const { label, href, icon: Icon } = config[action];
        const external = action !== "call" && action !== "plan";
        return (
          <a
            key={action}
            href={href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className={`btn-fx inline-flex min-h-11 items-center gap-2 rounded-full px-5 text-sm font-semibold ${
              i === 0 ? `${primary} font-bold` : secondary
            }`}
          >
            {label}
            <Icon className="h-4 w-4" />
          </a>
        );
      })}
    </div>
  );
}
