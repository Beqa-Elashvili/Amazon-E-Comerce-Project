import { RegisterStyle } from "../AuthViews/Authstyle";
import { Form, Input, Button } from "antd";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { useEffect } from "react";

export function ChangeUserInfo() {
  const { forChange, setForChange } = useGlobalProvider();

  useEffect(() => {
    if (!forChange) {
      const kay = localStorage.getItem("kay");
      const value = localStorage.getItem("value");
      if (kay !== null && value !== null) {
        setForChange({ kay, value });
      }
    }
  }, [forChange]);

  return (
    <div>
      <RegisterStyle className="flex  justify-center items-center flex-col">
        <div className="content border-slate-400 border-solid border">
          <Form
            className="flex flex-col justify-center"
            name="Sign in"
            initialValues={{ remember: true }}
            autoComplete="off"
          >
            <h1 className="mb-2">Change {forChange?.kay}</h1>
            <h5>Enter Old {forChange?.kay}</h5>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email !",
                },
              ]}
            >
              <Input autoComplete="off" />
            </Form.Item>
            <h5>Enter New {forChange?.kay}</h5>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <div>
                <Input.Password autoComplete="off" />
                <div className="flex mt-2">
                  <img className="h-4 w-4" src="./Images/Img-!.png" alt="" />
                  <p>Passwords must be at least 8 characters.</p>
                </div>
              </div>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 0, span: 1 }}>
              <Button
                className="bg-yellow-400"
                style={{ width: 325, color: "black" }}
                type="primary"
                htmlType="submit"
              >
                Submit
              </Button>
            </Form.Item>

            <div className="mt-5">
              <button className="flex border-none bg-white text-blue-400 cursor-pointer hover:underline">
                Need help?
              </button>
            </div>
            <div className=" mt-5 blur-line text-center"></div>
            <div className="mt-5">
              <h5>Buying for work?</h5>
              <a href="">Shop on Amazon Business</a>
            </div>
          </Form>
        </div>
        <div className="flex items-center justify-center">
          <div className="line"></div>
          <p className="p-5 text-gray-600">For Your Comfortly</p>
          <div className="line"></div>
        </div>
      </RegisterStyle>
      ;
    </div>
  );
}
