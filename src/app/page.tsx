import { Hero } from "@/components/sections/Hero";
import { Quote } from "@/components/sections/Quote";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { MainProjects } from "@/components/sections/MainProjects";
import { OtherProjects } from "@/components/sections/OtherProjects";
import { Cta } from "@/components/sections/Cta";

export default function Page() {
  return (
    <>
      <Hero />
      <Quote
        lines={["I plan.", "I document.", "I communicate.", "I build."]}
        accent="build"
        marquee={["PLAN", "DOCUMENT", "COMMUNICATE", "BUILD"]}
      />
      <Skills />
      <Experience />
      <Quote
        lines={["Developers not only learn,", "they adapt."]}
        accent="adapt"
        marquee={["ADAPT", "LEARN", "SHIP", "REPEAT"]}
      />
      <MainProjects />
      <OtherProjects />
      <Cta />
    </>
  );
}
