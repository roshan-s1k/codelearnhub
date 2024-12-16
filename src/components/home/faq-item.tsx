import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function FaqItem({question,answer}:{question:string,answer:string}) {
  return (
    <AccordionItem value ={question} asChild={false} className="border-b-0">
            <AccordionTrigger className="py-6 text-left text-lg hover:no-underline" asChild={false}>
                {question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-lg">
                {answer}
            </AccordionContent>
    </AccordionItem>
  )
}
