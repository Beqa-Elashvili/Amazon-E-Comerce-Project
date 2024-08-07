import { useState } from "react";
import { Button, Form, Input, Slider } from "antd";
import { RegisterStyle } from "../Authstyle";
import { useNavigate } from "react-router-dom";
import { BaseAxios } from "@src/utils/Base_Axios";
import { useAuthProvider } from "@src/providers/AuthProvider";
import { TAuthTokens } from "@src/@types/TokensTypes";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { FormattedMessage } from "react-intl";

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
  const { setAuthData } = useAuthProvider();
  const navigate = useNavigate();

  async function onfinish(values: RegisterFormValue) {
    if (values.phone_number.length !== 9) {
      form.setFields([
        {
          name: "phone_number",
          errors: ["ნომერი უნდა შედგებოდეს 9 რიცხვისაგან"],
        },
      ]);
      return;
    }
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
      alert(error.response?.data?.message[0].message);
    } finally {
      setAuthLoading(false);
    }
  }

  function handleButtonClick(genderId: string) {
    setSelectedGender(genderId);
  }

  return (
    <RegisterStyle className="flex justify-center">
      <div className="content border-slate-300 border-solid border">
        <Form<RegisterFormValue>
          form={form}
          className="flex flex-col justify-center"
          name="basic"
          initialValues={{ remember: true }}
          autoComplete="off"
          onFinish={onfinish}
        >
          <h1 className="mb-2">
            <FormattedMessage
              id="Create_Account"
              defaultMessage={"Create Account"}
            />
          </h1>
          <h5>
            <FormattedMessage id="First_Name" defaultMessage={"First Name"} />
          </h5>
          <Form.Item
            name="first_name"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input name="bb" placeholder="Enter Your Username" />
          </Form.Item>
          <h5>
            <FormattedMessage id="Last_Name" defaultMessage={"Last Name"} />
          </h5>
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
          <h5>
            <FormattedMessage
              id="Phone_Number"
              defaultMessage={"Phone Number"}
            />
          </h5>
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
              type="number"
              maxLength={9}
              autoComplete="off"
              placeholder="mobile number must be 9 characters"
            />
          </Form.Item>
          <h5>
            <FormattedMessage id="Email" defaultMessage={"Email"} />
          </h5>
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
          <h5>
            <FormattedMessage id="Password" defaultMessage={"Password"} />
          </h5>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <div className="flex-col">
              <Input.Password
                name="password"
                minLength={8}
                autoComplete="off"
                placeholder="At least 8 characters"
              />
              <div className="flex mt-2">
                <img className="h-4 w-4" src="./Images/Img-!.png" alt="!-Img" />
                <p>Passwords must be at least 8 characters.</p>
              </div>
            </div>
          </Form.Item>
          <h5>
            <FormattedMessage
              id="Re-enter_Password"
              defaultMessage={"Re-enter Password"}
            />
          </h5>
          <Form.Item
            name="repeat_password"
            rules={[
              { required: true, message: "Please input your re-password!" },
            ]}
          >
            <Input.Password
              minLength={8}
              name="repeat_password"
              autoComplete="off"
            />
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
              <FormattedMessage id="Continue" defaultMessage={"Continue"} />
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
