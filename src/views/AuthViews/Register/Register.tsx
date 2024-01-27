import { Button, Form, Input } from "antd";
import { RegisterStyle } from "../Authstyle";
import { useNavigate } from "react-router-dom";
import { useSignUp } from "./hooks/useSignUp";

export type RegisterFormValue = {
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  password: string;
  repeat_password: string;
};

export function Register(): JSX.Element {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { SignUpUser } = useSignUp();

  async function onfinish(values: RegisterFormValue) {
    if (values.password !== values.repeat_password) {
      form.setFields([
        {
          name: "repeat_password",
          errors: ["შემოყვანილი პაროლი არ ემთხვევა არსებულს"],
        },
      ]);
      return;
    }
    await SignUpUser(values);
  }

  return (
    <RegisterStyle className="flex justify-center">
      <div className="content">
        <Form<RegisterFormValue>
          form={form}
          className="flex flex-col justify-center"
          name="basic"
          initialValues={{ remember: true }}
          autoComplete="off"
          onFinish={onfinish}
        >
          <h1>Create Account</h1>
          <h5>First Name</h5>
          <Form.Item
            name="first_name"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input name="bb" placeholder="Enter Your Username" />
          </Form.Item>
          <h5>Last Name</h5>
          <Form.Item
            name="last_name"
            rules={[
              {
                required: true,
                message: "Please input your lastname !",
              },
            ]}
          >
            <Input placeholder="Enter Your Lastname" autoComplete="off" />
          </Form.Item>
          <h5>Email</h5>
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
          <h5>Mobile Number</h5>
          <Form.Item
            name="phone_number"
            rules={[
              {
                required: true,
                message: "Please input your mobile number!",
              },
            ]}
          >
            <Input
              autoComplete="off"
              placeholder="mobile number must be 9 characters"
            />
          </Form.Item>
          <h5>Password</h5>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <div className="flex-col">
              <Input.Password
                autoComplete="off"
                placeholder="At least 6 characters"
              />
              <div className="flex mt-2">
                <img className="h-4 w-4" src="./Images/Img-!.png" alt="!-Img" />
                <p>Passwords must be at least 6 characters.</p>
              </div>
            </div>
          </Form.Item>
          <h5>Re-enter password</h5>
          <Form.Item
            name="repeat_password"
            rules={[
              { required: true, message: "Please input your re-password!" },
            ]}
          >
            <Input.Password autoComplete="off" />
          </Form.Item>
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
          <div className=" mt-5 blur-line text-center"></div>
          <div className="mt-5 account">
            <p>
              Already have an account? &nbsp;
              <a onClick={() => navigate("/login")}>Sign in</a>
            </p>
            <p>
              Buying for work? &nbsp;
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
