import { Settings } from "lucide-react";

export function Hero() {
  return (
    <section className="container flex flex-col items-center gap-8 pb-25 pt-20 sm:gap-10 relative">
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 animate-spin-slow">
        <Settings size={40} className="text-black" />
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 animate-spin-slow">
        <Settings size={40} className="text-black" />
      </div>

      <div className="flex flex-col items-center gap-4">
        <h2 className="font-heading text-3xl sm:text-4xl font-semibold tracking-tight text-center text-balance">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 via-purple-500 to-red-500 bg-clip-text text-transparent">
            CodeLearnHub
          </span>{" "}
          - Your personalized journey to mastering programming starts here!
        </h2>
        <p className="max-w-lg text-lg sm:text-xl text-center text-muted-foreground">
          Challenge yourself with AI-generated quizzes and track your progress effortlessly.
        </p>
      </div>

      <div className="flex flex-col items-center gap-2">
        <h2 className="font-heading text-3xl sm:text-4xl font-semibold tracking-tight text-center">
          Learn to Code in
          <span
            className="ml-2 before:animate-rotate-text before:content-[attr(data-content)] bg-clip-text text-transparent"
            data-content="Python"
          ></span>
        </h2>
      </div>
    </section>
  );
}
