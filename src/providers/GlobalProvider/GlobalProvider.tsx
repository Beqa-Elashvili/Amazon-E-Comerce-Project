import { PropsWithChildren, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";
import { useAuthProvider } from "../AuthProvider";
import { getcartProducts } from "@src/hooks/useAddAndGetCart/getCartProducts";
import { getWishlist } from "@src/hooks/useAddAndGetLikedProducts/GetWishlist";
import { Getproducts } from "@src/hooks/useGetProducts";
import { GetSaleProducts } from "@src/hooks/useGetSaleProducts";
import {
  TFooterLInks,
  TGender,
  TCategorys,
  TProducts,
  TUserChangeValues,
  GlobalContext,
  TOrders,
  TEnCategorys,
} from "./GlobalContext";
import { TUserData } from "@src/@types/TuserData";

const footerAmazonLinks: { id: string; Name: string; Destination: string }[] = [
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

const amazonServices = [
  {
    id: uuidv4(),
    Name: "Amazon Music",
    Destination: "Stream millions of songs",
  },
  {
    id: uuidv4(),
    Name: "Amazon Ads",
    Destination: "Reach customers wherever they spend their time",
  },
  {
    id: uuidv4(),
    Name: "6pm",
    Destination: "Score deals on fashion brands",
  },
  {
    id: uuidv4(),
    Name: "AbeBooks",
    Destination: "Books, art & collectibles",
  },
  {
    id: uuidv4(),
    Name: "ACX",
    Destination: "Audiobook Publishing Made Easy",
  },
  {
    id: uuidv4(),
    Name: "Sell on Amazon",
    Destination: "Start a Selling Account",
  },
  {
    id: uuidv4(),
    Name: "Amazon Business",
    Destination: "Everything For Your Business",
  },
  {
    id: uuidv4(),
    Name: "AmazonGlobal",
    Destination: "Ship Orders Internationally",
  },
  {
    id: uuidv4(),
    Name: "Home Services",
    Destination: "Experienced Pros, Happiness Guarantee",
  },
  {
    id: uuidv4(),
    Name: "Amazon Web Services",
    Destination: "Scalable Cloud Computing Services",
  },
  {
    id: uuidv4(),
    Name: "Audible",
    Destination: "Listen to Books & Original Audio Performances",
  },
  {
    id: uuidv4(),
    Name: "Box Office Mojo",
    Destination: "Find Movie Box Office Data",
  },
  {
    id: uuidv4(),
    Name: "Goodreads",
    Destination: "Book reviews & recommendations",
  },
  {
    id: uuidv4(),
    Name: "IMDb",
    Destination: "Movies, TV & Celebrities",
  },
  {
    id: uuidv4(),
    Name: "IMDbPro",
    Destination: "Get Info Entertainment Professionals Need",
  },
  {
    id: uuidv4(),
    Name: "Kindle Direct Publishing",
    Destination: "Indie Digital & Print Publishing Made Easy",
  },
  {
    id: uuidv4(),
    Name: "Prime Video Direct",
    Destination: "Video Distribution Made Easy",
  },
  {
    id: uuidv4(),
    Name: "Shopbop",
    Destination: "Designer Fashion Brands",
  },
  {
    id: uuidv4(),
    Name: "Woot!",
    Destination: "Deals and Shenanigans",
  },
  {
    id: uuidv4(),
    Name: "Zappos",
    Destination: "Shoes & Clothing",
  },
  {
    id: uuidv4(),
    Name: "Ring",
    Destination: "Smart Home Security Systems",
  },
  {
    id: uuidv4(),
    Name: "eero WiFi",
    Destination: "Stream 4K Video in Every Room",
  },
  {
    id: uuidv4(),
    Name: "Blink",
    Destination: "Smart Security for Every Home",
  },
  {
    id: uuidv4(),
    Name: "Neighbors App",
    Destination: "Real-Time Crime & Safety Alerts",
  },
  {
    id: uuidv4(),
    Name: "Amazon Subscription Boxes",
    Destination: "Top subscription boxes – right to your door",
  },
  {
    id: uuidv4(),
    Name: "PillPack",
    Destination: "Pharmacy Simplified",
  },
];
const statesArray: { id: string; Name: string }[] = [
  { id: uuidv4(), Name: "Alabama" },
  { id: uuidv4(), Name: "Alaska" },
  { id: uuidv4(), Name: "American Samoa" },
  { id: uuidv4(), Name: "Arizona" },
  { id: uuidv4(), Name: "Arkansas" },
  { id: uuidv4(), Name: "California" },
  { id: uuidv4(), Name: "Colorado" },
  { id: uuidv4(), Name: "Connecticut" },
  { id: uuidv4(), Name: "Delaware" },
  { id: uuidv4(), Name: "District of Columbia" },
  { id: uuidv4(), Name: "Federated States of Micronesia" },
  { id: uuidv4(), Name: "Florida" },
  { id: uuidv4(), Name: "Georgia" },
  { id: uuidv4(), Name: "Guam" },
  { id: uuidv4(), Name: "Hawaii" },
  { id: uuidv4(), Name: "Idaho" },
  { id: uuidv4(), Name: "Illinois" },
  { id: uuidv4(), Name: "Indiana" },
  { id: uuidv4(), Name: "Iowa" },
  { id: uuidv4(), Name: "Kansas" },
  { id: uuidv4(), Name: "Kentucky" },
  { id: uuidv4(), Name: "Louisiana" },
  { id: uuidv4(), Name: "Maine" },
  { id: uuidv4(), Name: "Marshall Islands" },
  { id: uuidv4(), Name: "Maryland" },
  { id: uuidv4(), Name: "Massachusetts" },
  { id: uuidv4(), Name: "Michigan" },
  { id: uuidv4(), Name: "Minnesota" },
  { id: uuidv4(), Name: "Mississippi" },
  { id: uuidv4(), Name: "Missouri" },
  { id: uuidv4(), Name: "Montana" },
  { id: uuidv4(), Name: "Nebraska" },
  { id: uuidv4(), Name: "Nevada" },
  { id: uuidv4(), Name: "New Hampshire" },
  { id: uuidv4(), Name: "New Jersey" },
  { id: uuidv4(), Name: "New Mexico" },
  { id: uuidv4(), Name: "New York" },
  { id: uuidv4(), Name: "North Carolina" },
  { id: uuidv4(), Name: "North Dakota" },
  { id: uuidv4(), Name: "Northern Mariana Islands" },
  { id: uuidv4(), Name: "Ohio" },
  { id: uuidv4(), Name: "Oklahoma" },
  { id: uuidv4(), Name: "Oregon" },
  { id: uuidv4(), Name: "Palau" },
  { id: uuidv4(), Name: "Pennsylvania" },
  { id: uuidv4(), Name: "Puerto Rico" },
  { id: uuidv4(), Name: "Rhode Island" },
  { id: uuidv4(), Name: "South Carolina" },
  { id: uuidv4(), Name: "South Dakota" },
  { id: uuidv4(), Name: "Tennessee" },
  { id: uuidv4(), Name: "Texas" },
  { id: uuidv4(), Name: "Utah" },
  { id: uuidv4(), Name: "Vermont" },
  { id: uuidv4(), Name: "Virgin Islands" },
  { id: uuidv4(), Name: "Virginia" },
  { id: uuidv4(), Name: "Washington" },
  { id: uuidv4(), Name: "West Virginia" },
  { id: uuidv4(), Name: "Wisconsin" },
  { id: uuidv4(), Name: "Wyoming" },
  { id: uuidv4(), Name: "Armed Forces - AA" },
  { id: uuidv4(), Name: "Armed Forces - AE" },
  { id: uuidv4(), Name: "Armed Forces - AP" },
];

const countriesArray: { country: string }[] = [
  { country: "Australia" },
  { country: "Canada" },
  { country: "China" },
  { country: "Japan" },
  { country: "Mexico" },
  { country: "Singapore" },
  { country: "United Kingdom" },
  { country: "Afghanistan" },
  { country: "Aland Islands" },
  { country: "Albania" },
  { country: "Algeria" },
  { country: "American Samoa" },
  { country: "Andorra" },
  { country: "Angola" },
  { country: "Anguilla" },
  { country: "Antigua and Barbuda" },
  { country: "Argentina" },
  { country: "Armenia" },
  { country: "Aruba" },
  { country: "Australia" },
  { country: "Austria" },
  { country: "Azerbaijan" },
  { country: "Bahamas, The" },
  { country: "Bahrain" },
  { country: "Bangladesh" },
  { country: "Barbados" },
  { country: "Belarus" },
  { country: "Belgium" },
  { country: "Belize" },
  { country: "Benin" },
  { country: "Bermuda" },
  { country: "Bhutan" },
  { country: "Bolivia" },
  { country: "Bonaire, Saint Eustatius and Saba" },
  { country: "Bosnia and Herzegovina" },
  { country: "Botswana" },
  { country: "Bouvet Island" },
  { country: "Brazil" },
  { country: "British Indian Ocean Territory" },
  { country: "Brunei Darussalam" },
  { country: "Bulgaria" },
  { country: "Burkina Faso" },
  { country: "Burundi" },
  { country: "Cambodia" },
  { country: "Cameroon" },
  { country: "Canada" },
  { country: "Cape Verde" },
  { country: "Cayman Islands" },
  { country: "Central African Republic" },
  { country: "Chad" },
  { country: "Chile" },
  { country: "China" },
  { country: "Christmas Island" },
  { country: "Cocos (Keeling) Islands" },
  { country: "Colombia" },
  { country: "Comoros" },
  { country: "Congo" },
  { country: "Congo, The Democratic Republic of the" },
  { country: "Cook Islands" },
  { country: "Costa Rica" },
  { country: "Cote D'ivoire" },
  { country: "Croatia" },
  { country: "Curaçao" },
  { country: "Cyprus" },
  { country: "Czech Republic" },
  { country: "Denmark" },
  { country: "Djibouti" },
  { country: "Dominica" },
  { country: "Dominican Republic" },
  { country: "Ecuador" },
  { country: "Egypt" },
  { country: "El Salvador" },
  { country: "Equatorial Guinea" },
  { country: "Eritrea" },
  { country: "Estonia" },
  { country: "Ethiopia" },
  { country: "Falkland Islands (Malvinas)" },
  { country: "Faroe Islands" },
  { country: "Fiji" },
  { country: "Finland" },
  { country: "France" },
  { country: "French Guiana" },
  { country: "French Polynesia" },
  { country: "French Southern Territories" },
  { country: "Gabon" },
  { country: "Gambia, The" },
  { country: "Georgia" },
  { country: "Germany" },
  { country: "Ghana" },
  { country: "Gibraltar" },
  { country: "Greece" },
  { country: "Greenland" },
  { country: "Grenada" },
  { country: "Guadeloupe" },
  { country: "Guatemala" },
  { country: "Guernsey" },
  { country: "Guinea" },
  { country: "Guinea-Bissau" },
  { country: "Guyana" },
  { country: "Haiti" },
  { country: "Heard Island and the McDonald Islands" },
  { country: "Holy See" },
  { country: "Honduras" },
  { country: "Hong Kong" },
  { country: "Hungary" },
  { country: "Iceland" },
  { country: "India" },
  { country: "Indonesia" },
  { country: "Iraq" },
  { country: "Ireland" },
  { country: "Isle of Man" },
  { country: "Israel" },
  { country: "Italy" },
  { country: "Jamaica" },
  { country: "Japan" },
  { country: "Jersey" },
  { country: "Jordan" },
  { country: "Kazakhstan" },
  { country: "Kenya" },
  { country: "Kiribati" },
  { country: "Kosovo" },
  { country: "Kuwait" },
  { country: "Kyrgyzstan" },
  { country: "Lao People's Democratic Republic" },
  { country: "Latvia" },
  { country: "Lebanon" },
  { country: "Lesotho" },
  { country: "Liberia" },
  { country: "Libya" },
  { country: "Liechtenstein" },
  { country: "Lithuania" },
  { country: "Luxembourg" },
  { country: "Macao" },
  { country: "Macedonia, The Former Yugoslav Republic of" },
  { country: "Madagascar" },
  { country: "Malawi" },
  { country: "Malaysia" },
  { country: "Maldives" },
  { country: "Mali" },
  { country: "Malta" },
  { country: "Marshall Islands" },
  { country: "Martinique" },
  { country: "Mauritania" },
  { country: "Mauritius" },
  { country: "Mayotte" },
  { country: "Mexico" },
  { country: "Micronesia, Federated States of" },
  { country: "Moldova, Republic of" },
  { country: "Monaco" },
  { country: "Mongolia" },
  { country: "Montenegro" },
  { country: "Montserrat" },
];
const Genders: TGender[] = [
  { label: "Male", value: "male", id: uuidv4() },
  { label: "Female", value: "female", id: uuidv4() },
];

const EnCategorys: TEnCategorys[] = [
  {
    id: uuidv4(),
    name: "Smartphones",
  },
  {
    id: uuidv4(),
    name: "Laptops",
  },
  {
    id: uuidv4(),
    name: "Audio",
  },
  {
    id: uuidv4(),
    name: "Photo | Video",
  },
  {
    id: uuidv4(),
    name: "Gaming",
  },
  {
    id: uuidv4(),
    name: "TV | Monitors",
  },
  {
    id: uuidv4(),
    name: "Tables",
  },

  {
    id: uuidv4(),
    name: "Tools",
  },
];

export function GlobalProvider({ children }: PropsWithChildren) {
  const [saleProducts, setSaleProducts] = useState<TProducts[]>([]);
  const [categorys, setCategorys] = useState<TCategorys[]>([]);
  const [EnCategorysState, setEnCategorysState] =
    useState<TEnCategorys[]>(EnCategorys);
  const [footerLinks, setFooterLinks] =
    useState<TFooterLInks[]>(footerAmazonLinks);
  const [ChooceGender, setChooceGender] = useState<TGender[]>(Genders);
  const [selectedGender, setSelectedGender] = useState<string>("");
  const [products, setProducts] = useState<TProducts[]>([]);
  const [cartProducts, setCartProducts] = useState<TProducts[]>([]);
  const [wishlist, setwishlist] = useState<TProducts[]>([]);
  const [categoryProducts, setCategoryProducts] = useState<TProducts[]>([]);
  const [CategoryName, setCategoryName] = useState<string>("");
  const [sliderValue, setSliderValue] = useState<number[]>([0, 0]);
  const [forChange, setForChange] = useState<TUserChangeValues>();
  const [userdata, setUserData] = useState<TUserData>();
  const [collapsed, setCollapsed] = useState<boolean | undefined>(true);
  const [product, setProduct] = useState<TProducts>();
  const [zipCode, setZipCode] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [openLocationModal, setOpenLocationModal] = useState<boolean>(false);
  const [states, setStates] = useState(statesArray);
  const [CartTotalprice, setCartTotalprice] = useState<number>(0);
  const [countries, setcountries] = useState(countriesArray);
  const [ProductsCount, setAddProductCount] = useState<number | null>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [productsSlider, setProductsSlider] = useState<TProducts[]>([]);

  const [FooterLinksTwo, setFooterLinksTwo] =
    useState<TFooterLInks[]>(amazonServices);
  const [Orders, setOrders] = useState<TOrders[]>([]);
  const { authStatus } = useAuthProvider();

  function sumPrices() {
    if (!cartProducts || cartProducts.length === 0) {
      return 0;
    }
    const totalPrice = cartProducts.reduce((accumulator, currentItem) => {
      const price =
        currentItem.cartProduct.salePrice !== null
          ? currentItem.cartProduct.salePrice
          : currentItem.cartProduct.price;
      return accumulator + price * currentItem.count;
    }, 0);
    setCartTotalprice(totalPrice);
  }

  function getCount() {
    if (cartProducts) {
      let count = 0;
      const totalCount: void = cartProducts.forEach(
        (item) => (count += item.count)
      );
      setAddProductCount(count);
    }
  }

  useEffect(() => {
    if (authStatus === "unauthorized") {
      setAddProductCount(0);
    } else {
      getCount();
    }
  }, [cartProducts, authStatus]);

  useEffect(() => {
    Getproducts(setProducts);
    GetSaleProducts(setSaleProducts);
  }, []);

  useEffect(() => {
    if (authStatus === "authorized") {
      getWishlist(setwishlist);
      getcartProducts(setCartProducts);
    }
  }, [authStatus]);

  useEffect(() => {
    if (cartProducts.length !== 0) {
      sumPrices();
    }
  }, [cartProducts]);

  return (
    <GlobalContext.Provider
      value={{
        EnCategorysState,
        setEnCategorysState,
        FooterLinksTwo,
        setFooterLinksTwo,
        Orders,
        setOrders,
        loading,
        setLoading,
        productsSlider,
        setProductsSlider,
        ProductsCount,
        setAddProductCount,
        CartTotalprice,
        setCartTotalprice,
        states,
        setStates,
        openLocationModal,
        setOpenLocationModal,
        zipCode,
        setZipCode,
        location,
        setLocation,
        countries,
        setcountries,
        product,
        setProduct,
        collapsed,
        setCollapsed,
        userdata,
        setUserData,
        forChange,
        setForChange,
        sliderValue,
        setSliderValue,
        CategoryName,
        setCategoryName,
        products,
        setProducts,
        saleProducts,
        cartProducts,
        setCartProducts,
        setSaleProducts,
        selectedGender,
        setSelectedGender,
        categoryProducts,
        setCategoryProducts,
        wishlist,
        setwishlist,
        ChooceGender,
        setChooceGender,
        footerLinks,
        setFooterLinks,
        categorys,
        setCategorys,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
