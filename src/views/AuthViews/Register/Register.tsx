import { useState } from "react";
import { Button, Form, Input } from "antd";
import { RegisterStyle } from "../Authstyle";
import { useNavigate } from "react-router-dom";
import { BaseAxios } from "@src/utils/Base_Axios";
import { useAuthPRovider } from "@src/providers/AuthProvider";
import { TAuthTokens } from "@src/@types/TokensTypes";
import { useGlobalProvider } from "@src/providers/GlobalProvider";

export type RegisterFormValue = {
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  password: string;
  repeat_password: string;
};

export function Register(): JSX.Element {
  const { ChooceGender } = useGlobalProvider();
  const { selectedGender, setSelectedGender } = useGlobalProvider();

  const [form] = Form.useForm();
  const [authLoading, setAuthLoading] = useState(false);
  const { setAuthData } = useAuthPRovider();
  const navigate = useNavigate();

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
    try {
      setAuthLoading(true);
      const resp = await BaseAxios.post("/auth/register", values);
      setAuthData(resp.data as TAuthTokens);
      navigate("/login");
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setAuthLoading(false);
    }
  }

  function handleButtonClick(genderId: any) {
    setSelectedGender(genderId);
  }
  console.log(selectedGender);

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
          <h5>Phone Number</h5>
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
                <p>Passwords must be at least 8 characters.</p>
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
          <div className="text-center">
            {ChooceGender.map((gender) => {
              return (
                <Button
                  className={`mb-5 mt-5 gender-id w-32 border-solid rounded-md ${
                    selectedGender === gender.label ? "selected" : ""
                  }`}
                  style={{
                    backgroundColor:
                      selectedGender === gender.label ? "#5c5dd0" : "#bbcdca",
                    color: selectedGender === gender.label ? "white" : "black",
                  }}
                  key={gender.id}
                  onClick={() => handleButtonClick(gender.label)}
                >
                  {gender.label}
                </Button>
              );
            })}
          </div>

          <Form.Item wrapperCol={{ offset: 0, span: 1 }}>
            <Button
              loading={authLoading}
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
