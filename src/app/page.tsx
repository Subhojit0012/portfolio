import Image from "next/image";
import { AvatarStack } from "@/components/ui/kibo-ui/avatar-stack";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { Mail } from "lucide-react";
import Link from "next/link";
import Client3 from "../../public/img/profile/client-3.webp";
import {
  Marquee,
  MarqueeItem,
  MarqueeFade,
  MarqueeContent,
} from "@/components/ui/kibo-ui/marquee";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center max-w-7xl mx-auto">
      <header className="w-full flex flex-col items-center justify-between mx-auto">
        <nav className="flex w-full items-center justify-between mx-auto px-4">
          <Image
            src={Client3}
            alt="Profile Image"
            className="rounded-full object-cover h-16 w-16"
          />

          <div className="">
            <ul className="flex gap-10">
              <li>About</li>
              <li>Projects</li>
              <li>Connect</li>
              <li>Blogs</li>
            </ul>
          </div>
        </nav>

        <section className="w-full h-screen flex flex-col items-center justify-center gap-6 mt-1">
          <div className="text-center space-y-3">
            <h1 className="text-7xl">Looking for a developer</h1> <br />
            <h2 className="text-5xl">who can build you a website?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
              hic, laudantium enim eligendi quasi, soluta
            </p>
          </div>

          <div className="mt-10">
            <AvatarStack>
              <Avatar>
                <AvatarImage src="https://github.com/haydenbleasel.png" />
                <AvatarFallback>HB</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://github.com/leerob.png" />
                <AvatarFallback>LR</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://github.com/serafimcloud.png" />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
            </AvatarStack>
          </div>
          <div className="flex gap-4">
            <Button>
              <Send /> Book a call
            </Button>

            <Button>
              <Mail /> Send a message
            </Button>
          </div>
        </section>
      </header>

      {/* dev stack section */}
      <div className="w-full flex size-full items-center justify-center">
        <Marquee>
          <MarqueeFade side="left" />
          <MarqueeFade side="right" />
          <MarqueeContent>
            {new Array(10).fill(null).map((_, index) => (
              <MarqueeItem className="h-32 w-32" key={index}>
                <Image
                  src={`https://placehold.co/128x128?random=${index}`}
                  alt={`Placeholder ${index}`}
                  className="overflow-hidden rounded-full"
                  width={100}
                  height={100}
                  unoptimized
                />
              </MarqueeItem>
            ))}
          </MarqueeContent>
          <MarqueeContent direction="right">
            {new Array(10).fill(null).map((_, index) => (
              <MarqueeItem className="h-32 w-32" key={index}>
                <Image
                  src={`https://placehold.co/128x128?random=${index}`}
                  alt={`Placeholder ${index}`}
                  className="overflow-hidden rounded-full"
                  width={100}
                  height={100}
                  unoptimized
                />
              </MarqueeItem>
            ))}
          </MarqueeContent>
        </Marquee>
      </div>

      {/* Project section */}
      <div className="h-screen w-full bg-purple-700 grid-cols-2 grid-rows-2 gap-4 mt-5">
        <h2>Project section</h2>
      </div>
    </div>
  );
}
