import { ourTeamTypes } from "@/types/all-types";
import { InstagramIcon, LinkedinIcon, GithubIcon } from "lucide-react";

const teamMembers: ourTeamTypes[] = [
  {
    img: "gamma.png",
    name: "Ghulam",
    designation: "Co Founder",
    icons: [
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <LinkedinIcon />
      </a>,
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <InstagramIcon />
      </a>,
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <GithubIcon />
      </a>,
    ],
  },
  {
    img: "abubakar.png",
    name: "M.Abubakar",
    designation: "Co Founder",
    icons: [
      <a href="https://www.linkedin.com/in/mian-abubakar-15a726323" target="_blank" rel="noopener noreferrer">
        <LinkedinIcon />
      </a>,
      <a href="https://github.com/abubakar-dev-1" target="_blank" rel="noopener noreferrer">
        <GithubIcon />
      </a>,
      <a href="https://www.instagram.com/mian._.abubakar/profilecard/?igsh=bDV4MmdtdXhndnlw" target="_blank" rel="noopener noreferrer">
        <InstagramIcon />
      </a>,
    ],
  },
  {
    img: "ibrahim.png",
    name: "M.Ibrahim",
    designation: "Co Founder",
    icons: [
      <a href="https://www.instagram.com/.chaudharyy/profilecard/?igsh=MWFmMGRpMWZubWkzNA==" target="_blank" rel="noopener noreferrer">
        <InstagramIcon />
      </a>,
      <a href="https://github.com/IbrahimChaudhary" target="_blank" rel="noopener noreferrer">
        <GithubIcon />
      </a>,
      <a href="https://www.linkedin.com/in/ibrahim-ch-031607323/" target="_blank" rel="noopener noreferrer">
        <LinkedinIcon />
      </a>,
    ],
  },
];

export default teamMembers;
