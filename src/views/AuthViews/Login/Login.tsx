import { Form, Button, Input } from "antd";
import { RegisterStyle } from "../Authstyle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login(): JSX.Element {
  const [isDivVisible, setDivVisible] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    setDivVisible(!isDivVisible);
  };

  return (
    <RegisterStyle className="flex justify-center items-center flex-col">
      <div className="content">
        <Form
          className="flex flex-col justify-center"
          name="basic"
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <h1 className="mb-2">Sign in</h1>
          <h5>Email or mobile phone number</h5>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email or mobile number!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <h5>Password</h5>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="At least 6 charecters" />
            <div className="flex mt-2">
              <img className="h-4 w-4" src="./Images/Img-!.png" alt="" />
              <p>Passwords must be at least 6 characters.</p>
            </div>
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked"></Form.Item>
          <Form.Item wrapperCol={{ offset: 0, span: 1 }}>
            <Button
              className="bg-yellow-400"
              style={{ width: 325, color: "black" }}
              type="primary"
              htmlType="submit"
            >
              Continue
            </Button>
          </Form.Item>
          <p>
            By creating an account, you agree to Amazon's &nbsp;
            <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_register_notification_condition_of_use?ie=UTF8&nodeId=508088">
              Conditions of Use
            </a>
            &nbsp; and &nbsp;
            <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_register_notification_privacy_notice?ie=UTF8&nodeId=468496">
              Privacy Notice
            </a>
            .
          </p>
          <div className="mt-5">
            <button
              onClick={handleButtonClick}
              className="flex border-none bg-white text-blue-400 cursor-pointer hover:underline"
            >
              Need help?
            </button>
            {isDivVisible && (
              <div className="flex flex-col">
                <a href="">Forgot your password?</a>
                <a href="">Other issues with Sign-In</a>
              </div>
            )}
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
        <p className="p-5 text-gray-600">New to Amazon?</p>
        <div className="line"></div>
      </div>
      <button
        onClick={() => {
          navigate("/Register");
        }}
        className="link-button bg-white hover:bg-gray-100 cursor-pointer"
      >
        Create your Amazon account
      </button>
    </RegisterStyle>
  );
}
