import { PropsWithChildren, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import { v4 as uuidv4 } from "uuid";
// import { TfooterLinks } from "./GlobalContext";

const footerAmazonLinks = [
  { id: uuidv4(), Name: "Careers", Carrer: "https://www.amazon.jobs/en/" },
  {
    id: uuidv4(),
    Name: "Amazon Newsletter",
    Carrer: "https://www.amazon.jobs/en/",
  },
  { id: uuidv4(), Name: "About Amazon", Carrer: "https://www.amazon.jobs/en/" },
  {
    id: uuidv4(),
    Name: "Accessibility",
    Carrer: "https://www.amazon.jobs/en/",
  },
  {
    id: uuidv4(),
    Name: "Sustainability",
    Carrer: "https://www.amazon.jobs/en/",
  },
  { id: uuidv4(), Name: "Press Center", Carrer: "https://www.amazon.jobs/en/" },
  {
    id: uuidv4(),
    Name: "Investor Relations",
    Carrer: "https://www.amazon.jobs/en/",
  },
  {
    id: uuidv4(),
    Name: "Amazon Devices",
    Carrer: "https://www.amazon.jobs/en/",
  },
  {
    id: uuidv4(),
    Name: "Amazon Science",
    Carrer: "https://www.amazon.jobs/en/",
  },
  {
    id: uuidv4(),
    Name: "Sell more with Amazon",
    Carrer: "https://www.amazon.jobs/en/",
  },
  {
    id: uuidv4(),
    Name: "Sell apps on Amazon",
    Carrer: "https://www.amazon.jobs/en/",
  },
  {
    id: uuidv4(),
    Name: "Supply to Amazon",
    Carrer: "https://www.amazon.jobs/en/",
  },
  {
    id: uuidv4(),
    Name: "Protect & Build Your Brand",
    Carrer: "https://www.amazon.jobs/en/",
  },
  {
    id: uuidv4(),
    Name: "Become an Affiliate",
    Carrer: "https://www.amazon.jobs/en/",
  },
  {
    id: uuidv4(),
    Name: "Become a Delivery Driver",
    Carrer: "https://www.amazon.jobs/en/",
  },
  {
    id: uuidv4(),
    Name: "Start a Package Delivery Business",
    Carrer: "https://www.amazon.jobs/en/",
  },
  {
    id: uuidv4(),
    Name: "Advertise Your Products",
    Carrer: "https://www.amazon.jobs/en/",
  },
  {
    id: uuidv4(),
    Name: "Self-Publish with Us",
    Carrer: "https://www.amazon.jobs/en/",
  },
  {
    id: uuidv4(),
    Name: "Host an Amazon Hub",
    Carrer: "https://www.amazon.jobs/en/",
  },
  {
    id: uuidv4(),
    Name: "See More Ways to Make Money",
    Carrer: "https://www.amazon.jobs/en/",
  },
  { id: uuidv4(), Name: "Amazon Visa", Carrer: "https://www.amazon.jobs/en/" },
  {
    id: uuidv4(),
    Name: "Amazon Store Card",
    Carrer: "https://www.amazon.jobs/en/",
  },
  {
    id: uuidv4(),
    Name: "Amazon Secured Card",
    Carrer: "https://www.amazon.jobs/en/",
  },
  {
    id: uuidv4(),
    Name: "Amazon Business Card",
    Carrer: "https://www.amazon.jobs/en/",
  },
  {
    id: uuidv4(),
    Name: "Shop with Points",
    Carrer: "https://www.amazon.jobs/en/",
  },
  {
    id: uuidv4(),
    Name: "Credit Card Marketplace",
    Carrer: "https://www.amazon.jobs/en/",
  },
  {
    id: uuidv4(),
    Name: "Reload Your Balance",
    Carrer: "https://www.amazon.jobs/en/",
  },
  { id: uuidv4(), Name: "Gift Cards", Carrer: "https://www.amazon.jobs/en/" },
  {
    id: uuidv4(),
    Name: "Amazon Currency Converter",
    Carrer: "https://www.amazon.jobs/en/",
  },
  { id: uuidv4(), Name: "Your Account", Carrer: "https://www.amazon.jobs/en/" },
  { id: uuidv4(), Name: "Your Orders", Carrer: "https://www.amazon.jobs/en/" },
  {
    id: uuidv4(),
    Name: "Shipping Rates & Policies",
    Carrer: "https://www.amazon.jobs/en/",
  },
  { id: uuidv4(), Name: "Amazon Prime", Carrer: "https://www.amazon.jobs/en/" },
  {
    id: uuidv4(),
    Name: "Returns & Replacements",
    Carrer: "https://www.amazon.jobs/en/",
  },
  {
    id: uuidv4(),
    Name: "Manage Your Content and Devices",
    Carrer: "https://www.amazon.jobs/en/",
  },
  {
    id: uuidv4(),
    Name: "Recalls and Product Safety Alerts",
    Carrer: "https://www.amazon.jobs/en/",
  },
  { id: uuidv4(), Name: "Help", Carrer: "https://www.amazon.jobs/en/" },
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

export function GlobalProvider({ children }: PropsWithChildren) {
  const [categorys, setCategorys] = useState(SelectCategorys);
  const [categoryes, setCategoryes] = useState(Categoryes);
  const [footerLinks, setFooterLinks] = useState(footerAmazonLinks);

  return (
    <GlobalContext.Provider
      value={{
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
