import { MoveUpRight } from "lucide-react";
import Logo from "./logo";
import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const footerNavs = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Services",
      href: "/services",
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
      href: "https://www.instagram.com/uithemez/",
      icon: <Instagram className="w-[15px] h-[15px] stroke-white" />,
    },
    {
      name: "linkedin",
      href: "https://www.instagram.com/uithemez/",
      icon: <Instagram className="w-[15px] h-[15px] stroke-white" />,
    },
    {
      name: "upwork",
      href: "https://www.instagram.com/uithemez/",
      icon: <Instagram className="w-[15px] h-[15px] stroke-white" />,
    },
  ];

  return (
    <>
      <div className="flex justify-center items-center  text-white w-full max-w-[1365px] flex-col">
        <div className="mb-40 w-full border-b-[1px] border-neutral-400 opacity-25"></div>
        <a href="/contact" className="relative ">
          <div className="absolute -right-[50px] bottom-[37%] w-[210px] h-[210px] bg-primary rounded-full flex justify-center items-center flex-col text-[32px] text-black font-semibold tracking-tighter leading-[1.3]">
            <div>CONTACT</div>
            <div className="flex justify-center items-center gap-1">
              <div>US</div>
              <MoveUpRight className="w-[30px] h-[30px]" />
            </div>
          </div>
          <div className="text-[100px]  font-semibold leading-[1] flex justify-center items-center text-center flex-col">
            <div>LET'S MAKE</div>
            <div>SOMETHING GREAT!</div>
          </div>
        </a>
        <div className="flex flex-row  w-full justify-between items-start mt-20">
          <Logo />
          <div className="text-neutral-400">
            <div className="text-[12px] mb-[10px]">LOCATION</div>
            <div className="text-[16px] w-[297px]">
              152 Thatcher Road St, Mahattan, NY 10463, US
            </div>
            <div className="flex gap-4 mt-4">
              {socials.map((soc) => {
                return (
                  <a
                    href={soc.href}
                    className="rounded-full border-[1px] border-neutral-100 p-2 border-opacity-50 hover:border-neutral-100"
                  >
                    {soc.icon}
                  </a>
                );
              })}
            </div>
          </div>
          <div className="text-neutral-400">
            <div className="text-[12px] mb-[10px]">INQUIRY</div>
            <div className="text-[16px]">hello@hubfolio.agency</div>
            <div className="text-[16px]">+0685689696</div>
          </div>
        </div>
        <div className="flex justify-between  w-full pt-8 border-t-[1px] border-neutral-400 border-opacity-25 mt-40 pb-14">
          <div className="text-[14px] text-neutral-400">
            © 2024 <span className="text-white">Gamma Developers.</span> All
            Right Reserved
          </div>
          <div className="flex gap-14">
            {footerNavs.map((nav) => {
              return (
                <a
                  href={nav.href}
                  className=" cursor-pointer text-[14px] text-neutral-400"
                >
                  {nav.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
