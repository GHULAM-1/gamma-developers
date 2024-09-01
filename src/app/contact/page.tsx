import React from "react";
import { MoveUpRight } from "lucide-react";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { CardSpotlightDemo } from "@/components/card-spotlight-demo";

export default function Contact() {
  const footerNavs = [
    {
      name: "Instagram",
      href: "/",
    },
    {
      name: "Linkedin",
      href: "/services",
    },
    {
      name: "Upwork",
      href: "/portfolio",
    },
  ];
  return (
    <div className="p-4 text-white max-w-[1365px] flex justify-center items-center flex-col">
      <div className="text-center text-[120px] text-white mt-20 font-bold mb-8">
        GET IN TOUCH
      </div>
      <div className="flex justify-center w-screen">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.7605317111897!2d74.33999707506752!3d31.475772949345114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919042715f767ad%3A0xb0251034ce47145e!2sARFA%20Tower%2C%20Lahore%20%E2%80%93%20Kasur%20Rd%2C%20Nishtar%20Town%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1725144937661!5m2!1sen!2s"
          className="w-[98%]  h-64 mx-6 md:h-96 lg:h-[550px] grayscale rounded-3xl"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="flex w-full justify-between items-start py-[140px] ">
        <div className="flex flex-col gap-5">
          <div className="leading-[1.125]">
            <div className="text-[48px] font-semibold">LET'S MAKE YOUR</div>
            <div className="text-[48px] font-semibold">
              BRAND <span className="font-[300]">BRILLIANT!</span>
            </div>
          </div>
          <div className="w-[520px] text-neutral-400 mb-[20px]">
            If you would like to work with us or just want to get in touch, we’d
            love to hear from you!
          </div>
          <div className="flex gap-8 ">
            <div>
              <div className="text-[22px] mb-[15px]">Address</div>
              <div className="w-[242px] text-[16px] text-neutral-400">
                Besòs 1, 08174 Sant Cugat del Vallès, Barcelona
              </div>
            </div>
            <div>
              <div className="text-[22px]  mb-[15px]">Email</div>
              <div className="w-[242px] text-[16px] text-neutral-400">
                gamma@developers.com
              </div>
            </div>
          </div>
          <div className="text-[30px] text-primary underline mt-[10px] mb-[30px]">
            03074593601
          </div>
          <div className="flex gap-14">
            {footerNavs.map((nav) => {
              return (
                <a
                  href={nav.href}
                  className=" cursor-pointer text-[16px] text-white"
                >
                  {nav.name}
                </a>
              );
            })}
          </div>
        </div>
        <div>
          <div className="flex justify-start items-center gap-4">
            <div className="w-[10px] h-[10px] bg-white  rounded-full flex justify-center items-center"></div>
            <div className="text-[18px]">Send a Mesaage</div>
          </div>
          <div className="flex flex-col">
            <div className="flex mt-16 gap-10 mb-10">
              <input
                type="name"
                className="text-neutral-400 bg-black  outline-none border-b-[1px] placeholder-neutral-400 border-neutral-400 border-opacity-30 text-[20px] pb-4"
                placeholder="Name"
              />
              <input
                type="email"
                className="text-neutral-400 bg-black  outline-none border-b-[1px] placeholder-neutral-400 border-neutral-400 border-opacity-30 text-[20px] pb-4"
                placeholder="Email"
              />
            </div>
            <input
              type="subject"
              className="text-neutral-400 bg-black  outline-none border-b-[1px] placeholder-neutral-400 border-neutral-400 border-opacity-30 text-[20px] pb-4 mb-10"
              placeholder="Subject"
            />
            <textarea
              placeholder="Message"
              name="message"
              className="w-full text-neutral-400 bg-black  outline-none border-b-[1px] placeholder-neutral-400 border-neutral-400 border-opacity-30 text-[22px] pb-1"
              id=""
            ></textarea>
          </div>
          <div className="flex mt-10">
            <div className="flex justify-center items-center rounded-3xl bg-white text-black px-5 py-[7px] text-sm gap-2 cursor-pointer hover:bg-primary">
              <span>Let's Talking</span>
              <MoveUpRight className="w-[18px] h-[18px]" />
            </div>
          </div>
        </div>
      </div>

      <CardSpotlightDemo />
    </div>
  );
}
