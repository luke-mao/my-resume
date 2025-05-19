import React from "react";
import { Separator } from "@/components/ui/separator";

export default function Summary() {
  return (
    <section className="mt-5">
      <h2 className="text-xl font-semibold mb-2">Summary</h2>
      <p className="text-base text-muted-foreground leading-relaxed">
        With a Master of Information Technology (2021) and a Bachelor of Petroleum Engineering (Honours, 2019) from UNSW,
        I have developed strong skills in Python, React.js, web development, database modeling, and data science.
        Although visa issues delayed the start of my career, I remained actively engaged by tutoring IT and mathematics,
        as well as working on personal software projects. Now being a permanent resident, I am excited to bring my
        engineering and IT experience to new roles in web development and data science. I am fluent in English and a
        native speaker of Mandarin Chinese.
      </p>
      <Separator className="mt-5 lg:hidden lg:mt-10" />
    </section>
  );
}
