import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const faqs = [
  {
    question: 'What is artificial intelligence (AI)?',
    answer:
      'Artificial intelligence refers to systems that simulate human intelligence to perform tasks like learning, reasoning, and problem-solving.',
  },
  {
    question: 'How does AI improve business efficiency?',
    answer:
      'AI automates repetitive tasks, improves decision-making with data insights, and enhances customer experiences.',
    featured: true,
  },
  {
    question: 'How long does AI implementation take?',
    answer:
      'It depends on complexity, but typically ranges from a few weeks to several months.',
  },
  {
    question: 'What industries can benefit from AI?',
    answer:
      'Healthcare, finance, retail, manufacturing, and more can benefit from AI solutions.',
  },
  {
    question: 'What are the costs of AI solutions?',
    answer: 'Costs vary depending on scope, tools, and customization requirements.',
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(1);
  const contentRefs = useRef([]);

  useEffect(() => {
    contentRefs.current.forEach((el, i) => {
      if (!el) return;

      if (i === activeIndex) {
        gsap.to(el, {
          height: 'auto',
          opacity: 1,
          duration: 0.4,
          ease: 'power2.out',
        });
      } else {
        gsap.to(el, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: 'power2.inOut',
        });
      }
    });
  }, [activeIndex]);

  return (
    <div className="bg-gray-100 py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left Side */}
        <div>
          <p className="text-sm text-gray-500 mb-4">
            Don’t found anything yet. Feel free to ask anything.{' '}
            <span className="underline cursor-pointer">Let’s Talk</span>
          </p>

          <img
            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12"
            alt="team"
            className="rounded-xl w-full object-cover"
          />
        </div>

        {/* Right Side */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            Have more questions? <br /> We’ve answers.
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => setActiveIndex(index === activeIndex ? null : index)}
                  className="w-full flex justify-between items-center p-5 text-left">
                  <span className="font-medium">{faq.question}</span>
                  <span className="text-xl">{index === activeIndex ? '−' : '+'}</span>
                </button>

                <div
                  ref={el => (contentRefs.current[index] = el)}
                  className="px-5 overflow-hidden h-0 opacity-0">
                  <div className="pb-5 text-gray-600">
                    {faq.featured ? (
                      <div className="flex gap-4 items-start">
                        <img
                          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                          className="w-32 h-20 object-cover rounded-md"
                        />
                        <p>{faq.answer}</p>
                      </div>
                    ) : (
                      <p>{faq.answer}</p>
                    )}

                    {faq.featured && (
                      <button className="mt-4 flex items-center gap-2 text-sm font-medium">
                        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white">
                          +
                        </span>
                        GET IN TOUCH
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
