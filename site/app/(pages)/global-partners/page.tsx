import GlobalPartnersHero from "@/components/sections/global-partners-hero";
import PartnerCatalog from "@/components/sections/partner-catalog";
import PartnershipStrengths from "@/components/sections/partnership-strengths";
import PartnerFAQ from "@/components/sections/partner-faq";
import { CTASection } from "@/components/sections/cta-section";
import { CONTACT_INFO } from "@/lib/constants";

export default function GlobalPartnersPage() {
    return (
        <main>
            <GlobalPartnersHero />
            <PartnerCatalog />
            <PartnershipStrengths />
            <PartnerFAQ />
            {/* <CTASection /> */}
            <CTASection
                title="Become Our Partner"
                subtitle="Scaling your supply chain starts with the right alliance. Let's discuss your next collection."
                primaryButton={{
                    label: "Contact Us",
                    href: `mailto:${CONTACT_INFO.email}`,
                }}
                backgroundImage="https://i.postimg.cc/3NcsYzxX/multi-colored-garments-hanging-coathangers-boutique-store-generated-by-ai.jpg"
            />
        </main>
    );
}