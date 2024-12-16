import { FaqItem } from "./faq-item";
import { Accordion } from "../ui/accordion";

export function Faq() {
  return (
    <section className="container flex flex-col items-center gap-6 sm:gap-7 py-24">
        <div className="flex flex-col gap-3">
            <span className="text-primary font-bold uppercase text-center">
                Faq
            </span>
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-center">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-balance text-center text-lg text-muted-foreground max-w-lg ">
          For any other questions, please feel free to contact us.
          </p>
          <Accordion type= {"single"} collapsible={true} className="mt-6 w-full divide-y max-w-3xl ">
            <FaqItem question={"1. What is this platform about?"} answer={"This platform helps users learn programming languages (Python, Java, and C++) by selecting their skill level (Beginner, Intermediate, or Advanced). It provides interactive reading material, AI chatbot support for doubts, and AI-generated quizzes."} />
            <FaqItem question={"2. How do I get started?"} answer={"Sign up or log in, choose a programming language and your skill level, and start learning from the provided chapters."} />
            <FaqItem question={"3. Can the AI chatbot explain complex concepts?"} answer={"Yes, the chatbot is designed to break down complex topics into simpler terms. It can also provide examples or additional resources"} />
            <FaqItem question={"4. How are the quizzes generated?"} answer={"Quizzes are dynamically created by AI based on the chapters you’ve completed, ensuring they match your selected skill level."} />
            <FaqItem question={"5. Can I retake quizzes? "} answer={"Yes, you can retake quizzes to improve your understanding and score. but the questions will be different"} />
          </Accordion>

        
    </section>
  )
}
