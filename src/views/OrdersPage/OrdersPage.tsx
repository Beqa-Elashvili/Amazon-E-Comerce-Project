import { useGetAndRemoveOrders } from "@src/hooks/useGetOrders";
import { SOrdersPage } from "./SOrdersPage";
import { FaAmazonPay } from "react-icons/fa";
import { Button } from "antd";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";
import { useAuthProvider } from "@src/providers/AuthProvider";
import { TOrders } from "@src/providers/GlobalProvider/GlobalContext";

export function OrdersPage() {
  const { Orders, RemoveOrders } = useGetAndRemoveOrders();
  const { authStatus } = useAuthProvider();
  const navigate = useNavigate();

  return (
    <SOrdersPage>
      {Orders.length === 0 ? (
        <div className=" relative flex justify-center items-center">
          <img
            className="w-full"
            src="../Images/empty_cart_image/empty_cart_image.png"
            alt="empty_cart_img"
          />
          <div className="absolute">
            <h1>
              <FormattedMessage
                id="You_do_not_have_orders"
                defaultMessage={"Your Amazon Cart is empty"}
              />
            </h1>
            <div className="bg-slate-700 mt-2 rounded-full p-4">
              {authStatus === "authorized" ? (
                <Button
                  onClick={() => navigate("/")}
                  className="bg-yellow-400 text-base border-none w-full"
                >
                  <FormattedMessage
                    id="Add_Orders_Here"
                    defaultMessage={"Add Orders Here"}
                  />
                </Button>
              ) : (
                <div className="flex justify-between">
                  <Button
                    onClick={() => navigate("/Login")}
                    className="bg-yellow-500 border-none"
                  >
                    <FormattedMessage
                      id="Authorization"
                      defaultMessage={"Sign in to your account"}
                    />
                  </Button>
                  <Button
                    onClick={() => navigate("/Register")}
                    className="bg-yellow-500 border-none"
                  >
                    <FormattedMessage
                      id="Registration"
                      defaultMessage={"Sign up now"}
                    />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className=" p-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-7 gap-y-2">
          {Orders?.map((item: TOrders) => {
            return (
              <div
                key={item.id}
                className="bg-white p-4 relative shadow-inner  rounded-lg "
              >
                <div>
                  <div>
                    <p>
                      <FormattedMessage
                        id="Total_Items"
                        defaultMessage={"Total Items"}
                      />{" "}
                      {item.totalItems}
                    </p>
                    <p>
                      <FormattedMessage
                        id="Products_prices"
                        defaultMessage={"Products Prices"}
                      />{" "}
                      ${item.totalPrice}
                    </p>
                    <p>
                      <FormattedMessage
                        id="Order_date"
                        defaultMessage={"Products Prices"}
                      />
                      <span className="text-blue-700">
                        {" "}
                        ,,{item.created_at}''
                      </span>
                    </p>
                  </div>
                  <FaAmazonPay className=" absolute right-2 top-0 size-12 text-orange-600" />
                </div>
                <Button
                  onClick={() => RemoveOrders(item.id)}
                  className="text-base mt-4 w-full bg-orange-400"
                >
                  <FormattedMessage
                    id="Remove_order"
                    defaultMessage={"Products Prices"}
                  />
                </Button>
              </div>
            );
          })}
        </div>
      )}
    </SOrdersPage>
  );
}
