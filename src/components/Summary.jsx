import React from "react";
import { Separator } from "@/components/ui/separator";

export default function Summary() {
  return (
    <section className="mt-5">
      <h2 className="text-xl font-semibold mb-2">Summary</h2>
      <p className="text-base text-muted-foreground leading-relaxed">
        With a Master of Information Technology (2021) and a Bachelor of Petroleum Engineering (Honours, 2019) from UNSW, 
        I have developed strong skills in Python, React.js, web development, database modeling, and data science. 
        I am currently an Associate Software Engineer at Luxury Escapes in Sydney, working in the Luxury Escapes Business Traveller (LEBT) team, 
        where I help maintain and develop both backend and frontend services for the business traveller portal. 
        My experience covers full-stack development, collaborating across teams to deliver robust, user-friendly solutions. 
        Previously, I stayed engaged in the tech field by tutoring IT and mathematics and building personal software projects. 
        Now a permanent resident, I am excited to continue bringing my engineering and IT expertise to web development and data science roles. 
        I am fluent in English and a native speaker of Mandarin Chinese.
      </p>
      <Separator className="mt-5 lg:hidden lg:mt-10" />
    </section>
  );
}
