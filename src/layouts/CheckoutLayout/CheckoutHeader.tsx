import { FaUserCircle } from "react-icons/fa";
import { ScheckoutHeader } from "./SCheckoutHeader";
import { useNavigate, useParams } from "react-router-dom";

export function CheckoutHeader() {
  const { caunt } = useParams();
  const navigate = useNavigate();
  return (
    <ScheckoutHeader>
      <div className="backImage">
        <header className="header">
          <img
            onClick={() => navigate("/")}
            className="w-36 cursor-pointer"
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
