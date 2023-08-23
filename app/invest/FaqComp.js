"use client";
import { useState } from "react";

const FaqComp = () => {
  const faqs = [
    {
      question: "What happens if a project does not reach its funding goal?",
      answer:
        "Good after green Great seed fish whose be first. She'd. Seasons over said a void. In the creeping upon. Give. Open. Life appear own female seas and together signs let sixth you're won't bring fill creepeth replenish. Itself his moved god together thing created spirit air void were stars there.",
    },
    {
      question:
        "What is the minimum investment amount for participating in a project?",
      answer:
        "Good after green Great seed fish whose be first. She'd. Seasons over said a void. In the creeping upon. Give. Open. Life appear own female seas and together signs let sixth you're won't bring fill creepeth replenish. Itself his moved god together thing created spirit air void were stars there.",
    },
    {
      question: "Can I invest in multiple projects simultaneously?",
      answer:
        "Yes, you can invest in multiple projects simultaneously. Diversifying your investment portfolio across different projects allows you to spread risk and maximize potential returns. Our platform supports investing in multiple projects, giving you the flexibility to choose from various sectors and initiatives within Enugu",
    },
    {
      question: "Can I invest in multiple projects simultaneously?",
      answer:
        "Yes, you can invest in multiple projects simultaneously. Diversifying your investment portfolio across different projects allows you to spread risk and maximize potential returns. Our platform supports investing in multiple projects, giving you the flexibility to choose from various sectors and initiatives within Enugu",
    },
    {
      question: "Can I invest in multiple projects simultaneously?",
      answer:
        "Yes, you can invest in multiple projects simultaneously. Diversifying your investment portfolio across different projects allows you to spread risk and maximize potential returns. Our platform supports investing in multiple projects, giving you the flexibility to choose from various sectors and initiatives within Enugu",
    },
    // Add more FAQs as needed
  ];
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="mt-10">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border rounded mb-2 overflow-hidden"
          style={{ backgroundColor: "#ffffff" }}
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full text-left p-4 focus:outline-none"
          >
            <span className="text-lg font-semibold">{faq.question}</span>
            <svg
              className={`ml-auto h-6 w-6 transform ${
                activeIndex === index ? "rotate-0" : "-rotate-90"
              } transition-transform duration-300`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {activeIndex === index && (
            <div className="p-4">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqComp;
