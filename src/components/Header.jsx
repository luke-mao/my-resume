import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export default function Header() {
  return (
    <div className="flex flex-col items-center text-center md:flex-row md:justify-between md:text-left">
      {/* Left: Logo and Name */}
      <div className="flex flex-col md:flex-row items-center gap-4">
        <Avatar className="h-20 w-20">
          <AvatarImage src="/src/assets/logo.jpg" alt="Luke Mao Logo" />
          <AvatarFallback>LM</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Luke Mao</h1>
          <div className="flex flex-col md:flex-row md:gap-2 pt-1">
            <p className="text-muted-foreground text-base">
              Web Developer
            </p>
            <p className="text-muted-foreground text-base">
              Software Developer
            </p>
            <p className="text-muted-foreground text-base">
              Data Analyst
            </p>
          </div>

        </div>
      </div>

      {/* Right: Contact Info */}
      <div className="mt-4 md:mt-0 text-base text-muted-foreground">
        <p>📍 Randwick, Sydney NSW</p>
        <p>📞 0451-985-740</p>
        <p>✉️ jinjie.luke.mao@gmail.com</p>
      </div>

      <Separator className="my-4 md:hidden" />
    </div>
  );
}
