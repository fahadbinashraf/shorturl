import { LinkOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import React, { useEffect } from "react";
import useHttp from "../hooks/use-http";
import { shortURLService } from "../services/shortURL.service";
import ShortURL from "./ShortURL";

const URLForm = () => {
  const {
    sendRequest: createShortURL,
    status,
    data: responseData,
    error,
  } = useHttp(shortURLService.create);
  const [messageApi, contextHolder] = message.useMessage();
  useEffect(() => {
    if (error) {
      messageApi.open({
        type: "error",
        content: error,
      });
    }
  }, [error]);
  const handleOnFinish = (values) => {
    createShortURL(values.long_url);
  };
  const loading = status === "pending";
  return (
    <>
      {contextHolder}

      <Form
        layout="vertical"
        size="large"
        onFinish={handleOnFinish}
        requiredMark={false}
        disabled={loading}
      >
        <Form.Item
          label={
            <span>
              <LinkOutlined /> Enter a long URL to make it short
            </span>
          }
          name="long_url"
          rules={[
            { required: true, message: "The URL field is required." },
            {
              type: "url",
              message: "Please enter a valid URL.",
            },
            {
              message: "Please enter URL associated with 'rebuy.de' only.",
              validator: (_, value) => {
                if (
                  !value ||
                  value.match(/https?:\/\/(www\.)?rebuy.de(\/\w+)?/)
                ) {
                  return Promise.resolve();
                }
                return Promise.reject();
              },
            },
          ]}
          validateFirst
        >
          <Input placeholder="Enter a long url..." />
        </Form.Item>
        {responseData && responseData.data?.short && (
          <ShortURL url={responseData.data.short} />
        )}
        <Form.Item>
          <Button block type="primary" htmlType="submit" loading={loading}>
            Make ShortURL!
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default URLForm;
