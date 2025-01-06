"use client";
import React, { useState, useRef } from "react";
import { MoveUpRight, MoveUpRightIcon } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { formSubmission } from "@/serverActions/server-actions";
import { Input } from "@/components/ui/input";
import confetti from "canvas-confetti";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  subject: z.string().min(2, {
    message: "Subject must be at least 2 characters.",
  }),
  message: z.string().min(2, {
    message: "Message must be at least 2 characters.",
  }),
});

export default function Contact() {
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
    formSubmission(data);
    toast({
      title:
        "Form submitted, Thank you for contacting! We will reach out to you soon.",
    });
    ConfettiSideCannons();
    form.reset();
  }

  function ConfettiSideCannons() {
    const end = Date.now() + 3 * 1000; // 3 seconds
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 100, // Increase particle count for burst
        angle: 60,
        spread: 70, // Wider spread for burst effect
        startVelocity: 80, // Increase velocity for more energetic burst
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });

      // Burst effect from right cannon
      confetti({
        particleCount: 100, // Same burst from the other side
        angle: 120,
        spread: 70,
        startVelocity: 80,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });
    };

    frame();
  }

  const footerNavs = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/gammadevelopers/profilecard/?igsh=MXZlZzBmY2kwMGxucQ==",
    },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/gamma-developers-28720a220/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Upwork",
      href: "https://www.upwork.com/freelancers/~01293c969e4754c164?mp_source=share",
    },
  ];

  return (
    <div className="p-4 text-white max-w-[1365px] w-full flex justify-center items-center flex-col">
      <div className="text-center text-[48px] md:text-[120px] text-white mt-2 md:mt-20 font-bold mb-8">
        GET IN TOUCH
      </div>
      <div className="flex justify-center w-screen">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.7605317111897!2d74.33999707506752!3d31.475772949345114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919042715f767ad%3A0xb0251034ce47145e!2sARFA%20Tower%2C%20Lahore%20%E2%80%93%20Kasur%20Rd%2C%20Nishtar%20Town%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1725144937661!5m2!1sen!2s"
          className="w-[98%] h-64 mx-6 md:h-96 lg:h-[550px] grayscale rounded-3xl"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="flex flex-col md:flex-row max-w-[1365px] w-full justify-between gap-14 py-[140px]">
        <div className="flex flex-col gap-5">
          <div className="leading-[1.125]">
            <div className="text-[38px] md:text-[48px] font-semibold">
              LET'S MAKE YOUR
            </div>
            <div className="text-[38px] md:text-[48px] font-semibold">
              BRAND <span className="font-[300]">BRILLIANT!</span>
            </div>
          </div>
          <div className="w-[350px] md:w-[520px] text-neutral-400 mb-[20px]">
            If you would like to work with us or just want to get in touch, we’d
            love to hear from you!
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <div className="text-[22px] mb-[15px]">Address</div>
              <div className="w-[242px] text-[16px] text-neutral-400">
                6th Floor, Arfa Software Technology Park, Ferozepur Road, Lahore
              </div>
            </div>
            <div>
              <div className="text-[22px] mb-[15px]">Email</div>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=gammadevelopers0@gmail.com"
                target="_blank"
              >
                <div className="w-[242px] text-[16px] text-neutral-400">
                  gammadevelopers0@gmail.com
                </div>
              </a>
            </div>
          </div>
          <div className="text-[30px] text-primary underline mt-[10px] mb-[30px]">
          +92 (307) 4593601
          </div>
          <div className="flex gap-14">
            {footerNavs.map((nav) => {
              return (
                <a
                  key={nav.name}
                  href={nav.href}
                  className="cursor-pointer text-[16px] text-white"
                >
                  {nav.name}
                </a>
              );
            })}
          </div>
        </div>
        <div>
          <div className="flex justify-start items-center gap-4">
            <div className="w-[10px] h-[10px] bg-white rounded-full flex justify-center items-center"></div>
            <div className="text-[18px]">Send a Message</div>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col"
            >
              <div className="flex flex-col md:flex-row mt-16 gap-10 mb-10">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Name"
                          style={{ outline: "none", boxShadow: "none" }}
                          className="text-neutral-400 bg-black border-[1px] border-white placeholder-primary border-opacity-90 text-[20px] focus:border-primary"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Email"
                          style={{ outline: "none", boxShadow: "none" }}
                          className="text-neutral-400 bg-black border-[1px] border-white placeholder-primary border-opacity-90 text-[20px] focus:border-primary"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Subject"
                        style={{ outline: "none", boxShadow: "none" }}
                        className="text-neutral-400 bg-black border-[1px] border-white border-opacity-90 text-[20px] focus:border-primary"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="mt-10">
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <textarea
                        placeholder="Message"
                        style={{ outline: "none", boxShadow: "none" }}
                        className="w-full text-neutral-400 bg-black border-b-[1px] border-white border-opacity-90 text-[20px] pb-4 focus:border-primary focus:placeholder-primary"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex mt-10 group">
                <Button
                  type="submit"
                  className="rounded-3xl bg-white text-black px-5 py-[7px] text-sm gap-2 group-hover hover:bg-primary"
                >
                  <span>Let's Talking</span>
                  <MoveUpRightIcon className="w-[18px] h-[18px] group-hover:scale-125 transform transition-transform duration-300 ease-out" />
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
