"use client";

import { Accordion, AccordionItem } from "@heroui/accordion";
import { FiChevronDown } from "react-icons/fi";

export const FAQsSection = () => {
  const faqs = [
    {
      question: "How can AI automation help my business?",
      answer:
        "AI automation streamlines repetitive tasks, reduces human error, and frees up your team to focus on high-value work. It helps improve efficiency, cut operational costs, and scale your business faster by automating workflows like data entry, customer support, reporting, and more.",
    },
    {
      question: "Is AI automation difficult to integrate?",
      answer:
        "Not at all! We handle the entire integration process for you. Our team assesses your existing systems, designs custom AI solutions, and seamlessly integrates them into your workflow with minimal disruption. We provide training and ongoing support to ensure smooth adoption.",
    },
    {
      question: "What industries can benefit from AI automation?",
      answer:
        "AI automation benefits virtually every industry—from e-commerce and healthcare to finance, real estate, manufacturing, and professional services. Any business with repetitive tasks, data processing needs, or customer interaction can leverage AI to work smarter and more efficiently.",
    },
    {
      question: "Do I need technical knowledge to use AI automation?",
      answer:
        "No technical expertise is required! Our AI solutions are designed to be user-friendly and intuitive. We provide full training, documentation, and support to ensure your team can use the tools confidently. Plus, our customer success team is always available to help.",
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "We offer comprehensive support including email and chat assistance, priority support for Professional plans, and 24/7 VIP support for Enterprise customers. Our team provides onboarding, training, troubleshooting, and continuous optimization to ensure your AI systems perform at their best.",
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-purple-600 text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
            FAQs
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-semibold text-white mb-6">
            We've Got the Answers
            <br />
            You're Looking For
          </h2>
          <p className="text-md md:text-[20px] text-gray-400 mb-10 max-w-3xl mx-auto">
            Quick answers to your AI automation questions.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion
          variant="splitted"
          className="gap-4"
          itemClasses={{
            base: "bg-zinc-900/50 border border-zinc-800 rounded-xl px-6  hover:border-zinc-700 transition-colors",
            title: "text-white font-semibold text-base md:text-lg",
            trigger: "py-6",
            content: "text-gray-400 text-base leading-relaxed pb-6",
            indicator: "text-white",
          }}
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              aria-label={faq.question}
              title={faq.question}
              indicator={<FiChevronDown className="w-5 h-5" />}
            >
              {faq.answer}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
