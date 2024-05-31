export const headerText = ["Watch.", "Learn.", "Grow."];

export const navLink = [
  { id: 1, navName: "Find Position", href: "#" },
  { id: 2, navName: "Categories", href: "#" },
  { id: 3, navName: "Fashion", href: "#" },
  { id: 4, navName: "Skills", href: "#" },
  { id: 5, navName: "Customers", href: "#" },
];

import pic1 from "../assets/images/business-course-img.webp";
import pic2 from "../assets/images/writing-course-img.webp";
import pic3 from "../assets/images/writing-course2-img.webp";

export const heroImages = [
  { id: 1, image: pic2, href: "#" },
  { id: 2, image: pic3, href: "#" },
  { id: 3, image: pic1, href: "#" },
];

export const heroText = [
  "All Categories",
  "Entertainment",
  "Lifestyle",
  "Writing",
  "Business",
  "Food",
];

import heroPic1 from "../assets/images/Sales.webp";
import heroPic2 from "../assets/images/Data.webp";
import heroPic3 from "../assets/images/Copywriting.webp";
import heroPic4 from "../assets/images/Design.webp";

export const heroData = [
  {
    id: 1,
    image: heroPic1,
    dataTitle: "Sales Marketing",
    duration: "4 months",
  },
  { id: 2, image: heroPic2, dataTitle: "Data Analytics", duration: "1 month" },
  {
    id: 3,
    image: heroPic3,
    dataTitle: "Copywriting Pro",
    duration: "2 months",
  },
  { id: 4, image: heroPic4, dataTitle: "Design Art", duration: "4 months" },
];

import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";

export const skillsData = [
  {
    id: 1,
    icon: <WorkspacePremiumIcon />,
    title: "Leadership",
    text: "Fully commited to succes company",
  },
  {
    id: 2,
    icon: <AcUnitIcon />,
    title: "Responsibilty",
    text: "Employees will always be my top priority",
  },
  {
    id: 3,
    icon: <ElectricBoltIcon />,
    title: "Flexibility",
    text: "The ability to switch is an important skill",
  },
];

import cardPic1 from "../assets/images/customers_ava-01.webp";
import cardPic2 from "../assets/images/customers_ava-02.webp";
import cardPic3 from "../assets/images/customers_ava-03.webp";
import cardPic4 from "../assets/images/customers_ava-04.webp";

export const cardData = [
  {
    id: 1,
    text: "The explanations are clear, the teachers are responsible and friendly, and the homework is real practice",
    image: cardPic1,
    name: "Rob Zuber",
    position: "CEO",
  },
  {
    id: 2,
    text: "I learned a lot of new things, I immediately apply my knowledge in my work, found myself a new client",
    image: cardPic2,
    name: "Melanie Pickett",
    position: "IT Manager",
  },
  {
    id: 3,
    text: "I really like the speakers of the course and the quality of the lectures. There is always feedback",
    image: cardPic3,
    name: "Regis Wilson",
    position: "Engineer",
  },
  {
    id: 4,
    text: "A new profession is a lot of vivid impressions. Today I was at the presentation of the regional business award",
    image: cardPic4,
    name: "Emma Watson",
    position: "Cook",
  },
];

import icon1 from "../assets/images/ico_soc-fb.svg";
import icon2 from "../assets/images/ico_soc-behance.svg";
import icon3 from "../assets/images/ico_soc-in.svg";
import icon4 from "../assets/images/ico_soc-inst.svg";
import icon5 from "../assets/images/soc-dribbble.svg";

export const footerIcons = [
  { id: 1, icon: icon1 },
  { id: 2, icon: icon2 },
  { id: 3, icon: icon3 },
  { id: 4, icon: icon4 },
  { id: 5, icon: icon5 },
];
