import { ourTeamTypes } from "@/types/all-types";
import { InstagramIcon, LinkedinIcon, GithubIcon } from "lucide-react";

const teamMembers: ourTeamTypes[] = [
  {
    img: "gamma.png",
    name: "Ghulam",
    designation: "Software Engineer",
    icons: [<LinkedinIcon />, <InstagramIcon /> , <GithubIcon/>], 
  },
  {
    img: "abubakar.png",
    name: "M.Abubakar",
    designation: "Product Manager",
    icons: [<LinkedinIcon />, <GithubIcon />, <InstagramIcon />], 
  },
  {
    img: "ibrahim.png",
    name: "M.Ibrahim",
    designation: "UI/UX Designer",
    icons: [<InstagramIcon />, <GithubIcon /> ,<LinkedinIcon />,], 
  },
];

export default teamMembers;
