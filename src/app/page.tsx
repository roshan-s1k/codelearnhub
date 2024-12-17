import { CtaSection } from "@/components/home/cta-section";
import { Faq } from "@/components/home/faq";
import { FeatureSection } from "@/components/home/features-section";
import {Footer} from "@/components/footer";
import { Header} from "@/components/home/header";
import { Hero } from "@/components/home/hero";

export default function HomePage() {
  return (
    < div className=" flex flex-col justify-center pr-8 pl-8 pb-8 bg-gradient-to-r from-rose-100 to-teal-100">
      <Header />
      <Hero />
      <FeatureSection />
      <CtaSection />
      <Faq />
      <Footer />
    </div>
  );
}
