import { Button, Form, Input } from "antd";
import { RegisterStyle } from "../Authstyle";
import { useNavigate } from "react-router-dom";

export function Register(): JSX.Element {
  const navigate = useNavigate();
  return (
    <RegisterStyle className="flex justify-center">
      <div className="content">
        <Form
          className="flex flex-col justify-center"
          name="basic"
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <h1>Create Account</h1>
          <h5>Your Name</h5>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="Enter Your Username" />
          </Form.Item>
          <h5>Mobile number or email</h5>
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
          <h4>Password</h4>
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
          <h5>Re-enter password</h5>
          <Form.Item
            name="password"
            rules={[
              { required: true, message: "Please input your re-password!" },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked"></Form.Item>
          <Form.Item wrapperCol={{ offset: 0, span: 1 }}>
            <Button
              className="bg-yellow-400"
              style={{ width: 325, color: "black" }}
              // onClick={() => navigate("/Login")}
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
          <div className=" mt-5 blur-line text-center"></div>
          <div className="mt-5 account">
            <p>
              Already have an account?{" "}
              <a onClick={() => navigate("/login")}>Sign in</a>
            </p>
            <p>
              Buying for work?{" "}
              <a onClick={() => navigate("/Register")}>
                Create a free personal account
              </a>
            </p>
          </div>
        </Form>
      </div>
    </RegisterStyle>
  );
}
