import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import UNSWLogo from "@/assets/unsw.png";

const EducationItem = ({ title, date, institution, location, url, logo }) => (
  <Card className="px-3 py-2 rounded-md border border-muted shadow-sm w-full max-w-[400px]">
    <div className="flex items-start gap-4">
      <Avatar className="h-12 w-12 mt-1">
        <AvatarImage src={logo} alt={institution} className="object-contain" />
        <AvatarFallback>UNSW</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <CardHeader className="p-0 pb-1">
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-semibold">{title}</h3>
            <span className="text-sm text-muted-foreground">{date}</span>
          </div>
          <div className="flex flex-col gap-1">
            {url ? (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-semibold text-muted-foreground underline hover:opacity-80"
              >
                {institution}
              </a>
            ) : (
              <p className="text-base font-semibold text-muted-foreground">{institution}</p>
            )}
            <p className="text-base text-muted-foreground">{location}</p>
          </div>
        </CardHeader>
        <CardContent className="text-base text-muted-foreground p-0 pt-2">
          <p>{title.includes("Master") ? "Graduated with Excellence." : "Graduated with Honours Class 1."}</p>
        </CardContent>
      </div>
    </div>
  </Card>
);

export default function Education() {
  return (
    <section className="mt-5">
      <h2 className="text-xl font-semibold mb-4">Education</h2>
      <div className="flex flex-row flex-wrap gap-6">
        <EducationItem
          title="Master of Information Technology"
          date="Feb 2019 - Jun 2021"
          institution="University of New South Wales (UNSW)"
          location="Sydney, Australia"
          url="https://www.unsw.edu.au/"
          logo={UNSWLogo}
        />

        <EducationItem
          title="Bachelor of Petroleum Engineering (Honours)"
          date="Feb 2015 - Dec 2018"
          institution="University of New South Wales (UNSW)"
          location="Sydney, Australia"
          url="https://www.unsw.edu.au/"
          logo={UNSWLogo}
        />
      </div>
      <Separator className="mt-5 lg:hidden lg:mt-10" />
    </section>
  );
}
