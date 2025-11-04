import Image from "next/image";
import { AvatarStack } from "@/components/ui/kibo-ui/avatar-stack";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { Mail, X } from "lucide-react";
import Link from "next/link";
import Client3 from "../../public/img/profile/client-3.webp";
import {
  Marquee,
  MarqueeItem,
  MarqueeFade,
  MarqueeContent,
} from "@/components/ui/kibo-ui/marquee";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { ContactForm } from "@/components/ui/contact-form";

export default function Home() {
  const testimonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
  ];
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
      <div className="h-screen w-full bg-purple-700 mt-5">
        <h2>Project section</h2>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 mx-auto w-full h-full">
          <div className="h-full w-full bg-amber-50 border rounded-2xl"></div>
          <div className="h-full w-full bg-amber-50 border rounded-2xl"></div>
          <div className="h-full w-full bg-amber-50 border rounded-2xl"></div>
          <div className="h-full w-full bg-amber-50 border rounded-2xl"></div>
        </div>
      </div>

      <div className="h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="fast"
          pauseOnHover={false}
        />
      </div>
      {/* section for sending email for Clients */}
      <section className="w-full py-20 bg-gradient-to-b from-purple-50 to-white">
        <ContactForm />
      </section>

      <footer className="w-screen h-20 bg-gray-800 text-white flex items-center justify-center">
        <h2>Footer section</h2>
        <p>insta</p>
        <p>X</p>
        <p>linked in</p>
      </footer>
    </div>
  );
}
