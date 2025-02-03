"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
  {
    question: "How long does the average project take?",
    answer: 'The timeline for each project varies depending on its complexity and scope. For example, a simple website might take 2-4 weeks, while a custom mobile app or SaaS platform could take 8-12 weeks or more. We provide a detailed project timeline during the initial consultation to ensure transparency.'
  },
  {
    question: "Do you offer post-launch support?",
    answer:
      "Absolutely! While we leverage AI tools to enhance efficiency, all content is reviewed and refined by our expert team to ensure accuracy, relevance, and alignment with your brand voice. Quality and authenticity are our top priorities.",
  },
  {
    question: "How do you price your services?",
    answer:
      "Our pricing is tailored to the specific needs of your project. Factors like project scope, complexity, and timeline influence the cost. During our initial consultation, we provide a detailed quote with no hidden fees.",
  },
  {
    question: "Can you handle large-scale projects?",
    answer: `Definitely! We specialize in managing large-scale projects, from enterprise-level SaaS platforms to comprehensive branding campaigns. Our team has the expertise and resources to deliver high-quality results, no matter the size of the project.`,
  },

]

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <div
      className="bg-gradient-to-r from-red-900 via-purple-800 to-blue-900 py-20 px-10 text-white"
      style={{
        backgroundImage: 'linear-gradient(to right, #7f1d1d, #6b21a8, #1e3a8a), url("/assets/bg.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="lg:text-3xl text-2xl font-medium mb-4">Frequently Asked Questions</h2>
        <h3 className="lg:text-5xl text-3xl font-medium">Your Questions, Answered</h3>
        <p className="mt-5 text-gray-300">
          At <span className="font-bold text-white"> Kode Affinity</span>,we believe in transparency and clarity. Our FAQ section is designed to address your most common queries about our services, empowering you to make informed decisions for your business. Explore our expertise, and let us help you find the right solutions to drive your business forward efficiently.

        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-400 pb-4 cursor-pointer hover:text-gray-300 transition duration-300"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h4 className="text-xl">{faq.question}</h4>
              <span className="text-xl font-bold">{openFAQ === index ? "-" : "+"}</span>
            </div>

            <AnimatePresence>
              {openFAQ === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden mt-2"
                >
                  <p className="text-sm transition duration-300 whitespace-pre-line">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQSection

