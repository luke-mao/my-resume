import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Logo from "@/assets/logo.jpg";

export default function Header() {
  return (
    <>
      <div className="flex flex-col items-center text-center md:flex-row md:justify-between md:text-left">
        {/* Left: Logo and Name */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src={Logo} alt="Luke Mao Logo" />
            <AvatarFallback>LM</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Luke Mao</h1>
            <div className="flex flex-col pt-1 lg:flex-row lg:gap-2">
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
          <p>
            <a href="tel:0451985740" className="hover:underline">
              📞 0451-985-740
            </a>
          </p>
          <p>
            <a href="mailto:jinjie.luke.mao@gmail.com" className="hover:underline">
              ✉️ jinjie.luke.mao@gmail.com
            </a>
          </p>
        </div>
      </div>
      <Separator className="mt-5 lg:hidden lg:mt-10" />
    </>
  );
}
