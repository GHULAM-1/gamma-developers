import { ourTeamTypes } from "@/types/all-types";
import { InstagramIcon, LinkedinIcon, GithubIcon } from "lucide-react";

const teamMembers: ourTeamTypes[] = [
  {
    img: "gamma.png",
    name: "Ghulam",
    designation: "Co Founder",
    icons: [<LinkedinIcon />, <InstagramIcon /> , <GithubIcon/>], 
  },
  {
    img: "abubakar.png",
    name: "M.Abubakar",
    designation: "Co Founder",
    icons: [<LinkedinIcon />, <GithubIcon />, <InstagramIcon />], 
  },
  {
    img: "ibrahim.png",
    name: "M.Ibrahim",
    designation: "Co Founder",
    icons: [<InstagramIcon />, <GithubIcon /> ,<LinkedinIcon />,], 
  },
];

export default teamMembers;
