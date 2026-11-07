"use client";

import { useState } from "react";

// Answers deliberately stay general: dates, fees, formats and certifications
// are confirmed through enquiry, so nothing specific is promised here.
const questions = [
  {
    q: "I'm new to tech. Can I join?",
    a: "Start from where you are. We shape the focus around your goals and experience.",
    shape: "rounded-[2.2rem_3rem_2.4rem_1.6rem]",
    tone: "border-navy/10 bg-white text-navy",
  },
  {
    q: "Can you train my whole team?",
    a: "Yes. Corporate workshops are shaped around your organisation's goals, roles and working context.",
    shape: "rounded-[3rem_1.8rem_3rem_2.2rem]",
    tone: "border-navy bg-navy text-white",
  },
  {
    q: "Can I enquire for my child?",
    a: "Parents and guardians are welcome to enquire for a young person. We'll talk through a suitable starting point.",
    shape: "rounded-[1.8rem_2.6rem_1.8rem_3rem]",
    tone: "border-turquoise/40 bg-turquoise/25 text-navy",
  },
  {
    q: "What will we learn?",
    a: "Web development, AI tools, digital productivity and business technology. The focus is agreed during enquiry.",
    shape: "rounded-[2.6rem_1.8rem_3rem_2rem]",
    tone: "border-navy/10 bg-white text-navy",
  },
  {
    q: "What about dates and fees?",
    a: "Programme details are confirmed during enquiry. Nothing is assumed in advance.",
    shape: "rounded-[2rem_3rem_1.8rem_2.8rem]",
    tone: "border-turquoise/40 bg-turquoise/25 text-navy",
  },
  {
    q: "Where do sessions happen?",
    a: "Format and delivery are discussed with you during enquiry, so they fit your situation.",
    shape: "rounded-[3rem_2rem_2.6rem_1.8rem]",
    tone: "border-navy bg-navy text-white",
  },
];

export default function QuestionBlobs() {
  const [hovered, setHovered] = useState(null);
  const [pinned, setPinned] = useState(null);

  return (
    <div className="grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {questions.map((item, i) => {
        const isOpen = hovered === i || pinned === i;
        return (
          <button
            aria-expanded={isOpen}
            className={`float-slow border p-6 text-left transition-colors duration-300 hover:[animation-play-state:paused] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-turquoise ${item.shape} ${item.tone}`}
            key={item.q}
            onBlur={() => setHovered(null)}
            onClick={() => setPinned(pinned === i ? null : i)}
            onFocus={() => setHovered(i)}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{ animationDelay: `${i * 0.6}s` }}
            type="button"
          >
            <span className="flex items-start justify-between gap-4">
              <span className="text-base font-semibold leading-snug">{item.q}</span>
              <span
                aria-hidden="true"
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-turquoise text-lg font-semibold leading-none text-navy transition duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </span>
            <span
              className={`grid transition-all duration-300 ${
                isOpen ? "mt-3 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0"
              }`}
            >
              <span className="overflow-hidden text-sm leading-6 opacity-85">{item.a}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
}