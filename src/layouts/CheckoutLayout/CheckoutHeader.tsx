import { FaUserCircle } from "react-icons/fa";
import { ScheckoutHeader } from "./SCheckoutHeader";
import { useParams } from "react-router-dom";

export function CheckoutHeader() {
  const { caunt } = useParams();
  return (
    <ScheckoutHeader>
      <div className="backImage">
        <header className="header">
          <img
            className="w-36"
            src="/Images/Amazon_logo(Black).png"
            alt="amazon.logo(black)"
          />
          <p className="text-3xl hidden lg:block pr-14">
            Checkout <span className="text-red-800">( Items: {caunt} )</span>
          </p>
          <p className="text-2xl block lg:hidden">
            Items <span className="text-red-800">{caunt}</span>
          </p>
          <div>
            <FaUserCircle className="size-10" />
          </div>
        </header>
      </div>
    </ScheckoutHeader>
  );
}
