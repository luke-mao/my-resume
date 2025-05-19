import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const TitleWithDate = ({ title, date, company, location, url }) => (
  <>
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-1">
      <h3 className="text-lg font-semibold">{title}</h3>
      <span className="text-base text-muted-foreground">{date}</span>
    </div>
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-1">
      {url ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-base font-semibold text-muted-foreground underline hover:opacity-80"
        >
          {company}
        </a>
      ) : (
        <p className="text-base font-semibold text-muted-foreground">{company}</p>
      )}
      <p className="text-base text-muted-foreground">{location}</p>
    </div>
  </>
)

export default function Experience() {
  return (
    <section className="mt-5">
      <h2 className="text-xl font-semibold mb-4">Work Experience</h2>

      {/* Tutor */}
      <Card className="mb-5">
        <CardHeader>
          <TitleWithDate
            title="Private Tutor (Computer Science & Mathematics)"
            date="Jun 2015 - Nov 2024"
            company="Self-Employed"
            location="Sydney"
          />
        </CardHeader>
        <CardContent className="text-base text-muted-foreground">
          <ul className="list-disc ml-5 space-y-1">
            <li>Provided one-on-one and group tutoring for university-level computer science and mathematics courses.</li>
            <li>Assisted students with coding tasks, debugging, and understanding key concepts in algorithms, databases, and programming.</li>
            <li>Helped students improve academic performance through personalized support.</li>
          </ul>
        </CardContent>
      </Card>

      {/* Engineering Intern */}
      <Card className="mb-5">
        <CardHeader>
          <TitleWithDate
            title="Engineering Intern"
            date="May 2018 - Sep 2018"
            company="Bluegum Pharmaceuticals"
            location="Banksmeadow, Sydney"
            url="https://bluegum.net.au/"
          />
        </CardHeader>
        <CardContent className="text-base text-muted-foreground">
          <ul className="list-disc ml-5 space-y-1">
            <li>Reviewed and updated Standard Operating Procedures (SOPs).</li>
            <li>Assisted in production planning and coordination activities.</li>
            <li>Observed and documented pharmaceutical manufacturing processes.</li>
          </ul>
        </CardContent>
      </Card>

      {/* Store Cashier */}
      <Card>
        <CardHeader>
          <TitleWithDate
            title="Store Cashier"
            date="Jan 2016 - Dec 2018"
            company="Friendly Grocer Woolloomooloo"
            location="Sydney"
            url="https://friendlygrocer.com.au/friendly-grocer-wooloomooloo"
          />
        </CardHeader>
        <CardContent className="text-base text-muted-foreground">
          <ul className="list-disc ml-5 space-y-1">
            <li>Provided customer service and cashier support in a local convenience store environment.</li>
          </ul>
        </CardContent>
      </Card>

      <Separator className="mt-5 lg:hidden lg:mt-10" />
    </section>
  );
}
