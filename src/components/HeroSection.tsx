import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import { BackgroundLines } from "./ui/background-lines";

function HeroSection() {
  return (
    <>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="yellow"
      />
      <BackgroundBeamsWithCollision>
        <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
          <div className="h-auto md:h-[40rem] 4-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-10">
            <div className="p-4 relative z-10 w-full text-center">
              <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
                <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                  Master the art of music{" "}
                </h1>
                <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
                  Dive into our comprehensive music courses and transform your
                  musical journey today. Whether you're a beginner or looking to
                  refine your skills, join us to unlock your true potential.
                </p>
                <div className="mt-4">
                  <Link href={"/courses"}>
                    <Button
                      borderRadius="1.75rem"
                      className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                      Explore Courses
                    </Button>
                  </Link>
                </div>
              </BackgroundLines>
            </div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </>
  );
}

export default HeroSection;
