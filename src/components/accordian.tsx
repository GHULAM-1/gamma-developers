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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit officiis veniam ab aliquid, optio natus debitis quasi voluptas ut magnam non laudantium magni maxime alias.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-3xl hover:text-primary focus:text-primary">Why Choose Us?</AccordionTrigger>
          <AccordionContent className="text-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi repellendus aspernatur aliquam alias fuga, hic voluptatum, unde, sequi delectus quis repellat ut. Natus, impedit voluptatibus.
          </AccordionContent>
        </AccordionItem>
        
      </Accordion>
    )
  }
  