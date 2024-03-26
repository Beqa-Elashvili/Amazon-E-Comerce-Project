import { FaUserCircle } from "react-icons/fa";
import { ScheckoutHeader } from "./SCheckoutHeader";

export function CheckoutHeader() {
  return (
    <ScheckoutHeader>
      <div className="backImage">
        <header className="header">
          <img
            className="w-36"
            src="/Images/Amazon_logo(Black).png"
            alt="amazon.logo(black)"
          />
          <p className="text-3xl pr-14">Checkout(items)</p>
          <div>
            <FaUserCircle className="size-10" />
          </div>
        </header>
      </div>
    </ScheckoutHeader>
  );
}
