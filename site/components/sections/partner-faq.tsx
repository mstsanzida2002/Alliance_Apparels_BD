"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "What types of garments do you manufacture?",
        answer: "We specialize in a wide range of garments including knitwear, woven items, denim, and specialized sportswear, collaborating with top-tier manufacturers in Bangladesh.",
    },
    {
        question: "What is your minimum order quantity (MOQ)?",
        answer: "Our MOQs vary depending on the product type and complexity. Typically, it ranges from 500 to 1000 pieces per style.",
    },
    {
        question: "How long does production typically take?",
        answer: "Standard production lead time is 60-90 days after PP sample approval, depending on fabric sourcing and order volume.",
    },
    {
        question: "Do you offer sample production before bulk orders?",
        answer: "Yes, we provide proto samples and size sets to ensure the design and fit meet your requirements before proceeding to bulk production.",
    },
    {
        question: "What quality control measures do you have in place?",
        answer: "We have an independent QC team that conducts inline, mid-line, and final inspections following AQL 2.5 standards.",
    },
    {
        question: "Are your facilities certified for ethical and sustainable production?",
        answer: "Absolutely. All our partner factories are BSCI, SEDEX, or WRAP certified, ensuring high ethical and environmental standards.",
    },
    {
        question: "How do you handle shipping and logistics?",
        answer: "We offer various shipping terms including FOB, CIF, and DDP, and we coordinate closely with freight forwarders for timely delivery.",
    },
    {
        question: "What payment terms do you offer?",
        answer: "Commonly we work with 100% L/C at sight or T/T payments, depending on the partnership length and volume.",
    },
];

export default function PartnerFAQ() {
    return (
        <section className="py-20 bg-[#F3F4F6]">
            <div className="max-w-4xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-slate-600 text-lg">
                        Everything you need to know about partnering with Alliance Sourcing BD
                    </p>
                </div>

                {/* FAQ Accordion */}
                <Accordion type="single" collapsible className="space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className="bg-white border-none rounded-lg px-6 shadow-sm overflow-hidden"
                        >
                            <AccordionTrigger className="text-left font-bold text-slate-800 hover:no-underline py-5 text-lg">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-slate-600 text-base pb-5 leading-relaxed">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}