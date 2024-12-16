import { FeatureHoverCard } from "./feature-hover-card";

export function FeatureSection() {
  return (
    <section className="container flex flex-col items-center gap-6 py-12 sm:gap-4">
      <div className="flex flex-col gap-3">
        <span className="font-bold uppercase text-primary text-center">
          Features
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl font-semibold tracking-tight text-center text-balance">
          Lets make coding simple, fun, and rewarding for you.
        </h2>
      </div>
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-3">
        <FeatureHoverCard iconName="Smartphone" des="codelearnhub is also optimised for mobile devices " title="Mobile Compaitable" />
        <FeatureHoverCard iconName="Gauge" des="Choose your skill level (Beginner, Intermediate, Advanced)." title="Personalized Learning Paths" />
        <FeatureHoverCard iconName="BookOpen" des="Comprehensive chapters to build a solid foundation." title="Interactive Reading" />
        <FeatureHoverCard iconName="Brain" des=" Get instant answers to your questions while learning." title="AI Chatbot Support" />
        <FeatureHoverCard iconName="CircleHelp" des="Test your knowledge with personalized quizzes and track your progress." title="AI-Generated Quizzes" />
        <FeatureHoverCard iconName="Ellipsis" des="Visual analytics of your learning journey" title="Progress Tracking" />
      </div>
    </section>
  );
}
