import { RegisterStyle } from "../AuthViews/Authstyle";
import { Form, Input, Button, Checkbox, Modal, CheckboxProps } from "antd";

import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { useEffect, useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { PrivateAxios } from "@src/utils/PriveteAxios";
import { useGetUserData } from "@src/hooks/useGetUserData";
import { useNavigate } from "react-router-dom";
import { AiFillAmazonSquare } from "react-icons/ai";
import { useAuthProvider } from "@src/providers/AuthProvider";

export function ChangeUserInfo() {
  // const { GetUserData } = useGetUserData();
  const { logout } = useAuthProvider();
  const { forChange, setForChange, userdata } = useGlobalProvider();
  const [loading, setLoading] = useState<boolean>(false);
  const [oldValue, setOldValue] = useState<string | number>();
  const [newValue, setNewValue] = useState<string | number>();
  const [check, setChecked] = useState<boolean>(false);
  const [successModalVisible, setSuccessModalVisible] =
    useState<boolean>(false);


  const [kay, setKay] = useState<string>("");
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onChange: CheckboxProps["onChange"] = (e) => {
    setChecked(!check);
  };

  const handlekay = () => {
    if (forChange?.kay) {
      switch (forChange?.kay) {
        case "First Name":
          setKay("first_name");
          break;
        case "Last Name":
          setKay("last_name");
          break;
        case "Email":
          setKay("email");
          break;
        case "Phone Number":
          setKay("phone_number");
          break;
      }
    }
  };

  async function onfinish() {
    if (oldValue !== forChange?.value) {
      form.setFields([
        {
          name: "oldValue",
          errors: ["შემოყვანილი მნიშვმნელობა არ ემთხვევა არსებულს"],
        },
      ]);
      return;
    }
    try {
      setLoading(true);
      const resp = await PrivateAxios.put("/user", {
        [kay]: newValue,
      });
      localStorage.removeItem("value");
      localStorage.setItem("value", String(newValue));
      setOldValue(newValue);
      setSuccessModalVisible(true);
      if (!check) {
        setTimeout(() => {
          setSuccessModalVisible(false);
          logout();
          navigate("/");
        }, 3000);
      } else {
        setTimeout(() => {
          setSuccessModalVisible(false);
          navigate("/profile_page");
        }, 3000);
      }
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!forChange) {
      const kay = localStorage.getItem("kay");
      const value = localStorage.getItem("value");
      if (kay !== null && value !== null) {
        setForChange({ kay, value });
      }
    }
    handlekay();
  }, [forChange]);

  return (
    <div>
      <RegisterStyle className="flex  justify-center items-center flex-col">
        <div className="content border-slate-400 border-solid border">
          <Form
            form={form}
            className="flex flex-col justify-center"
            name="Change"
            initialValues={{ remember: true }}
            autoComplete="off"
            onFinish={onfinish}
          >
            <Modal
              title={<AiFillAmazonSquare className="text-orange-600 size-12" />}
              footer={null}
              open={successModalVisible}
              centered
              style={{ textAlign: "center" }}
            >
              <h1>{forChange?.kay} changed successfully</h1>
            </Modal>
            <h2 className="mb-2 ">Change {forChange?.kay}</h2>
            <div className="bg-slate-400 h-px shadow"></div>
            <div className="flex items-center mt-4">
              <FaCircleUser className="text-slate-400 size-12" />
              <div>
                <h3 className="ml-2">{userdata?.first_name.toUpperCase()}</h3>
                <p className="ml-2">{userdata?.email}</p>
              </div>
            </div>
            <h5 className="mt-2">Enter Old {forChange?.kay}</h5>
            <Form.Item
              name="oldValue"
              rules={[
                {
                  required: true,
                  message: "Please input old Value!",
                },
              ]}
            >
              <Input
                value={oldValue}
                onChange={(event) => setOldValue(event.target.value)}
                autoComplete="off"
              />
            </Form.Item>
            <h5>Enter New {forChange?.kay}</h5>
            <Form.Item
              name="newValue"
              rules={[{ required: true, message: "Please input New Value!" }]}
            >
              <Input
                value={newValue}
                onChange={(event) => setNewValue(event.target.value)}
                autoComplete="off"
              />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 0, span: 10 }}>
              <Button
                className="bg-yellow-400 shadow-md"
                style={{ width: 325, color: "black" }}
                type="primary"
                htmlType="submit"
                loading={loading}
              >
                Submit
              </Button>
              <Checkbox
                defaultChecked={false}
                className="w-40 mt-2 ml-2"
                onChange={onChange}
              >
                Keep me signed in.
              </Checkbox>
            </Form.Item>
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
