import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function AccordionDemo() {
    return (
      <Accordion type="single" collapsible className="w-full space-y-10 " >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-3xl  hover:text-primary focus:text-primary">What's Our Mission?</AccordionTrigger>
          <AccordionContent className="text-xl">
          To deliver innovative, scalable, and efficient software that drives business success and fosters technological growth.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-3xl hover:text-primary focus:text-primary">Why Choose Us?</AccordionTrigger>
          <AccordionContent className="text-xl">
          At Gamma Developers, we combine expertise with innovation to provide custom solutions that meet your business needs. Our commitment to quality and customer satisfaction sets us apart.
          </AccordionContent>
        </AccordionItem>
        
      </Accordion>
    )
  }
  