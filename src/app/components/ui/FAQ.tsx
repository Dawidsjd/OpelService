import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "./Accordion"
  
  export default function BlackFAQ() {
    return (
      <div className=" relative min-h-screen flex items-center justify-center bg-black p-4">
        <div className="shadow-dark w-full absolute top-0 left-0"></div>
        <div className="w-full max-w-3xl">
        <h2 className="relative z-10 text-lg md:text-7xl w-full bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold pb-10">
            Frequently Asked Questions
        </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border-b border-gray-800">
              <AccordionTrigger className="text-white hover:text-gray-300 transition-colors">
                What is the return policy?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Our return policy allows you to return items within 30 days of purchase for a full refund, 
                provided the items are in their original condition.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-b border-gray-800">
              <AccordionTrigger className="text-white hover:text-gray-300 transition-colors">
                How long does shipping take?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Shipping times vary depending on your location. Typically, domestic orders are delivered 
                within 3-5 business days, while international orders may take 7-14 business days.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-b border-gray-800">
              <AccordionTrigger className="text-white hover:text-gray-300 transition-colors">
                Do you offer international shipping?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Yes, we offer international shipping to most countries. Shipping costs and delivery times 
                may vary depending on the destination.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-b border-gray-800">
              <AccordionTrigger className="text-white hover:text-gray-300 transition-colors">
                How can I track my order?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Once your order is shipped, you will receive a confirmation email with a tracking number. 
                You can use this number on our website or the carrier's website to track your package.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border-b border-gray-800">
              <AccordionTrigger className="text-white hover:text-gray-300 transition-colors">
                What payment methods do you accept?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, 
                and Apple Pay for online purchases.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="shadow-dark w-full absolute bottom-0 left-0"></div>
      </div>
    )
  }