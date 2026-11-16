import { ArrowRight, CalendarCheck, MessageCircle, Phone, Wallet, type LucideIcon } from "lucide-react";

export type CtaAction = "book" | "inspect" | "enquire" | "call" | "plan";

const PHONE_TEL = "tel:+2348029823593";

export function whatsapp(message: string) {
  return `https://wa.me/2348029823593?text=${encodeURIComponent(message)}`;
}

type CtaConfig = { label: string; short?: string; href: string; icon: LucideIcon };

function ctaConfig(subject: string): Record<CtaAction, CtaConfig> {
  return {
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
      // Shorter on phones so it fits half the screen width on one line.
      short: "WhatsApp us",
      href: whatsapp(`Hello Clobek Heritage Place, I'm interested in the ${subject}. Please send me more details.`),
      icon: MessageCircle,
    },
    call: { label: "Call now", href: PHONE_TEL, icon: Phone },
    plan: { label: "Payment plan", href: "#payment-plan", icon: Wallet },
  };
}

// The standard set of buttons used in every section, in this order.
const STANDARD: CtaAction[] = ["book", "call", "enquire", "plan"];

// The calls to action used across the site. The first is shown as the primary
// button. On phones they sit two per row.
export default function CtaButtons({
  actions = STANDARD,
  subject = "Clobek Heritage Place",
  tone = "light",
  className = "",
  // Set false when a standalone primary button sits nearby (e.g. BookVisitButton).
  highlightFirst = true,
}: {
  actions?: CtaAction[];
  subject?: string;
  tone?: "light" | "dark";
  className?: string;
  highlightFirst?: boolean;
}) {
  const config = ctaConfig(subject);

  const primary = "btn-solid bg-brand text-white shadow-lg shadow-brand/25";
  const secondary =
    tone === "dark" ? "btn-line border border-white/35 text-white" : "btn-line border border-ink/20 text-ink";

  return (
    <div
      className={`grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap sm:gap-3 max-sm:[&>a]:justify-center max-sm:[&>a]:gap-1.5 max-sm:[&>a]:px-2 max-sm:[&>a]:text-[13px] ${className}`}
    >
      {actions.map((action, i) => {
        const { label, short, href, icon: Icon } = config[action];
        const external = action !== "call" && action !== "plan";
        return (
          <a
            key={action}
            href={href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className={`btn-fx inline-flex min-h-11 items-center gap-2 whitespace-nowrap rounded-full px-5 text-sm font-semibold ${
              i === 0 && highlightFirst ? `${primary} font-bold` : secondary
            }`}
          >
            {short ? (
              <>
                <span className="sm:hidden">{short}</span>
                <span className="hidden sm:inline">{label}</span>
              </>
            ) : (
              label
            )}
            <Icon className="h-4 w-4" />
          </a>
        );
      })}
    </div>
  );
}

