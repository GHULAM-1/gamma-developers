import { MoveUpRight } from "lucide-react";
import Logo from "./logo";
import { Instagram, Linkedin,ArrowUpRight  } from "lucide-react";
import { LetsTalk } from "./lets-talk";

export default function Footer() {
  const footerNavs = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Portfolio",
      href: "/portfolio",
    },
    {
      name: "Blog",
      href: "/blog",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  const socials = [
    {
      name: "instagram",
      href: "https://www.instagram.com/gammadevelopers/profilecard/?igsh=MXZlZzBmY2kwMGxucQ==",
      icon: <Instagram className="w-[23px] h-[19px] stroke-white" />,
    },
    {
      name: "linkedin",
      href: "https://www.linkedin.com/in/gamma-developers-28720a220/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      icon: <Linkedin className="w-[23px] h-[19px] stroke-white" />,
    },
    {
      name: "upwork",
      href: "https://www.upwork.com/freelancers/~01293c969e4754c164?mp_source=share",
      icon: <p className="w-[23px] font-semibold mb-1 h-[19px] stroke-white">Up</p>,
    },
  ];

  return (
    <>
      <div className="flex justify-center items-center text-white w-full max-w-[1365px] flex-col">
        <div className="mb-40 w-full border-b-[1px] border-neutral-400 opacity-25"></div>

        <a href="/contact" className="relative hidden md:block">
          <div className="hidden absolute -right-[50px] bottom-[37%] w-[210px] h-[210px] bg-primary rounded-full md:flex justify-center items-center flex-col text-[32px] text-black font-semibold tracking-tighter leading-[1.3]">
            <div>CONTACT</div>
            <div className="flex justify-center items-center gap-1">
              <div>US</div>
              <MoveUpRight className="w-[30px] h-[30px]" />
            </div>
          </div>
          <div className="text-[100px] font-semibold leading-[1] flex justify-center items-center text-center flex-col">
            <div>LET'S MAKE</div>
            <div>SOMETHING GREAT!</div>
          </div>
        </a>

        <div className="block md:hidden">
          <LetsTalk />
        </div>

        <div className="flex flex-col md:flex-row w-full justify-between items-start mt-20 md:gap-0 gap-14">
          <Logo />
          <div className="text-neutral-400">
            <div className="text-[12px] mb-[10px]">LOCATION</div>
            <div className="text-[16px] md:w-[297px] w-full">
            6th Floor, Arfa Software Technology Park, Ferozepur Road, Lahore
            </div>
            <div className="flex gap-4 mt-4">
              {socials.map((soc) => (
                <a
                  key={soc.name}
                  href={soc.href}
                  className="rounded-full border-[1px] border-neutral-100 p-2 border-opacity-50 hover:border-neutral-100"
                >
                  {soc.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="text-neutral-400">
            <div className="text-[12px] mb-[10px]">INQUIRY</div>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=gammadevelopers0@gmail.com" target="_blank">
            <div className="text-[16px]">gammadevelopers0@gmail.com</div>
            </a>
            <div className="text-[16px]">+92 (307) 4593601</div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:gap-0 gap-8 justify-between w-full pt-8 border-t-[1px] border-neutral-400 border-opacity-25 mt-3 md:mt-40 pb-14">
          <div className="text-[14px] text-neutral-400">
            © 2024 <span className="text-white">Gamma Developers.</span> All
            Right Reserved
          </div>
          <div className="flex gap-3 items-center justify-center md:gap-14">
            {footerNavs.map((nav) => (
              <a
                key={nav.name}
                href={nav.href}
                className="cursor-pointer text-[14px] text-neutral-400"
              >
                {nav.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
