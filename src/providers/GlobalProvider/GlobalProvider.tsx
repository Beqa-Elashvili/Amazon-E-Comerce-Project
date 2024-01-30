import { PropsWithChildren, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import { v4 as uuidv4 } from "uuid";
import { TGender } from "./GlobalContext";

const footerAmazonLinks = [
  { id: uuidv4(), Name: "Get to Know Us", Destination: "title" },
  { id: uuidv4(), Name: "Make Money with Us", Destination: "title" },
  { id: uuidv4(), Name: "Amazon Payment Products", Destination: "title" },
  { id: uuidv4(), Name: "Let Us Help You", Destination: "title" },

  { id: uuidv4(), Name: "Careers", Destination: "https://www.amazon.jobs/en/" },
  {
    id: uuidv4(),
    Name: "Amazon Newsletter",
    Destination:
      "https://email.aboutamazon.com/l/637851/2020-10-29/pd87g?utm_source=gateway&utm_medium=amazonfooters&utm_campaign=newslettersubscribers&utm_content=amazonnewssignup",
  },
  {
    id: uuidv4(),
    Name: "About Amazon",
    Destination: "https://www.amazon.jobs/en/",
  },
  { id: uuidv4(), Name: "Help", Destination: "https://www.amazon.jobs/en/" },
  {
    id: uuidv4(),
    Name: "Accessibility",
    Destination: "https://www.amazon.jobs/en/",
  },
  {
    id: uuidv4(),
    Name: "Sustainability",
    Destination: "https://www.amazon.jobs/en/",
  },
  {
    id: uuidv4(),
    Name: "Press Center",
    Destination: "https://www.amazon.jobs/en/",
  },
  {
    id: uuidv4(),
    Name: "Investor Relations",
    Destination: "https://www.amazon.jobs/en/",
  },
  {
    id: uuidv4(),
    Name: "Amazon Devices",
    Destination: "https://www.amazon.jobs/en/",
  },
  {
    id: uuidv4(),
    Name: "Amazon Science",
    Destination: "https://www.amazon.jobs/en/",
  },
  {
    id: uuidv4(),
    Name: "Sell more with Amazon",
    Destination: "https://www.amazon.jobs/en/",
  },
  {
    id: uuidv4(),
    Name: "Sell apps on Amazon",
    Destination: "https://www.amazon.jobs/en/",
  },
  {
    id: uuidv4(),
    Name: "Supply to Amazon",
    Destination: "https://www.amazon.jobs/en/",
  },
  {
    id: uuidv4(),
    Name: "Protect & Build Your Brand",
    Destination: "https://www.amazon.jobs/en/",
  },
  {
    id: uuidv4(),
    Name: "Become an Affiliate",
    Destination: "https://www.amazon.jobs/en/",
  },
  {
    id: uuidv4(),
    Name: "Become a Delivery Driver",
    Destination: "https://www.amazon.jobs/en/",
  },
  {
    id: uuidv4(),
    Name: "Start a Package Delivery Business",
    Destination: "https://www.amazon.jobs/en/",
  },
  {
    id: uuidv4(),
    Name: "Advertise Your Products",
    Destination: "https://www.amazon.jobs/en/",
  },
  {
    id: uuidv4(),
    Name: "Self-Publish with Us",
    Destination: "https://www.amazon.jobs/en/",
  },
  {
    id: uuidv4(),
    Name: "Host an Amazon Hub",
    Destination: "https://www.amazon.jobs/en/",
  },
  {
    id: uuidv4(),
    Name: "See More Ways to Make Money",
    Destination: "https://www.amazon.jobs/en/",
  },
  {
    id: uuidv4(),
    Name: "Amazon Visa",
    Destination: "https://www.amazon.jobs/en/",
  },
  {
    id: uuidv4(),
    Name: "Amazon Store Card",
    Destination: "https://www.amazon.jobs/en/",
  },
  {
    id: uuidv4(),
    Name: "Amazon Secured Card",
    Destination: "https://www.amazon.jobs/en/",
  },
  {
    id: uuidv4(),
    Name: "Amazon Business Card",
    Destination: "https://www.amazon.jobs/en/",
  },
  {
    id: uuidv4(),
    Name: "Shop with Points",
    Destination: "https://www.amazon.jobs/en/",
  },
  {
    id: uuidv4(),
    Name: "Credit Card Marketplace",
    Destination: "https://www.amazon.jobs/en/",
  },
  {
    id: uuidv4(),
    Name: "Reload Your Balance",
    Destination: "https://www.amazon.jobs/en/",
  },
  {
    id: uuidv4(),
    Name: "Gift Cards",
    Destination: "https://www.amazon.jobs/en/",
  },
  {
    id: uuidv4(),
    Name: "Amazon Currency Converter",
    Destination: "https://www.amazon.jobs/en/",
  },
  {
    id: uuidv4(),
    Name: "Your Account",
    Destination: "https://www.amazon.jobs/en/",
  },
  {
    id: uuidv4(),
    Name: "Your Orders",
    Destination: "https://www.amazon.jobs/en/",
  },
  {
    id: uuidv4(),
    Name: "Shipping Rates & Policies",
    Destination: "https://www.amazon.jobs/en/",
  },
  {
    id: uuidv4(),
    Name: "Amazon Prime",
    Destination: "https://www.amazon.jobs/en/",
  },
  {
    id: uuidv4(),
    Name: "Returns & Replacements",
    Destination: "https://www.amazon.jobs/en/",
  },
  {
    id: uuidv4(),
    Name: "Manage Your Content and Devices",
    Destination: "https://www.amazon.jobs/en/",
  },
  {
    id: uuidv4(),
    Name: "Recalls and Product Safety Alerts",
    Destination: "https://www.amazon.jobs/en/",
  },
];

const Categoryes = [
  { category: "Best Sellers", id: uuidv4() },
  { category: "Books", id: uuidv4() },
  { category: "Pharmacy", id: uuidv4() },
  { category: "Music", id: uuidv4() },
  { category: "Today's Deals", id: uuidv4() },
  { category: "Customer Service", id: uuidv4() },
  { category: "Whole Foods", id: uuidv4() },
  { category: "Technics", id: uuidv4() },
  { category: "Gifts", id: uuidv4() },
];

const SelectCategorys = [
  {
    category: "Telephone",
    Id: uuidv4(),
  },
  {
    category: "Computer",
    Id: uuidv4(),
  },
  {
    category: "Games Console",
    Id: uuidv4(),
  },
];

const Genders = [
  { label: "Male", value: "male", id: uuidv4() },
  { label: "Female", value: "female", id: uuidv4() },
];

export function GlobalProvider({ children }: PropsWithChildren) {
  const [categorys, setCategorys] = useState(SelectCategorys);
  const [categoryes, setCategoryes] = useState(Categoryes);
  const [footerLinks, setFooterLinks] = useState(footerAmazonLinks);
  const [ChooceGender, setChooceGender] = useState<TGender[]>(Genders);
  const [selectedGender, setSelectedGender] = useState<string>();

  return (
    <GlobalContext.Provider
      value={{
        selectedGender,
        setSelectedGender,
        ChooceGender,
        setChooceGender,
        footerLinks,
        setFooterLinks,
        categorys,
        setCategorys,
        categoryes,
        setCategoryes,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
